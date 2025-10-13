import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

// --- Required Types (Pulled from original app.tsx) ---
export type CourseItem = {
  id: string;
  title: string;
  price: number;
  duration: "6 months" | "6 weeks";
  purpose?: string;
  content?: string[];
  image?: any;
};

export type CoursesStackParamList = {
  CoursesList: undefined;
  CourseDetail: { course: CourseItem };
  CourseSelection: { fromDetail?: boolean };
  QuoteGeneration: undefined;
  QuoteSummary: { name: string; email: string; phone: string; subtotal: number; discount: number; vat: number; total: number; selectedCourses: CourseItem[] };
  PaymentSummary: { name: string; email: string; phone: string; subtotal: number; discount: number; vat: number; total: number; selectedCourses: CourseItem[] };
  Checkout: undefined;
};

export type CheckoutProps = NativeStackScreenProps<CoursesStackParamList, "Checkout">;

// --- Required Colors & Styles (Pulled from original app.tsx) ---
const Colors = {
  primary: "#006600", // Green
  background: "#FFFFFF", // White
};

const localStyles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary, // Green background
  },
  textContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.2)', // Slightly transparent overlay
    alignItems: 'center',
  }
});

/**
 * CheckoutScreen
 * This component represents the final step in the purchase process,
 * typically where the user would be redirected to a bank or payment gateway.
 */
const CheckoutScreen: React.FC<CheckoutProps> = () => (
  <View style={localStyles.center}>
    <View style={localStyles.textContainer}>
      <Ionicons name="checkmark-circle-outline" size={80} color={Colors.background} />
      <Text style={{ color: Colors.background, fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>
        Order Confirmed!
      </Text>
      <Text style={{ color: Colors.background, fontSize: 18, marginTop: 10 }}>
        Final Checkout Step (Redirecting to bank/Payment Gateway...)
      </Text>
      <Text style={{ color: Colors.background, fontSize: 16, marginTop: 5 }}>
        A summary will be sent to your email.
      </Text>
    </View>
  </View>
);

export default CheckoutScreen;