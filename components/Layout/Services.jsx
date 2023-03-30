import { EmblaCarousel } from '@/components/EmblaCarousel';
import styles from './Services.module.css';

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Services = () => {
  return (
    <section className={styles.sandbox__carousel} id="services">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default Services;
