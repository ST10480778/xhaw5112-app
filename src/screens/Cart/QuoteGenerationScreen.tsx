import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from "react-native";

// Local imports
import { CoursesStackProps } from "../../types";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import images from "../../assets/images";
import { CommonStyles } from "../../theme/Styles";
import {Colors } from "../../theme/Colors";

type QuoteGenerationScreenProps = CoursesStackProps<"QuoteGeneration">;

const QuoteGenerationScreen: React.FC<QuoteGenerationScreenProps> = ({ navigation }) => {
  const { user } = useUser();
  const { cart, getCartTotals } = useCart();
  const { subtotal, discount, vat, total } = getCartTotals();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");

  const handleGenerateQuote = () => {
    if (cart.length === 0) {
      Alert.alert("Cart Empty", "Please add courses before generating a quote.");
      return;
    }
    if (!name || !email || !phone) {
      Alert.alert("Input Error", "Please fill in all contact details.");
      return;
    }

    // Navigate to the Quote Summary screen with all necessary data
    navigation.navigate("QuoteSummary", {
      name,
      email,
      phone,
      subtotal,
      discount,
      vat,
      total,
      selectedCourses: cart,
    });
  };

  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <ScrollView contentContainerStyle={CommonStyles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={CommonStyles.container}>
          <Text style={CommonStyles.title}>Contact Details for Quote</Text>
          <Text style={[CommonStyles.text, { marginBottom: 20 }]}>
            We need your details to prepare and send your personalized quote, including multi-course discounts.
          </Text>

          <TextInput
            style={CommonStyles.input}
            placeholder="Full Name"
            placeholderTextColor={Colors.placeholder}
            value={name}
            onChangeText={setName}
          />
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
            placeholder="Phone Number"
            placeholderTextColor={Colors.placeholder}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <TouchableOpacity style={CommonStyles.button} onPress={handleGenerateQuote}>
            <Text style={CommonStyles.buttonText}>Generate Quote Summary</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[CommonStyles.button, { backgroundColor: Colors.primary }]} onPress={() => navigation.goBack()}>
            <Text style={CommonStyles.buttonText}>Back to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default QuoteGenerationScreen;