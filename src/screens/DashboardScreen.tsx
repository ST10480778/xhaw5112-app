import React from "react";
import { ScrollView, View, Text, ImageBackground } from "react-native";

// Local imports
import images from "../assets/images";
import { CommonStyles} from "../theme/Styles";
import {Colors } from "../theme/Colors"
const DashboardScreen: React.FC = () => {
  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
        <View style={CommonStyles.container}>
          <Text style={CommonStyles.title}>My Student Dashboard</Text>
          <Text style={[CommonStyles.subtitle, { color: Colors.error }]}>
            (This screen is under development)
          </Text>
          <Text style={CommonStyles.text}>
            Here you will be able to track your course progress, view your assignments, and access your certificates upon completion.
          </Text>

          {/* Add components here later: e.g., Progress bars, Enrolled course list */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default DashboardScreen;