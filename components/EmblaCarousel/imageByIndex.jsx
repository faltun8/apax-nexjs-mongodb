const slide1 = '/images/why-us-images/slide1.jpg';
const slide2 = '/images/why-us-images/slide2.jpg';
const slide3 = '/images/why-us-images/slide3.jpg';
const slide4 = '/images/why-us-images/slide4.jpg';

export const images = [slide1, slide2, slide3, slide4];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
