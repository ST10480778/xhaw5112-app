import React from "react";
import { ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// ------------------- CORRECTED IMPORTS -------------------
import { CartProvider } from "./src/context/CartContext";
import { UserProvider } from "./src/context/UserContext";
import images from "./src/assets/images";
import { rootStyles } from "./src/theme/Styles"; // CommonStyles, rootStyles, etc. are exported from here
import { Colors } from "./src/theme/Colors"; // Colors is now imported directly from Colors.ts

// Screen Imports
import HomeScreen from "./src/screens/HomeScreen";
import SignupLoginScreen from "./src/screens/Auth/SignupLoginScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import UserProfileScreen from "./src/screens/Auth/UserProfileScreen";
import CoursesStack from "./src/navigation/CoursesStack";
import QuoteGenerationScreen from "./src/screens/Cart/QuoteGenerationScreen";
import AboutUsScreen from "./src/screens/Utility/AboutUsScreen";
import ContactUsScreen from "./src/screens/Utility/ContactUsScreen";
import FAQScreen from "./src/screens/Utility/FAQScreen";

// Types
import { DrawerParamList } from "./src/types";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function App() {
  // Use the UserProvider and CartProvider wrappers
  return (
    <UserProvider>
      <CartProvider>
        <ImageBackground source={images.background} style={rootStyles.appBackground} resizeMode="cover">
          <NavigationContainer>
            <Drawer.Navigator
              initialRouteName="Home"
              screenOptions={{
                drawerActiveTintColor: Colors.background,
                drawerActiveBackgroundColor: Colors.secondary,
                drawerInactiveTintColor: Colors.primary,
                headerStyle: { backgroundColor: Colors.primary },
                headerTintColor: Colors.background,
                // sceneContainerStyle: { backgroundColor: "transparent" }, <-- REMOVED: No longer supported
              }}
            >
              <Drawer.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
              <Drawer.Screen name="Profile" component={SignupLoginScreen} options={{ title: "Sign Up / Log In" }} />
              <Drawer.Screen name="Dashboard" component={DashboardScreen} />
              <Drawer.Screen name="UserProfile" component={UserProfileScreen} options={{ title: "My Profile" }} />
              <Drawer.Screen name="CoursesRoot" component={CoursesStack} options={{ title: "Courses" }} />
              <Drawer.Screen name="Get Quote" component={QuoteGenerationScreen} />
              <Drawer.Screen name="About Us" component={AboutUsScreen} />
              <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
              <Drawer.Screen name="FAQ" component={FAQScreen} />
            </Drawer.Navigator>
          </NavigationContainer>
        </ImageBackground>
      </CartProvider>
    </UserProvider>
  );
}