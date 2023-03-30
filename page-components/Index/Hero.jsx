import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.title}>
          <span className={styles.nextjs}>Apax</span>
          <span className={styles.mongodb}>Bilgisayar</span>
          <span>Hizmetleri</span>
        </h1>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Blog</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="tel:6477812716"
              type="secondary"
              className={styles.button}
            >
              Bize Ulasin
            </ButtonLink>
          </Container>
        </Container>
        <p className={styles.subtitle}>
          2008 yılında Trida Bilgisayar olarak başladığımız işletmemizde 2022
          yılında Apax Bilişim Bilgisayar ve Danışmanlık Hizmetleri olarak
          gelişmekte olan dünyada yerimizi alarak devam etmekteyiz. Hedefimiz
          tüm kurum ve kuruluşlarda yer edinmek ve firma faaliyetinde bulunan
          tüm işletmelerde destek-tedarik ekibi olarak yer edinmektir.
        </p>
      </div>
    </Wrapper>
  );
};

export default Hero;
