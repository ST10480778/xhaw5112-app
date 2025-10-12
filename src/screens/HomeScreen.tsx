import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, ImageBackground, Alert } from "react-native";

// Local imports
import { DrawerNavigationProps, CourseItem } from "../types";
import { homeScreenCourses } from "../data";
import images from "../assets/images";
import { homeStyles, CommonStyles } from "../theme/Styles";
import HomeCourseCard from "../components/HomeCourseCard";

const HomeScreen: React.FC<{ navigation: DrawerNavigationProps }> = ({ navigation }) => {
  const handleGoToAuth = () => {
    navigation.navigate("Profile");
  };

  const handleCoursePress = (course: CourseItem) => {
    // Navigate to the CourseDetail screen within the CoursesStack
    // The "as any" cast is a workaround for deep navigation typing in Drawer/Stack nested structure
    navigation.navigate("CoursesRoot" as any, {
      screen: "CourseDetail",
      params: { course },
    });
  };

  const handleViewMore = () => {
    navigation.navigate("CoursesRoot" as any);
  };

  const handleContactPress = () => {
    Alert.alert("Contact Us", "Call us on 0800 123 4567 or email us at info@empoweringthenation.com");
  };

  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
        <View style={CommonStyles.container}>
          <Image source={images.logo} style={CommonStyles.logo} />
          <Text style={CommonStyles.title}>Welcome To Empowering The Nation</Text>

          <Text style={CommonStyles.text}>
            We specialize in accredited training programs designed to empower individuals with essential skills for
            employment and personal growth. Our courses are structured to be flexible and accessible.
          </Text>

          <TouchableOpacity style={CommonStyles.button} onPress={handleGoToAuth}>
            <Text style={CommonStyles.buttonText}>Sign Up/Sign In</Text>
          </TouchableOpacity>

          {/* 6 Week Courses Section */}
          <View style={homeStyles.sectionHeader}>
            <Text style={homeStyles.sectionTitle}>6 Week Courses (Certifications)</Text>
            <TouchableOpacity onPress={handleViewMore}>
              <Text style={homeStyles.viewMoreText}>View All →</Text>
            </TouchableOpacity>
          </View>
          <View style={homeStyles.cardsRow}>
            {homeScreenCourses["6weeks"].map((course) => (
              <HomeCourseCard key={course.id} course={course} onPress={handleCoursePress} />
            ))}
          </View>

          {/* 6 Month Courses Section */}
          <View style={homeStyles.sectionHeader}>
            <Text style={homeStyles.sectionTitle}>6 Month Courses (Diplomas)</Text>
            <TouchableOpacity onPress={handleViewMore}>
              <Text style={homeStyles.viewMoreText}>View All →</Text>
            </TouchableOpacity>
          </View>
          <View style={homeStyles.cardsRow}>
            {homeScreenCourses["6months"].map((course) => (
              <HomeCourseCard key={course.id} course={course} onPress={handleCoursePress} />
            ))}
          </View>

          <TouchableOpacity style={[CommonStyles.button, { backgroundColor: "#3498DB" }]} onPress={handleContactPress}>
            <Text style={CommonStyles.buttonText}>Contact Us Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;