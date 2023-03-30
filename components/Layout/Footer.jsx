import { Text, TextLink } from '@/components/Text';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import styles from './Footer.module.css';
import Spacer from './Spacer';
import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <Wrapper>
        <Text color="accents-7">
          Service with ❤️, 🔥, and a screwdriver by{' '}
          <TextLink href="" color="link">
            Gokhan Sarac
          </TextLink>
          .
        </Text>
        <Spacer size={1} axis="vertical" />
        <ThemeSwitcher />
      </Wrapper>
    </footer>
  );
};

export default Footer;
