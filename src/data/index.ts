import { CourseItem } from "../types";
import images from "../assets/images";

/* ----------------------- Course Data ----------------------- */
export const allCourses: CourseItem[] = [
  {
    id: "c1",
    title: "Level 3 Award in Education and Training (AET)",
    price: 399.0,
    duration: "6 weeks",
    purpose: "To equip you with the knowledge and skills to teach in the Further Education and Skills Sector.",
    content: ["Introduction to roles and responsibilities", "Lesson planning and delivery", "Assessment methods"],
    image: images["6weeks-childminding"],
  },
  {
    id: "c2",
    title: "Level 3 Certificate in Assessing Vocational Achievement (CAVA)",
    price: 499.0,
    duration: "6 weeks",
    purpose: "Qualify you to assess competence in the workplace and other vocational settings.",
    content: ["Principles of assessment", "Assessing occupational competence", "Evaluating assessment practice"],
    image: images["6weeks-healthcare"],
  },
  {
    id: "c3",
    title: "Level 3 Emergency First Aid at Work (EFAW)",
    price: 120.0,
    duration: "6 weeks",
    purpose: "Provides basic first aid skills for the workplace, including CPR and dealing with minor injuries.",
    content: ["Role of a first aider", "Assessing the situation", "Dealing with shock and minor bleeding"],
    image: images["6weeks-construction"],
  },
  {
    id: "c4",
    title: "Level 3 Diploma in Childminding Practice (DCP)",
    price: 999.0,
    duration: "6 months",
    purpose: "A comprehensive course covering the essential knowledge and practical skills for starting a childminding business.",
    content: ["Statutory Framework for the EYFS", "Health and safety requirements", "Business planning and marketing"],
    image: images["6months-childminding"],
  },
  {
    id: "c5",
    title: "Level 3 Diploma in Health and Social Care (HSC)",
    price: 1299.0,
    duration: "6 months",
    purpose: "Designed for those working in or aspiring to work in the health and social care sector.",
    content: ["Communication in health and social care", "Personal development", "Duty of care"],
    image: images["6months-healthcare"],
  },
  {
    id: "c6",
    title: "Level 2 Diploma in Construction Operations (DCO)",
    price: 1500.0,
    duration: "6 months",
    purpose: "Provides the knowledge and skills required for a career in the construction industry.",
    content: ["Health and safety in construction", "Manual handling", "Basic construction methods"],
    image: images["6months-construction"],
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
    id: "f1",
    question: "How long does a course take to complete?",
    answer: "Our courses are offered in two main durations: 6 weeks (for certification courses like AET and CAVA) and 6 months (for full Diplomas like Childminding Practice).",
  },
  {
    id: "f2",
    question: "Do you offer financing or payment plans?",
    answer: "Yes, we partner with reputable finance providers to offer interest-free payment plans for our longer courses. Details are available on the Payment Summary screen during checkout.",
  },
  {
    id: "f3",
    question: "Are these courses fully accredited?",
    answer: "Absolutely. All our courses are fully regulated and accredited by relevant UK awarding bodies, ensuring their recognition nationally.",
  },
  {
    id: "f4",
    question: "What is your refund policy?",
    answer: "Our refund policy allows for a full refund within 14 days of enrollment, provided you have not accessed more than 10% of the course content. Full details are available in our Terms and Conditions.",
  },
  {
    id: "f5",
    question: "How do I get a quote for multiple courses?",
    answer: "You can add multiple courses to your cart and then use the 'Get Quote' option from the main menu or cart summary to receive a formal quotation, which includes multi-course discounts.",
  },
];