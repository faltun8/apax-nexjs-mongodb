import Card from '../Card/Card';
import styles from './Services.module.css';

// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const SERVICES = [
  {
    id: 1,
    title: 'Kurumsal Bakım Anlaşmaları',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa molestias neque nisi doloremque, repellat debitis voluptates quae. Libero consequatur sit laborum eaque debitis adipisci cum tempora deserunt dignissimos similique odit id aliquam magni officiis fuga alias, vel eius quasi enim hic sapiente itaque dolorum totam vitae. Officia vitae numquam velit modi quibusdam repellat ex impedit explicabo voluptates mollitia, suscipit cum magnam eos officiis earum ipsum magni repellendus, et illo, itaque recusandae dicta eum ut? Sequi adipisci tempora, vitae suscipit libero quo iure. Doloribus temporibus suscipit alias pariatur obcaecati, distinctio quae officiis voluptatibus. Distinctio, beatae illo vitae repudiandae facilis rerum?',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea magni at qui consequuntur quaerat sapiente modi debitis excepturi, a tempora ad eaque distinctio magnam harum, atque sunt suscipit aliquam.',
    url: 'https://google.com',
  },
  {
    id: 2,
    title: 'Danışmanlık & Projelendirme',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea magni at qui consequuntur quaerat sapiente modi debitis excepturi, a tempora ad eaque distinctio magnam harum, atque sunt suscipit aliquam.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa molestias neque nisi doloremque, repellat debitis voluptates quae. Libero consequatur sit laborum eaque debitis adipisci cum tempora deserunt dignissimos similique odit id aliquam magni officiis fuga alias, vel eius quasi enim hic sapiente itaque dolorum totam vitae. Officia vitae numquam velit modi quibusdam repellat ex impedit explicabo voluptates mollitia, suscipit cum magnam eos officiis earum ipsum magni repellendus, et illo, itaque recusandae dicta eum ut? Sequi adipisci tempora, vitae suscipit libero quo iure. Doloribus temporibus suscipit alias pariatur obcaecati, distinctio quae officiis voluptatibus. Distinctio, beatae illo vitae repudiandae facilis rerum?',
    url: 'https://google.com',
  },
  {
    id: 3,
    title: 'Lisanslı Programların Takibi',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea magni at qui consequuntur quaerat sapiente modi debitis excepturi, a tempora ad eaque distinctio magnam harum, atque sunt suscipit aliquam.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa molestias neque nisi doloremque, repellat debitis voluptates quae. Libero consequatur sit laborum eaque debitis adipisci cum tempora deserunt dignissimos similique odit id aliquam magni officiis fuga alias, vel eius quasi enim hic sapiente itaque dolorum totam vitae. Officia vitae numquam velit modi quibusdam repellat ex impedit explicabo voluptates mollitia, suscipit cum magnam eos officiis earum ipsum magni repellendus, et illo, itaque recusandae dicta eum ut? Sequi adipisci tempora, vitae suscipit libero quo iure. Doloribus temporibus suscipit alias pariatur obcaecati, distinctio quae officiis voluptatibus. Distinctio, beatae illo vitae repudiandae facilis rerum?',
    url: 'https://google.com',
  },
  {
    id: 4,
    title: 'Uzak Şube Çözümleri',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea magni at qui consequuntur quaerat sapiente modi debitis excepturi, a tempora ad eaque distinctio magnam harum, atque sunt suscipit aliquam.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa molestias neque nisi doloremque, repellat debitis voluptates quae. Libero consequatur sit laborum eaque debitis adipisci cum tempora deserunt dignissimos similique odit id aliquam magni officiis fuga alias, vel eius quasi enim hic sapiente itaque dolorum totam vitae. Officia vitae numquam velit modi quibusdam repellat ex impedit explicabo voluptates mollitia, suscipit cum magnam eos officiis earum ipsum magni repellendus, et illo, itaque recusandae dicta eum ut? Sequi adipisci tempora, vitae suscipit libero quo iure. Doloribus temporibus suscipit alias pariatur obcaecati, distinctio quae officiis voluptatibus. Distinctio, beatae illo vitae repudiandae facilis rerum?',
    url: 'https://google.com',
  },
  {
    id: 5,
    title: 'Windows Sunucu Kurulumları',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea magni at qui consequuntur quaerat sapiente modi debitis excepturi, a tempora ad eaque distinctio magnam harum, atque sunt suscipit aliquam.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa molestias neque nisi doloremque, repellat debitis voluptates quae. Libero consequatur sit laborum eaque debitis adipisci cum tempora deserunt dignissimos similique odit id aliquam magni officiis fuga alias, vel eius quasi enim hic sapiente itaque dolorum totam vitae. Officia vitae numquam velit modi quibusdam repellat ex impedit explicabo voluptates mollitia, suscipit cum magnam eos officiis earum ipsum magni repellendus, et illo, itaque recusandae dicta eum ut? Sequi adipisci tempora, vitae suscipit libero quo iure. Doloribus temporibus suscipit alias pariatur obcaecati, distinctio quae officiis voluptatibus. Distinctio, beatae illo vitae repudiandae facilis rerum?',
    url: 'https://google.com',
  },
  {
    id: 6,
    title: 'FireWall Kurulumu',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea magni at qui consequuntur quaerat sapiente modi debitis excepturi, a tempora ad eaque distinctio magnam harum, atque sunt suscipit aliquam.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa molestias neque nisi doloremque, repellat debitis voluptates quae. Libero consequatur sit laborum eaque debitis adipisci cum tempora deserunt dignissimos similique odit id aliquam magni officiis fuga alias, vel eius quasi enim hic sapiente itaque dolorum totam vitae. Officia vitae numquam velit modi quibusdam repellat ex impedit explicabo voluptates mollitia, suscipit cum magnam eos officiis earum ipsum magni repellendus, et illo, itaque recusandae dicta eum ut? Sequi adipisci tempora, vitae suscipit libero quo iure. Doloribus temporibus suscipit alias pariatur obcaecati, distinctio quae officiis voluptatibus. Distinctio, beatae illo vitae repudiandae facilis rerum?',
    url: 'https://google.com',
  },
];

const WhyUs = () => {
  return (
    <section id="services" className={styles.section}>
      <div className={`text-center ${styles.container}`}>
        <div className={styles.title}>SERVISLERIMIZ</div>
        <div className={styles.container__cards}>
          {SERVICES.map((element, index) => (
            <div className={styles.item} key={index}>
              <Card slides={element} key={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
