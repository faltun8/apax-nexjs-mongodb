import styles from './Avatar.module.css';
import Image from 'next/image';

const Avatar = ({ size, username }) => {
  return (
    <Image
      className={styles.avatar}
      src={'/images/default_user.jpg'}
      alt={username}
      width={size}
      height={size}
    />
  );
};

export default Avatar;
