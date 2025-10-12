import React from "react";
import { ScrollView, View, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Local imports
import { faqData } from "../../data";
import images from "../../assets/images";
import { CommonStyles, faqStyles } from "../../theme/Styles";
import {Colors } from "../../theme/Colors";
import AccordionItem from "../../components/ui/AccordionItem";

const FAQScreen: React.FC = () => {
  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
        <View style={CommonStyles.container}>
          <Text style={CommonStyles.title}>Frequently Asked Questions</Text>
          <Text style={[CommonStyles.text, { textAlign: "center", marginBottom: 20 }]}>
            Find quick answers to the most common questions about our courses, payment, and accreditation.
          </Text>

          {faqData.map((item) => (
            <AccordionItem key={item.id} title={item.question} content={item.answer} />
          ))}

          <View style={{ marginTop: 20, padding: 15, backgroundColor: Colors.aboutBackground, borderRadius: 8 }}>
            <View style={faqStyles.cardHeader}>
              <Ionicons name="help-circle-outline" size={24} color={Colors.primary} />
              <Text style={faqStyles.cardTitle}>Need More Help?</Text>
            </View>
            <Text style={faqStyles.cardText}>
              If you can't find the answer you're looking for, please don't hesitate to contact our friendly
              support team via the Contact Us page.
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default FAQScreen;