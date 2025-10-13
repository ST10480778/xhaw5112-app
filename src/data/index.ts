import { CourseItem } from "../types";
import images from "../assets/images";

/* ----------------------- Course Data ----------------------- */
export const allCourses: CourseItem[] = [
  { id: "1", 
  title: "First Aid", 
  price: 1500, 
  duration: "6 months", 
  purpose: "Emergency first aid skills",
   content: ["CPR", "Choking response", "Wound care", "Emergency safety"],
    image: images.firstAid
   },
  { id: "2",
   title: "Sewing", 
   price: 1500, 
   duration: "6 months", 
   purpose: "Sewing basics", 
   content: ["Hand stitching", "Machine sewing", "Repairs"],
    image: images.sewing 
  },
  { id: "3",
   title: "Landscaping",
    price: 1500,
     duration: "6 months",
      purpose: "Landscaping basics",
       content: ["Design basics", "Soil prep", "Plant care"],
        image: images.landscaping
       },
  { id: "4",
   title: "Life Skills",
    price: 1500, 
    duration: "6 months", 
    purpose: "Daily living & development", 
    content: ["Communication", "Budgeting", "Time management"], 
    image: images.lifeSkills
   },
  { id: "5", 
  title: "Child Minding",
   price: 750, 
   duration: "6 weeks",
    purpose: "Basic child & baby care", 
    content: ["Birth to 6 months", "Toddlers", "Educational toys"],
     image: images.child 
    },
  { id: "6", 
  title: "Cooking",
   price: 750,
    duration: "6 weeks", 
    purpose: "Cooking basics & nutrition", content: ["Kitchen safety", "Basic meals", "Meal planning"], 
    image: images.cooking 
  },
  { id: "7",
   title: "Garden Maintenance",
    price: 750, 
    duration: "6 weeks",
     purpose: "Gardening & yard care",
      content: ["Planting", "Lawn care", "Tools"],
       image: images.garden
       },

];

/* ----------------------- Home Screen Grouping ----------------------- */
export const homeScreenCourses: { [key: string]: CourseItem[] } = {
  "6weeks": allCourses.filter((c) => c.duration === "6 weeks"),
  "6months": allCourses.filter((c) => c.duration === "6 months"),
};

/* ----------------------- FAQ Data ----------------------- */
export const faqData = [
    { 
      title: "Who is Empowering The Nation?", 
      content: "Empowering The Nation was established in 2022 by Precious to offer training courses in Johannesburg, focusing on domestic workers and gardeners." 
    },
    {
       title: "What courses are available?", 
      content: "We offer courses like First Aid, Sewing, Landscaping, Life Skills, Child Minding, Cooking, and Garden Maintenance."
     },
    { 
      title: "Are there discounts for multiple courses?", 
      content: "Yes, discounts are automatically applied if you select more than one course during the checkout process."
     },
    { 
        title: "What is a Portfolio of Evidence (PoE)?", 
        content: "A Portfolio of Evidence (PoE) is a collection of materials illustrating your skills and capabilities, which is a key component of our Work Integrated Learning (WIL) approach, preparing you for the world of work." 
    },
];