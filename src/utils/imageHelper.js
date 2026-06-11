// A helper to resolve the local image filenames to Vite asset URLs
export const getProductImage = (fileName) => {
  if (!fileName) return '';
  // Since this file is in src/utils/ and images are in src/assets/images/
  return new URL(`../assets/images/${fileName}`, import.meta.url).href;
};
