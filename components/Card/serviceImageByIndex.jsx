const service1 = '/images/services-images/service1.jpg';
const service2 = '/images/services-images/service2.jpg';
const service3 = '/images/services-images/service3.jpg';
const service4 = '/images/services-images/service4.jpg';
const service5 = '/images/services-images/service5.jpg';
const service6 = '/images/services-images/service6.jpg';

export const images = [
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
];

const serviceImageByIndex = (index) => images[index % images.length];

export default serviceImageByIndex;
