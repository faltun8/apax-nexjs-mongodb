import Head from 'next/head';
import Footer from './Footer';
import WhyUs from './WhyUs';
import Services from './Services';
import styles from './Layout.module.css';
import Nav from './Nav';
import FooterInfo from '../../page-components/FooterInfo/FooterInfo';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/2456cb6ed8.js"
          crossOrigin="anonymous"
        ></script>
        <title>Apax Bilgisayar Hizmetleri</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="nextjs-mongodb-app is a continously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps."
        />
        <meta property="og:title" content="Next.js + MongoDB App" />
        <meta
          property="og:description"
          content="nextjs-mongodb-app is a continously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps."
        />
        <meta
          property="og:image"
          content="https://repository-images.githubusercontent.com/201392697/5d392300-eef3-11e9-8e20-53310193fbfd"
        />
      </Head>
      <Nav />
      <main className={styles.main}>{children}</main>
      <WhyUs />
      <Services />
      <FooterInfo />
      <Footer />
    </>
  );
};

export default Layout;
