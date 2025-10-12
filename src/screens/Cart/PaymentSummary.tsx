import React from "react";
import { ScrollView, View, Text, TouchableOpacity, ImageBackground, Alert, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Local imports
import { CoursesStackProps } from "../../types";
import images from "../../assets/images";
import { CommonStyles, cartStyles} from "../../theme/Styles";
import {Colors } from "../../theme/Colors"
import { useCart } from "../../context/CartContext";

type PaymentSummaryScreenProps = CoursesStackProps<"PaymentSummary">;

const PaymentSummaryScreen: React.FC<PaymentSummaryScreenProps> = ({ route, navigation }) => {
  const { name, email, total, selectedCourses } = route.params;
  const { clearCart } = useCart();

  const handlePayFull = () => {
    // Mock payment gateway link
    const paymentUrl = "https://mock-payment-gateway.com/paynow";
    Linking.openURL(paymentUrl);
    Alert.alert("Payment Initiated", `Please complete the £${total.toFixed(2)} payment securely.`);

    // In a real app, this would clear the cart AFTER a payment success webhook is received
    // For mock purposes, we clear it here.
    clearCart();
    navigation.popToTop();
  };

  const handleFinance = () => {
    Alert.alert(
      "Finance Application",
      "You will now be redirected to our finance partner to complete an interest-free payment plan application."
    );
    // Mock finance application link
    const financeUrl = "https://mock-finance-partner.com/apply";
    Linking.openURL(financeUrl);
    // Do NOT clear cart yet, wait for finance approval
  };

  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
        <View style={CommonStyles.container}>
          <Text style={CommonStyles.title}>Final Step: Choose Payment</Text>
          <Text style={[CommonStyles.subtitle, { color: Colors.error }]}>Total Due: £{total.toFixed(2)}</Text>

          <Text style={cartStyles.sectionTitle}>Course List</Text>
          <View style={cartStyles.summaryCard}>
            {selectedCourses.map((course) => (
              <View key={course.id} style={cartStyles.costRow}>
                <Text style={[cartStyles.costLabel, { color: Colors.text }]}>{course.title}</Text>
                <Text style={[cartStyles.costValue, { color: Colors.accent }]}>£{course.price.toFixed(2)}</Text>
              </View>
            ))}
          </View>

          <Text style={cartStyles.sectionTitle}>Payment Options</Text>

          <TouchableOpacity style={[CommonStyles.button, { backgroundColor: Colors.accent }]} onPress={handlePayFull}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="card-outline" size={24} color={Colors.background} />
              <Text style={[CommonStyles.buttonText, { marginLeft: 10 }]}>Pay Full Amount Now</Text>
            </View>
          </TouchableOpacity>
          <Text style={[CommonStyles.text, { textAlign: "center", marginBottom: 20 }]}>Pay the full total of £{total.toFixed(2)} securely online.</Text>

          <TouchableOpacity style={[CommonStyles.button, { backgroundColor: "#2980B9" }]} onPress={handleFinance}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="wallet-outline" size={24} color={Colors.background} />
              <Text style={[CommonStyles.buttonText, { marginLeft: 10 }]}>Apply for Interest-Free Finance</Text>
            </View>
          </TouchableOpacity>
          <Text style={[CommonStyles.text, { textAlign: "center" }]}>
            Available for all orders over £500. Quick application and instant decision.
          </Text>

          <TouchableOpacity style={[CommonStyles.button, { backgroundColor: Colors.primary, marginTop: 30 }]} onPress={() => navigation.popToTop()}>
            <Text style={CommonStyles.buttonText}>Cancel & Return to Courses</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PaymentSummaryScreen;