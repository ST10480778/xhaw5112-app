import React from "react";
import { ScrollView, View, Text, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Local imports
import { CoursesStackProps } from "../../types";
import images from "../../assets/images";
import { CommonStyles, cartStyles } from "../../theme/Styles";
import {Colors } from "../../theme/Colors";
import { useCart } from "../../context/CartContext";

type QuoteSummaryScreenProps = CoursesStackProps<"QuoteSummary">;

const QuoteSummaryScreen: React.FC<QuoteSummaryScreenProps> = ({ route, navigation }) => {
  const { name, email, phone, subtotal, discount, vat, total, selectedCourses } = route.params;
  const { clearCart } = useCart(); // Assuming you clear the cart on a successful quote/order

  const handleSendQuote = () => {
    // Mock API call to send quote email
    Alert.alert("Quote Sent", `A formal quote has been emailed to ${email}. Thank you!`);
    clearCart();
    navigation.popToTop(); // Go back to the Courses List screen
  };

  const handleProceedToPayment = () => {
    // Navigate to payment summary, passing the necessary data
    navigation.navigate("PaymentSummary", {
      name,
      email,
      phone,
      subtotal,
      discount,
      vat,
      total,
      selectedCourses,
    });
  };

  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
        <View style={CommonStyles.container}>
          <Text style={CommonStyles.title}>Final Quote Summary</Text>
          <Text style={[CommonStyles.text, { textAlign: "center", marginBottom: 20 }]}>
            Please review the details below before proceeding to checkout or requesting the quote.
          </Text>

          <Text style={cartStyles.sectionTitle}>Contact Information</Text>
          <View style={cartStyles.summaryCard}>
            <Text style={CommonStyles.text}>
              <Ionicons name="person-outline" size={16} color={Colors.primary} /> Name: {name}
            </Text>
            <Text style={CommonStyles.text}>
              <Ionicons name="mail-outline" size={16} color={Colors.primary} /> Email: {email}
            </Text>
            <Text style={CommonStyles.text}>
              <Ionicons name="call-outline" size={16} color={Colors.primary} /> Phone: {phone}
            </Text>
          </View>

          <Text style={cartStyles.sectionTitle}>Order Totals</Text>
          <View style={cartStyles.summaryCard}>
            <View style={cartStyles.costRow}>
              <Text style={cartStyles.costLabel}>Subtotal</Text>
              <Text style={cartStyles.costValue}>£{subtotal.toFixed(2)}</Text>
            </View>
            <View style={cartStyles.costRow}>
              <Text style={cartStyles.costLabel}>Multi-Course Discount</Text>
              <Text style={[cartStyles.costValue, { color: Colors.accent }]}>- £{discount.toFixed(2)}</Text>
            </View>
            <View style={cartStyles.costRow}>
              <Text style={cartStyles.costLabel}>VAT (15%)</Text>
              <Text style={cartStyles.costValue}>+ £{vat.toFixed(2)}</Text>
            </View>
            <View style={cartStyles.totalRow}>
              <Text style={cartStyles.totalLabel}>Grand Total</Text>
              <Text style={cartStyles.totalValue}>£{total.toFixed(2)}</Text>
            </View>
          </View>

          <TouchableOpacity style={CommonStyles.button} onPress={handleProceedToPayment}>
            <Text style={CommonStyles.buttonText}>Proceed to Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[CommonStyles.button, { backgroundColor: Colors.primary }]} onPress={handleSendQuote}>
            <Text style={CommonStyles.buttonText}>Request Formal Quote Email</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default QuoteSummaryScreen;