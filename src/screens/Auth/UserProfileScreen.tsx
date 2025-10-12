import React from "react";
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Local imports
import { DrawerScreenProps } from "@react-navigation/drawer";
import { DrawerParamList } from "../../types";
import { useUser } from "../../context/UserContext";
import images from "../../assets/images";
import { CommonStyles } from "../../theme/Styles";
import { Colors } from "../../theme/Colors"; 

type UserProfileScreenProps = DrawerScreenProps<DrawerParamList, "UserProfile">;

const UserProfileScreen: React.FC<UserProfileScreenProps> = ({ navigation }) => {
  const { user, signOut } = useUser();

  // Redirect to login if not authenticated
  if (!user) {
    // Corrected navigation from replace to reset
    navigation.reset({
      index: 0,
      routes: [{ name: "Profile" }],
    });
    return null;
  }

  const handleSignOut = () => {
    signOut();
    // Corrected navigation from replace to reset
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  const menuItems = [
    { icon: "bookmarks-outline", text: "My Enrolled Courses", screen: "Dashboard" },
    { icon: "calculator-outline", text: "View Quotes/Invoices", screen: "Dashboard" }, // Mock screen
    { icon: "settings-outline", text: "Update Profile Info", screen: "Dashboard" },
  ];

  const handleMenuItemPress = (screen: keyof DrawerParamList) => {
    // Navigate to other screens in the drawer
    navigation.navigate(screen);
  };

  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
        <View style={CommonStyles.container}>
          <Text style={CommonStyles.title}>Hello, {user.name}!</Text>
          <View style={{ marginBottom: 20, padding: 15, backgroundColor: Colors.aboutBackground, borderRadius: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
              <Ionicons name="person-circle-outline" size={30} color={Colors.primary} />
              <Text style={[CommonStyles.text, { marginLeft: 10, fontWeight: "600" }]}>Name: {user.name}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
              <Ionicons name="mail-outline" size={30} color={Colors.primary} />
              <Text style={[CommonStyles.text, { marginLeft: 10 }]}>Email: {user.email}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="call-outline" size={30} color={Colors.primary} />
              <Text style={[CommonStyles.text, { marginLeft: 10 }]}>Phone: {user.phone}</Text>
            </View>
          </View>

          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.text}
              style={[
                CommonStyles.button,
                { backgroundColor: Colors.background, borderWidth: 1, borderColor: Colors.secondary, paddingVertical: 18 },
              ]}
              onPress={() => handleMenuItemPress(item.screen as keyof DrawerParamList)}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name={item.icon as any} size={24} color={Colors.primary} />
                <Text style={[CommonStyles.buttonText, { color: Colors.primary, marginLeft: 15, fontWeight: "600" }]}>
                  {item.text}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={[CommonStyles.button, { backgroundColor: Colors.error, marginTop: 30 }]} onPress={handleSignOut}>
            <Text style={CommonStyles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default UserProfileScreen;