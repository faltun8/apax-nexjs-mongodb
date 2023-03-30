const slide1 = '/images/service-images/slide1.jpg';
const slide2 = '/images/service-images/slide2.jpg';
const slide3 = '/images/service-images/slide3.jpg';
const slide4 = '/images/service-images/slide4.jpg';

export const images = [slide1, slide2, slide3, slide4];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
