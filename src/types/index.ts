import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerScreenProps } from "@react-navigation/drawer";

/* ----------------------- Data Types ----------------------- */
export type AppUser = { id: number; name: string; email: string; phone: string } | null;

export type CourseItem = {
  id: string;
  title: string;
  price: number;
  duration: "6 months" | "6 weeks";
  purpose?: string;
  content?: string[];
  image?: any;
};

/* ----------------------- Navigation Types ----------------------- */

// 1. Courses Stack
export type CoursesStackParamList = {
  CoursesList: undefined;
  CourseDetail: { course: CourseItem };
  CourseSelection: { fromDetail?: boolean };
  QuoteGeneration: undefined;
  QuoteSummary: {
    name: string;
    email: string;
    phone: string;
    subtotal: number;
    discount: number;
    vat: number;
    total: number;
    selectedCourses: CourseItem[];
  };
  PaymentSummary: {
    name: string;
    email: string;
    phone: string;
    subtotal: number;
    discount: number;
    vat: number;
    total: number;
    selectedCourses: CourseItem[];
   
  };
};

export type CoursesStackProps<T extends keyof CoursesStackParamList> = NativeStackScreenProps<
  CoursesStackParamList,
  T
>;

// 2. Main Drawer
export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Dashboard: undefined;
  UserProfile: undefined;
  CoursesRoot: undefined;
  "Get Quote": undefined;
  "About Us": undefined;
  "Contact Us": undefined;
  FAQ: undefined;
};

export type DrawerNavigationProps = DrawerScreenProps<DrawerParamList, "Home">["navigation"];