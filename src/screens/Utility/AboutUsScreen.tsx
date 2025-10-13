import React from "react";
import { ScrollView, View, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Local imports
import images from "../../assets/images";
import { CommonStyles } from "../../theme/Styles";
import{Colors} from "../../theme/Colors";

const AboutUsScreen: React.FC = () => {
  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <View style={CommonStyles.overlay}> 
      <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
        <View style={CommonStyles.container}>
          <Text style={CommonStyles.title}>About Empowering The Nation</Text>

          <Text style={[CommonStyles.subtitle, { textAlign: "left", marginBottom: 15 }]}>
            Our Mission
          </Text>
          <Text style={CommonStyles.text}>
            We believe that education is the key to unlocking potential. Our mission is to provide accessible,
            accredited, and industry-relevant training programs that empower individuals to secure stable
            employment and achieve financial independence.
          </Text>

          <Text style={[CommonStyles.subtitle, { textAlign: "left", marginTop: 20, marginBottom: 15 }]}>
            Why Choose Us?
          </Text>

          <View style={{ marginBottom: 15, flexDirection: "row", alignItems: "flex-start" }}>
            <Ionicons name="school-outline" size={24} color={Colors.primary} style={{ marginRight: 10 }} />
            <View style={{ flex: 1 }}>
              <Text style={[CommonStyles.text, { fontWeight: "600" }]}>Fully Accredited</Text>
              <Text style={CommonStyles.text}>All our courses are industry relevenat and promote self employment.</Text>
            </View>
          </View>

          <View style={{ marginBottom: 15, flexDirection: "row", alignItems: "flex-start" }}>
            <Ionicons name="people-outline" size={24} color={Colors.primary} style={{ marginRight: 10 }} />
            <View style={{ flex: 1 }}>
              <Text style={[CommonStyles.text, { fontWeight: "600" }]}>Industry Expertise</Text>
              <Text style={CommonStyles.text}>Our tutors are certified professionals with real-world experience.</Text>
            </View>
          </View>

          <View style={{ marginBottom: 15, flexDirection: "row", alignItems: "flex-start" }}>
            <Ionicons name="time-outline" size={24} color={Colors.primary} style={{ marginRight: 10 }} />
            <View style={{ flex: 1 }}>
              <Text style={[CommonStyles.text, { fontWeight: "600" }]}>Flexible Learning</Text>
              <Text style={CommonStyles.text}>Study at your own pace with our mix of online and in-person options.</Text>
            </View>
          </View>

          <Text style={[CommonStyles.subtitle, { textAlign: "left", marginTop: 20, marginBottom: 15 }]}>
            Our Commitment to You
          </Text>
          <Text style={CommonStyles.text}>
            We are committed to providing a supportive learning environment. From your first inquiry to
            course completion and beyond, our dedicated team is here to help you succeed.
          </Text>
        </View>
      </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default AboutUsScreen;