// ContactUsScreen.tsx

import React from "react";
import { ScrollView, View, Text, TouchableOpacity, Linking, ImageBackground, Alert } from "react-native";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

// Local imports
import images from "../../assets/images";
import { CommonStyles } from "../../theme/Styles";
import { Colors } from "../../theme/Colors";
// Import addresses from your central data file
import { addresses } from "../../data"; // <-- MODIFIED: Import from data/index.ts

// --- REMOVED REDUNDANT ADDRESS CONSTANT ---
// The 'addresses' constant was removed from here to avoid duplication.
// It is now imported from your data/index.ts file.

const ContactUsScreen: React.FC = () => {
  const emailAddress = "info@empoweringthenation.com";
  const phoneNumber = "08001234567";
  
  // --- REUSABLE HANDLERS (No changes needed here) ---
  const handleCall = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${emailAddress}`);
  };

  const handleMap = (address: string) => {
    // FIX: Corrected the map URL encoding
    const mapUrl = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
    Linking.openURL(mapUrl).catch(err => {
      Alert.alert("Error", "Could not open map application.");
      console.error('An error occurred opening the map URL:', err);
    });
  };

  const handleFAQ = () => {
    Alert.alert("FAQ Navigation", "Navigate to the FAQ screen.");
     //navigation.navigate("FAQs");
  }

  const handleSocial = (platform: string) => {
    let url = "";
    switch (platform) {
      case "facebook":
        url = "https://www.facebook.com/yourpage";
        break;
      case "tiktok":
        url = "https://www.tiktok.com/@youraccount";
        break;
      case "instagram":
        url = "https://www.instagram.com/youraccount";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/company/yourcompany";
        break;
      default:
        return;
    }
    Linking.openURL(url).catch(err => console.error("Failed to open social link:", err));
  };
  // --- END REUSABLE HANDLERS ---


  // --- REUSABLE ADDRESS BLOCK COMPONENT ---
  const AddressBlock: React.FC<{ address: string; label: string }> = ({ address, label }) => (
    <View style={CommonStyles.addressSection}>
      <TouchableOpacity
        // MODIFIED: Replaced hardcoded blue with a theme color for consistency
        style={[CommonStyles.button, { backgroundColor: Colors.secondary }]}
        onPress={() => handleMap(address)}
      >
        {/* MODIFIED: Used new styles for clean, reusable button content */}
        <View style={CommonStyles.buttonContent}>
          <Ionicons name="location-outline" size={24} color={Colors.background} style={CommonStyles.buttonIcon} />
          <Text style={CommonStyles.buttonText}>
            View {label} on Map
          </Text>
        </View>
      </TouchableOpacity>
      {/* MODIFIED: Used a new helperText style for consistency */}
      <Text style={[CommonStyles.helperText, { marginTop: 5 }]}>
        {label} Address: {address}
      </Text>
    </View>
  );
  // --- END ADDRESS BLOCK ---


  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <View style={CommonStyles.overlay}> 
        <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
          <View style={CommonStyles.container}>
            <Text style={CommonStyles.title}>Get In Touch</Text>
            
            {/* MODIFIED: Applied a new style to center the icon */}
            <Ionicons name="person-circle-outline" size={80} color={Colors.primary} style={CommonStyles.contactIcon} />
            
            <Text style={[CommonStyles.subtitle, { marginBottom: 20 }]}>
              We're here to answer your questions. Reach out to us through any of the options below.
            </Text>

            {/* FAQ Section */}
            <Text style={CommonStyles.infoText}>Feeling a bit lost? Check out our FAQ’s</Text>
            <TouchableOpacity style={CommonStyles.faqButton} onPress={handleFAQ} accessibilityRole="button" accessibilityLabel="Open FAQs">
              <Text style={CommonStyles.faqText}>FAQ’s</Text>
            </TouchableOpacity>

            {/* Phone Section */}
            <TouchableOpacity
              style={[CommonStyles.button, { backgroundColor: Colors.primary }]} // Main action button
              onPress={handleCall}
            >
              <View style={CommonStyles.buttonContent}>
                <Ionicons name="call-outline" size={24} color={Colors.background} style={CommonStyles.buttonIcon} />
                <Text style={CommonStyles.buttonText}>Call Us</Text>
              </View>
            </TouchableOpacity>
            <Text style={CommonStyles.helperText}>
              Freephone: {phoneNumber.replace(/(\d{4})(\d{3})(\d{4})/, "$1 $2 $3")}
            </Text>

            {/* Email Section */}
            <TouchableOpacity
              style={[CommonStyles.button, { backgroundColor: Colors.accent }]}
              onPress={handleEmail}
            >
              <View style={CommonStyles.buttonContent}>
                <Ionicons name="mail-outline" size={24} color={Colors.background} style={CommonStyles.buttonIcon} />
                <Text style={CommonStyles.buttonText}>Email Us</Text>
              </View>
            </TouchableOpacity>
            <Text style={CommonStyles.helperText}>Email: {emailAddress}</Text>
            
            <Text style={[CommonStyles.subtitle, { marginTop: 10, marginBottom: 15 }]}>
              Our Locations
            </Text>
            
            <AddressBlock 
              address={addresses[0]} 
              label="Johannesburg Central Office" 
            />
            <AddressBlock 
              address={addresses[1]} 
              label="Johannesburg Main Training Center" 
            />
            <AddressBlock 
              address={addresses[2]} 
              label="Johannesburg Library Garden"
            />

            <Text style={CommonStyles.hoursTitle}>Operating Hours</Text>
            <Text style={CommonStyles.hoursText}>Mon – Fri: 08:00 – 18:00</Text>
            <Text style={[CommonStyles.hoursText, { marginBottom: 20 }]}>Sat – Sun: 09:00 – 14:00</Text>
            
            {/* Social Section */}
            <View style={CommonStyles.socialSection}>
              <Text style={CommonStyles.footerText}>Connect with us</Text>
              <View style={CommonStyles.socialRow}>
                 {/* No changes to social buttons, they are well-styled */}
                <TouchableOpacity
                 onPress={() => handleSocial("facebook")}
                  accessibilityLabel="Facebook" 
                  accessibilityRole="link" style={CommonStyles.socialButton}>
                  <FontAwesome name="facebook" size={22} color="#fff" />
                </TouchableOpacity>
      
                <TouchableOpacity 
                onPress={() => handleSocial("tiktok")}
                 accessibilityLabel="TikTok"
                  accessibilityRole="link" style={CommonStyles.socialButton}>
                  <FontAwesome5 name="tiktok" size={22} color="#fff" />
                </TouchableOpacity>
      
                <TouchableOpacity onPress={() => handleSocial("instagram")} accessibilityLabel="Instagram" accessibilityRole="link" style={CommonStyles.socialButton}>
                  <FontAwesome name="instagram" size={22} color="#fff" />
                </TouchableOpacity>
      
                <TouchableOpacity onPress={() => handleSocial("linkedin")} accessibilityLabel="LinkedIn" accessibilityRole="link" style={CommonStyles.socialButton}>
                  <FontAwesome name="linkedin" size={22} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default ContactUsScreen;