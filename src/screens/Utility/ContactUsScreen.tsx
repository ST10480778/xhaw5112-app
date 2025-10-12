import React from "react";
import { ScrollView, View, Text, TouchableOpacity, Linking, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Local imports
import images from "../../assets/images";
import { CommonStyles} from "../../theme/Styles";
import{Colors } from "../../theme/Colors";

const ContactUsScreen: React.FC = () => {
  const emailAddress = "info@empoweringthenation.com";
  const phoneNumber = "08001234567";
  const address = "Unit 1, Example Business Park, London, SW1A 0AA";

  const handleCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${emailAddress}`);
  };

  const handleMap = () => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    Linking.openURL(mapUrl);
  };

  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
        <View style={CommonStyles.container}>
          <Text style={CommonStyles.title}>Get In Touch</Text>
          <Text style={[CommonStyles.subtitle, { marginBottom: 20 }]}>
            We're here to answer your questions. Reach out to us through any of the options below.
          </Text>

          {/* Phone Section */}
          <TouchableOpacity
            style={[CommonStyles.button, { backgroundColor: Colors.primary, marginBottom: 10 }]}
            onPress={handleCall}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="call-outline" size={24} color={Colors.background} />
              <Text style={[CommonStyles.buttonText, { marginLeft: 15 }]}>Call Us</Text>
            </View>
          </TouchableOpacity>
          <Text style={[CommonStyles.text, { textAlign: "center", marginBottom: 20 }]}>
            Freephone: {phoneNumber.replace(/(\d{4})(\d{3})(\d{4})/, "$1 $2 $3")}
          </Text>

          {/* Email Section */}
          <TouchableOpacity
            style={[CommonStyles.button, { backgroundColor: Colors.accent, marginBottom: 10 }]}
            onPress={handleEmail}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="mail-outline" size={24} color={Colors.background} />
              <Text style={[CommonStyles.buttonText, { marginLeft: 15 }]}>Email Us</Text>
            </View>
          </TouchableOpacity>
          <Text style={[CommonStyles.text, { textAlign: "center", marginBottom: 20 }]}>Email: {emailAddress}</Text>

          {/* Address Section */}
          <TouchableOpacity
            style={[CommonStyles.button, { backgroundColor: "#3498DB", marginBottom: 10 }]}
            onPress={handleMap}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="location-outline" size={24} color={Colors.background} />
              <Text style={[CommonStyles.buttonText, { marginLeft: 15 }]}>Find Our Location</Text>
            </View>
          </TouchableOpacity>
          <Text style={[CommonStyles.text, { textAlign: "center" }]}>Address: {address}</Text>

          <Text style={[CommonStyles.text, { textAlign: "center", marginTop: 30, fontSize: 14, color: Colors.placeholder }]}>
            Office Hours: Mon - Fri, 9:00 AM to 5:00 PM
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ContactUsScreen;