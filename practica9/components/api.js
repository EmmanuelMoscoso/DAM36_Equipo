export const fetchBreedImages = async (breed) => {
  if (!breed) return [];
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/5`);
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error("Error fetching breed images:", error);
    return [];
  }
};

export const fetchRandomImage = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error("Error fetching random image:", error);
    return null;
  }
};