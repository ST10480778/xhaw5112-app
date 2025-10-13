import React from "react";
import { ScrollView, View, Text, ImageBackground, FlatList, TouchableOpacity, ViewStyle} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Local imports
import images from "../assets/images";
import { CommonStyles} from "../theme/Styles";
import{dashboardStyles} from "../theme/Styles";
import {Colors } from "../theme/Colors"

import { useUser } from "../context/UserContext"; 
import { useCart } from "../context/CartContext"; 
import { CourseItem } from "../types";


// --- 1. PROGRESS BAR COMPONENT ---
const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  const percentage = `${progress}%`;
  return (
    <View style={dashboardStyles.progressBarContainer}>
      <Text style={dashboardStyles.progressLabel}>Progress: {percentage}</Text>
      <View style={dashboardStyles.progressBarTrack}>
        <View style={[
            dashboardStyles.progressBarFill, 
            { width: percentage } as ViewStyle // <-- THE CRUCIAL FIX
          ]}  />
      </View>
    </View>
  );
};

// --- 2. ENROLLED COURSES LIST COMPONENT ---
const EnrolledCoursesList: React.FC = () => {
  const { cart } = useCart();
  
  if (cart.length === 0) {
    return (
      <View style={dashboardStyles.emptyState}>
        <Ionicons name="school-outline" size={30} color={Colors.placeholder} />
        <Text style={[CommonStyles.text, { textAlign: 'center', marginTop: 10 }]}>
          You are not currently enrolled in any courses.
        </Text>
        <TouchableOpacity style={dashboardStyles.enrollButton}>
          <Text style={dashboardStyles.enrollButtonText}>Browse Courses</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderItem = ({ item }: { item: CourseItem }) => (
    <View style={dashboardStyles.courseCard}>
      <Text style={dashboardStyles.courseTitle}>{item.title}</Text>
      <View style={dashboardStyles.courseDetails}>
        <Text style={dashboardStyles.courseText}>Duration: {item.duration}</Text>
        <Text style={dashboardStyles.courseText}>Status: In Progress</Text>
        <Ionicons name="checkmark-circle" size={24} color={Colors.secondary} style={{ marginLeft: 'auto' }} />
      </View>
    </View>
  );

  return (
    <View>
      <Text style={[CommonStyles.subtitle, { marginBottom: 15 }]}>Your Enrolled Courses ({cart.length})</Text>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false} // Disable scrolling inside the ScrollView
      />
    </View>
  );
};


// --- DASHBOARD SCREEN ---
const DashboardScreen: React.FC = () => {
  const { user } = useUser();
  const mockProgress = 75; // Mock progress for demonstration

  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <View style={CommonStyles.overlay}> 
      <ScrollView contentContainerStyle={CommonStyles.scrollContent}>
        <View style={CommonStyles.container}>
          <Text style={CommonStyles.title}>My Student Dashboard</Text>
          <Text style={CommonStyles.text}>
            Welcome back, {user?.name || "Student"}! Here you can track your progress.
          </Text>

          {/* ADDED COMPONENTS START HERE */}
          <View style={dashboardStyles.dashboardSection}>
            <ProgressBar progress={mockProgress} />
          </View>

          <View style={dashboardStyles.dashboardSection}>
            <EnrolledCoursesList />
          </View>
          {/* ADDED COMPONENTS END HERE */}

          <Text style={CommonStyles.text}>
            Here you will be able to track your course progress, view your assignments, and access your certificates upon completion.
          </Text>
        </View>
      </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default DashboardScreen;