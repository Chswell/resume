import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import styles from './CompanyMerquee.module.scss';

import wb from '~/assets/1.png';
import alfa from '~/assets/2.png';
import avito from '~/assets/3.png';
import tbank from '~/assets/4.png';
import yandex from '~/assets/5.png';
import toyota from '~/assets/6.png';
import vk from '~/assets/7.png';
import kaspersky from '~/assets/8.png';

const CompanyMarquee = () => {
  return (
    <>
      <Box className={styles.marqueeText}>
        <span>
          They could work with me, but I work in{' '}
          <motion.a className={'link'} href={'https://esoft.su/'} target="_blank">
            Soft Engineering
          </motion.a>
          :)
        </span>
      </Box>
      <Marquee loop={0} autoFill={true} speed={100} style={{ height: '10%' }}>
        <img style={{ margin: '0 40px' }} height={90} src={wb} alt="wildberries" />
        <img style={{ margin: '0 40px' }} height={90} src={alfa} alt="alfa" />
        <img style={{ margin: '0 40px' }} height={100} src={avito} alt="avito" />
        <img style={{ margin: '0 40px' }} height={130} src={tbank} alt="t-bank" />
        <img style={{ margin: '0 40px' }} height={100} src={yandex} alt="yandex" />
        <img style={{ margin: '0 40px' }} height={80} src={toyota} alt="toyota" />
        <img style={{ margin: '0 40px' }} height={100} src={vk} alt="vk" />
        <img style={{ margin: '0 40px' }} height={80} src={kaspersky} alt="kaspersky" />
      </Marquee>
    </>
  );
};

export default CompanyMarquee;
