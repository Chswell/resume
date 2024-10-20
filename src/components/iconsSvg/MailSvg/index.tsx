import { motion } from 'framer-motion';
import styles from './MailSvg.module.scss';

const MailSvg = () => {
  return (
    <motion.svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.mail}>
      <motion.path
        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
        stroke="#25252c"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={'#736f6f'}
        className={styles.path}
      />
      <motion.path
        d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
        stroke="#25252c"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill={'#736f6f'}
        className={styles.path}
      />
    </motion.svg>
  );
};

export default MailSvg;
