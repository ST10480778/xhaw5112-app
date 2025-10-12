import React from "react";
import { ScrollView, View, Text, TouchableOpacity, ImageBackground, FlatList } from "react-native";

// Local imports
import { CoursesStackProps, CourseItem } from "../../types";
import { allCourses } from "../../data";
import images from "../../assets/images";
import { CommonStyles, cardStyles } from "../../theme/Styles";
import{Colors} from "../../theme/Colors"
import HomeCourseCard from "../../components/HomeCourseCard";

type CoursesListScreenProps = CoursesStackProps<"CoursesList">;

const CoursesListScreen: React.FC<CoursesListScreenProps> = ({ navigation }) => {
  const handleCoursePress = (course: CourseItem) => {
    navigation.navigate("CourseDetail", { course });
  };

  const handleGoToCart = () => {
    navigation.navigate("CourseSelection", {});
  };

  const renderCourseItem = ({ item }: { item: CourseItem }) => (
    <View style={{ marginHorizontal: 5 }}>
      <HomeCourseCard course={item} onPress={handleCoursePress} />
    </View>
  );

  return (
    <ImageBackground source={images.background} resizeMode="cover" style={CommonStyles.imageBackgroundContainer}>
      <FlatList
        data={allCourses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={[CommonStyles.scrollContent, { paddingHorizontal: 15 }]}
        ListHeaderComponent={() => (
          <View>
            <Text style={[CommonStyles.title, { marginBottom: 10, color: Colors.primary }]}>Explore All Our Accredited Courses</Text>
            <Text style={[CommonStyles.subtitle, { fontSize: 16, marginBottom: 20 }]}>
              Select any course for detailed content and enrollment options.
            </Text>
            <TouchableOpacity style={CommonStyles.button} onPress={handleGoToCart}>
              <Text style={CommonStyles.buttonText}>View Cart & Checkout</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </ImageBackground>
  );
};

export default CoursesListScreen;