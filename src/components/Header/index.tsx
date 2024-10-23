import { Box, Button, Divider } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from '../LogoSvg';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <>
      <Box className={styles.header}>
        <Box className={styles.logo}>
          <Link to="/">
            <LogoSvg />
          </Link>
        </Box>
        <Box className={styles.buttons}>
          <Link to={'/about'}>
            <Button className={styles.buttonAbout} color={'inherit'} variant={'text'}>
              About
            </Button>
          </Link>
          <a href={'https://kemerovo.hh.ru/resume_converter/Стрельцов%20Никита.pdf?hash=6d422e37ff0913a25b0039ed1f4c7a46334f4f&type=pdf&hhtmSource=resume&hhtmFrom='}>
            <Button className={styles.buttonContacts} color={'inherit'} variant={'outlined'}>
              Download PDF
            </Button>
          </a>
        </Box>
      </Box>
      <Divider variant="middle" color={'#454547'} />
    </>
  );
};

export default Header;
