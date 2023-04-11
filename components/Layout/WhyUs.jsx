import { EmblaCarousel } from '@/components/EmblaCarousel';
import styles from './WhyUs.module.css';

const OPTIONS = {};
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const SLIDES = [
  {
    title: 'KURUMSALLIK',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa molestias neque nisi doloremque, repellat debitis voluptates quae. Libero consequatur sit laborum eaque debitis adipisci cum tempora deserunt dignissimos similique odit id aliquam magni officiis fuga alias, vel eius quasi enim hic sapiente itaque dolorum totam vitae. Officia vitae numquam velit modi quibusdam repellat ex impedit explicabo voluptates mollitia, suscipit cum magnam eos officiis earum ipsum magni repellendus, et illo, itaque recusandae dicta eum ut? Sequi adipisci tempora, vitae suscipit libero quo iure. Doloribus temporibus suscipit alias pariatur obcaecati, distinctio quae officiis voluptatibus. Distinctio, beatae illo vitae repudiandae facilis rerum?',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea magni at qui consequuntur quaerat sapiente modi debitis excepturi, a tempora ad eaque distinctio magnam harum, atque sunt suscipit aliquam.',
    url: 'https://google.com',
  },
  {
    title: 'YERİNDE DESTEK',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea magni at qui consequuntur quaerat sapiente modi debitis excepturi, a tempora ad eaque distinctio magnam harum, atque sunt suscipit aliquam.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa molestias neque nisi doloremque, repellat debitis voluptates quae. Libero consequatur sit laborum eaque debitis adipisci cum tempora deserunt dignissimos similique odit id aliquam magni officiis fuga alias, vel eius quasi enim hic sapiente itaque dolorum totam vitae. Officia vitae numquam velit modi quibusdam repellat ex impedit explicabo voluptates mollitia, suscipit cum magnam eos officiis earum ipsum magni repellendus, et illo, itaque recusandae dicta eum ut? Sequi adipisci tempora, vitae suscipit libero quo iure. Doloribus temporibus suscipit alias pariatur obcaecati, distinctio quae officiis voluptatibus. Distinctio, beatae illo vitae repudiandae facilis rerum?',
    url: 'https://google.com',
  },
  {
    title: 'HIZLI ÇÖZÜM',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea magni at qui consequuntur quaerat sapiente modi debitis excepturi, a tempora ad eaque distinctio magnam harum, atque sunt suscipit aliquam.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa molestias neque nisi doloremque, repellat debitis voluptates quae. Libero consequatur sit laborum eaque debitis adipisci cum tempora deserunt dignissimos similique odit id aliquam magni officiis fuga alias, vel eius quasi enim hic sapiente itaque dolorum totam vitae. Officia vitae numquam velit modi quibusdam repellat ex impedit explicabo voluptates mollitia, suscipit cum magnam eos officiis earum ipsum magni repellendus, et illo, itaque recusandae dicta eum ut? Sequi adipisci tempora, vitae suscipit libero quo iure. Doloribus temporibus suscipit alias pariatur obcaecati, distinctio quae officiis voluptatibus. Distinctio, beatae illo vitae repudiandae facilis rerum?',
    url: 'https://google.com',
  },
  {
    title: 'MUTLU MÜŞTERİ',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea magni at qui consequuntur quaerat sapiente modi debitis excepturi, a tempora ad eaque distinctio magnam harum, atque sunt suscipit aliquam.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa molestias neque nisi doloremque, repellat debitis voluptates quae. Libero consequatur sit laborum eaque debitis adipisci cum tempora deserunt dignissimos similique odit id aliquam magni officiis fuga alias, vel eius quasi enim hic sapiente itaque dolorum totam vitae. Officia vitae numquam velit modi quibusdam repellat ex impedit explicabo voluptates mollitia, suscipit cum magnam eos officiis earum ipsum magni repellendus, et illo, itaque recusandae dicta eum ut? Sequi adipisci tempora, vitae suscipit libero quo iure. Doloribus temporibus suscipit alias pariatur obcaecati, distinctio quae officiis voluptatibus. Distinctio, beatae illo vitae repudiandae facilis rerum?',
    url: 'https://google.com',
  },
];

const WhyUs = () => {
  return (
    <section className={styles.sandbox__carousel} id="whyUs">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default WhyUs;
