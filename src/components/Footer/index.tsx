import { Box, Container, Divider } from '@mui/material';
import LeetcodeSvg from '~/components/iconsSvg/LeetcodeSvg';
import MailSvg from '~/components/iconsSvg/MailSvg';
import TgSvg from '~/components/iconsSvg/TgSvg';
import VkSvg from '~/components/iconsSvg/VkSvg';
import HhSvg from '~/components/iconsSvg/HhSvg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <Divider color={'#454547'} />
      <Box className={styles.footer}>
        <Container className={styles.footerContainer}>
          <Box className={styles.leftBlock}>
            <Box className={styles.copyright}>Copyright © 2024 Streltsov Nikita</Box>
            <Box className={styles.socials}>
              <TgSvg />
              <VkSvg />
              <HhSvg />
              <LeetcodeSvg />
            </Box>
          </Box>
          <Box className={styles.rightBlock}>
            <Box>
              <a href={'mailto:i@chswe11.ru'} className={'link'}>
                <MailSvg /> i@chswe11.ru
              </a>
            </Box>
            <Box>
              <a href={'mailto:nikitastreltsov324@gmail.com'} className={'link'}>
                <MailSvg /> nikitastreltsov324@gmail.com
              </a>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
