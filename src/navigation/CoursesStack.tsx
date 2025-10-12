import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screen Imports - Corrected paths
import CoursesListScreen from "../screens/Courses/CoursesListScreen";
import CourseDetailScreen from "../screens/Courses/CourseDetailScreen";
import CourseSelectionScreen from "../screens/Cart/CoursesSelectionScreen";
import QuoteGenerationScreen from "../screens/Cart/QuoteGenerationScreen";
import QuoteSummaryScreen from "../screens/Cart/QuoteSummaryScreen";
import PaymentSummaryScreen from "../screens/Cart/PaymentSummary";

// Types
import { CoursesStackParamList } from "../types";
import { Colors } from "../theme/Colors"; // 

const Stack = createNativeStackNavigator<CoursesStackParamList>();

const CoursesStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="CoursesList"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.background,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="CoursesList" component={CoursesListScreen} options={{ title: "All Courses" }} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} options={{ title: "Course Details" }} />
      <Stack.Screen name="CourseSelection" component={CourseSelectionScreen} options={{ title: "Cart & Selection" }} />
      <Stack.Screen name="QuoteGeneration" component={QuoteGenerationScreen} options={{ title: "Generate Quote" }} />
      <Stack.Screen name="QuoteSummary" component={QuoteSummaryScreen} options={{ title: "Quote Summary" }} />
      <Stack.Screen name="PaymentSummary" component={PaymentSummaryScreen} options={{ title: "Payment Summary" }} />
      
    </Stack.Navigator>
  );
};

export default CoursesStack;