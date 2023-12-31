import Link from 'next/link';


import Container from '@components/Container';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
          
          </Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
                      
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
