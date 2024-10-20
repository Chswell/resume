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
          <Link to={'/resume/about'}>
            <Button className={styles.buttonAbout} color={'inherit'} variant={'text'}>
              About
            </Button>
          </Link>
          <Link to={'/resume/contacts'}>
            <Button className={styles.buttonContacts} color={'inherit'} variant={'outlined'}>
              Contacts
            </Button>
          </Link>
        </Box>
      </Box>
      <Divider variant="middle" color={'#454547'} />
    </>
  );
};

export default Header;
