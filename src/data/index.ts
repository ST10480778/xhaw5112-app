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
        title: "Where can we find you?", 
        content: "Empowering The Nation is located at 3 different locations, In the South Of Johannesburg, Roodepoort and Sandton."
    },
    {title:"How to join the Empowering The Nation Courses?" ,
      content:"Courses can we joined via our website on ios and Android app downloading platforms. On the Website, the home screen has an button option for the user to press and sign up immediately. On the App, the user will be directed to the sign up page once they have entered the App."

    },
    {
      title:"Can i Volunteer?" ,
      content:"Yes! sign up at one of locations closest to you.." 
    },
    {
      title:"Do you have a Webiste for Empowering The Nation?", 
      content:"Yes! Empowering The Nation is available at www.EmpowerintTheNation.com "
    },
    {title:"How do i track my progress and see my scheduled classes?" ,
    content:"A Dashboard is created for you once you have created a profile.This will have all the Courses Scheduled on a Calendar from the start period to the end of the Course, whether 6 Weeks or 6 Months.A Progress bar will also indicate where you are in the Course."
    },

];

/*------------------------Adresses-------------------------*/
export const addresses: string[] = [
  "Corner of Market Street & Fraser Street (Library Gardens), Johannesburg, Gauteng", // addresses[0]
  "Cnr Kingsway and University Road, Auckland Park, Johannesburg, 2006", // addresses[1]
  "1 Jan Smuts Avenue, Braamfontein, Johannesburg, Gauteng, 2001", // addresses[2]
];
