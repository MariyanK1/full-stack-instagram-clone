import { adImage } from "../helpers/constants.js";

export default function handleSlideshow() {
  const images = [
    "../public/images/ad.jpg",
    "../public/images/ad2.jpg",
    "../public/images/ad3.jpg",
    "../public/images/ad4.jpg",
    "../public/images/ad5.jpg",
    "../public/images/ad6.jpg",
    "../public/images/ad7.jpg",
  ];
  const randomIndex = Math.floor(Math.random() * 7);

  adImage.src = images[randomIndex];
  setTimeout(handleSlideshow, 4000);
}
