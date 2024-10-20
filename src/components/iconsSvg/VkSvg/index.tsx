import { motion } from 'framer-motion';
import styles from './VkSvg.module.scss';

const VkSvg = () => {
  return (
    <a href={'https://vk.com/chswell'} target="_blank" rel="noopener noreferrer">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        className={styles.vk}>
        <motion.path
          d="M13.617 20C5.075 20 .203 14.37 0 5h4.279c.14 6.877 3.294 9.79 5.793 10.39V5H14.1v5.93c2.467-.254 5.059-2.957 5.933-5.93h4.03a11.22 11.22 0 0 1-1.93 4.288 11.726 11.726 0 0 1-3.552 3.19 12.267 12.267 0 0 1 4.048 3.099A11.706 11.706 0 0 1 25 20h-4.435a7.39 7.39 0 0 0-2.39-3.618A7.864 7.864 0 0 0 14.1 14.64V20h-.485Z"
          fill={'#25252c'}
        />
      </motion.svg>
    </a>
  );
};

export default VkSvg;
