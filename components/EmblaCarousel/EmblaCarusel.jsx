/* eslint-disable @next/next/no-img-element */
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import imageByIndex from './imageByIndex';
import styles from './EmblaCarusel.module.css';

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()]);
  console.log('slides', slides);
  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((element, index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__number}>
                <span>{index + 1}</span>
                <div
                  href={element.url}
                  className={styles.embla__slide__number__title}
                >
                  {element.title}
                </div>
                {/* <div className={styles.embla__slide__number__text}>
                  {element.desc}
                </div> */}
              </div>

              <img
                className={styles.embla__slide__img}
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
