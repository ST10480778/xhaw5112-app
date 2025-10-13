import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Local imports
import { CoursesStackProps } from "../../types";
import { useCart } from "../../context/CartContext";
import images from "../../assets/images";
import { CommonStyles, detailStyles} from "../../theme/Styles";
import {Colors } from "../../theme/Colors"
type CourseDetailScreenProps = CoursesStackProps<"CourseDetail">;

const CourseDetailScreen: React.FC<CourseDetailScreenProps> = ({ route, navigation }) => {
  const { course } = route.params;
  const { addToCart, cart } = useCart();
  const isInCart = cart.some((item) => item.id === course.id);

  const handleAddToCart = () => {
    if (isInCart) {
      Alert.alert("Already in Cart", `${course.title} is already in your cart.`);
      return;
    }
    addToCart(course);
    Alert.alert("Success", `${course.title} added to cart!`);
    navigation.navigate("CourseSelection", { fromDetail: true });
  };

  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <View style={CommonStyles.overlay}> 
      <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
        <View style={CommonStyles.container}>
          <Image source={course.image || images.logo} style={detailStyles.detailImage} />
          <Text style={CommonStyles.title}>{course.title}</Text>
          <Text style={detailStyles.priceText}>Price: £{course.price.toFixed(2)}</Text>
          <Text style={CommonStyles.subtitle}>Duration: {course.duration}</Text>

          <Text style={CommonStyles.subtitle}>Course Purpose</Text>
          <Text style={CommonStyles.text}>{course.purpose || "No specific purpose provided."}</Text>

          <Text style={CommonStyles.subtitle}>Key Content</Text>
          {(course.content || []).map((point, index) => (
            <View key={index} style={detailStyles.contentPoint}>
              <Ionicons name="checkmark-circle" size={20} color={Colors.accent} />
              <Text style={detailStyles.pointText}>{point}</Text>
            </View>
          ))}

          <TouchableOpacity
            style={[CommonStyles.button, isInCart && { backgroundColor: Colors.placeholder }]}
            onPress={handleAddToCart}
            disabled={isInCart}
          >
            <Text style={CommonStyles.buttonText}>{isInCart ? "Already Added" : "Add to Cart"}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[CommonStyles.button, { backgroundColor: Colors.primary }]} onPress={() => navigation.navigate("CoursesList")}>
            <Text style={CommonStyles.buttonText}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default CourseDetailScreen;