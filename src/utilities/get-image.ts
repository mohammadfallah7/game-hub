import placeholder from "../assets/no-image-placeholder-6f3882e0.webp";

const getImage = (imageUrl: string): string => {
  if (!imageUrl) return placeholder;

  const target = "media/";
  const index = imageUrl.indexOf(target) + target.length;
  return imageUrl.slice(0, index) + "crop/600/400/" + imageUrl.slice(index);
};

export default getImage;
