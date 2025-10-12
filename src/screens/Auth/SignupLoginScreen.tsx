import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
// Local imports
import { DrawerScreenProps } from "@react-navigation/drawer";
import { DrawerParamList } from "../../types";
import { useUser } from "../../context/UserContext";
import images from "../../assets/images";
import { CommonStyles} from "../../theme/Styles";
import{ Colors } from "../../theme/Colors";

type SignupLoginScreenProps = DrawerScreenProps<DrawerParamList, "Profile">;

const SignupLoginScreen: React.FC<SignupLoginScreenProps> = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, user } = useUser();

  // If user is already logged in, navigate to the user profile
  if (user) {
  navigation.navigate("UserProfile");
  return null;
}

  const handleAuth = () => {
    if (!email || !password || (!isLogin && (!name || !phone))) {
      Alert.alert("Input Error", "Please fill in all required fields.");
      return;
    }

    if (isLogin) {
      // Mock Login logic
      if (email === "test@test.com" && password === "123456") {
        signIn("Test User", email, "07700900000"); // Mock sign in
        Alert.alert("Success", "You have successfully logged in!");
        navigation.navigate("UserProfile");
      } else {
        Alert.alert("Login Failed", "Invalid email or password.");
      }
    } else {
      // Mock Signup logic
      signIn(name, email, phone);
      Alert.alert("Success", "Account created and logged in!");
      navigation.navigate("UserProfile");
    }
  };

  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <ScrollView contentContainerStyle={CommonStyles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={CommonStyles.container}>
          <Text style={CommonStyles.title}>{isLogin ? "Sign In" : "Create Account"}</Text>
          <Text style={CommonStyles.subtitle}>
            {isLogin ? "Welcome back! Please sign in." : "Join us to manage your courses."}
          </Text>

          {!isLogin && (
            <>
              <TextInput style={CommonStyles.input} placeholder="Full Name" placeholderTextColor={Colors.placeholder} value={name} onChangeText={setName} />
              <TextInput
                style={CommonStyles.input}
                placeholder="Phone Number (e.g., 07700900000)"
                placeholderTextColor={Colors.placeholder}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </>
          )}

          <TextInput
            style={CommonStyles.input}
            placeholder="Email Address"
            placeholderTextColor={Colors.placeholder}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={CommonStyles.input}
            placeholder="Password"
            placeholderTextColor={Colors.placeholder}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={CommonStyles.button} onPress={handleAuth}>
            <Text style={CommonStyles.buttonText}>{isLogin ? "Sign In" : "Sign Up"}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={CommonStyles.linkText}>
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignupLoginScreen;