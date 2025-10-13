// src/assets/images.ts

// Define a type for safety (Optional, but good practice)
/*type ImageAssets = {
  [key: string]: any;
};*/

const PLACEHOLDER_URI = {
  uri: 'https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=612x612&w=is&k=20&c=8Yn-zi9320e0INMImBvZgTlv-hKzSRLl5RD9N_E45Jw=',
};

const images: Record<string, any> = {
  
  // All image assets are replaced with the single placeholder URI
  child: PLACEHOLDER_URI, 
  cooking: PLACEHOLDER_URI, 
  garden: PLACEHOLDER_URI, 
  firstAid: PLACEHOLDER_URI,
  sewing: PLACEHOLDER_URI, 
  landscaping: PLACEHOLDER_URI, 
  lifeSkills: PLACEHOLDER_URI,
  logo: PLACEHOLDER_URI, 
  
  // callImage remains null as it was in the original code
  callImage: null, 
  
  background: PLACEHOLDER_URI, 
  profile: PLACEHOLDER_URI, 
  insta: PLACEHOLDER_URI, 
  linkedin: PLACEHOLDER_URI, 
  tiktok: PLACEHOLDER_URI,
};

// Must be default export
export default images;