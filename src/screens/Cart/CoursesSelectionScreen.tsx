import React from "react";
import { ScrollView, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Local imports
import { CoursesStackProps } from "../../types";
import { useCart } from "../../context/CartContext";
import images from "../../assets/images";
import { CommonStyles, cartStyles } from "../../theme/Styles";
import {Colors } from "../../theme/Colors";

type CourseSelectionScreenProps = CoursesStackProps<"CourseSelection">;

const CourseSelectionScreen: React.FC<CourseSelectionScreenProps> = ({ navigation }) => {
  const { cart, removeFromCart, getCartTotals } = useCart();
  const { subtotal, discount, vat, total } = getCartTotals();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    navigation.navigate("QuoteGeneration");
  };

  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      
      <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
        <View style={CommonStyles.container}>
          <Text style={cartStyles.sectionTitle}>Your Selected Courses ({cart.length})</Text>

          {cart.length === 0 ? (
            <Text style={[CommonStyles.text, { textAlign: "center", color: Colors.error, fontSize: 18 }]}>Your cart is empty. Please add courses.</Text>
          ) : (
            <View style={{ marginBottom: 20 }}>
              {cart.map((course) => (
                <View key={course.id} style={cartStyles.cartItem}>
                  <Text style={cartStyles.cartItemTitle}>{course.title}</Text>
                  <Text style={cartStyles.cartItemPrice}>R{course.price.toFixed(2)}</Text>
                  <TouchableOpacity style={cartStyles.removeButton} onPress={() => removeFromCart(course.id)}>
                    <Ionicons name="trash-outline" size={22} color={Colors.error} />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}

          <Text style={cartStyles.sectionTitle}>Order Summary</Text>
          <View style={cartStyles.summaryCard}>
            <View style={cartStyles.costRow}>
              <Text style={cartStyles.costLabel}>Subtotal</Text>
              <Text style={cartStyles.costValue}>R{subtotal.toFixed(2)}</Text>
            </View>
            <View style={cartStyles.costRow}>
              <Text style={cartStyles.costLabel}>Multi-Course Discount ({cart.length})</Text>
              <Text style={[cartStyles.costValue, { color: Colors.accent }]}>- R{discount.toFixed(2)}</Text>
            </View>
            <View style={cartStyles.costRow}>
              <Text style={cartStyles.costLabel}>VAT (15%)</Text>
              <Text style={cartStyles.costValue}>+ R{vat.toFixed(2)}</Text>
            </View>
            <View style={cartStyles.totalRow}>
              <Text style={cartStyles.totalLabel}>Grand Total</Text>
              <Text style={cartStyles.totalValue}>R{total.toFixed(2)}</Text>
            </View>
          </View>

          <TouchableOpacity style={CommonStyles.button} onPress={handleCheckout} disabled={cart.length === 0}>
            <Text style={CommonStyles.buttonText}>Proceed to Quote/Checkout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[CommonStyles.button, { backgroundColor: Colors.primary }]} onPress={() => navigation.navigate("CoursesList")}>
            <Text style={CommonStyles.buttonText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
    </ImageBackground>
  );
};

export default CourseSelectionScreen;