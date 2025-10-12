// src/assets/images.ts

// Define a type for safety
type ImageAssets = {
  [key: string]: any;
};

const images: ImageAssets = {
  background: require("./background.jpg"), // Assuming you have a background image
  logo: require("./Emplogo.png"),
  "6months-childminding": require("./childminding.png"),
  "6months-healthcare": require("./healthcare.png"),
  "6months-construction": require("./construction.png"),
  "6weeks-childminding": require("./childminding.png"),
  "6weeks-healthcare": require("./healthcare.png"),
  "6weeks-construction": require("./construction.png"),
  // Add other images as needed
};

// Must be default export
export default images; 