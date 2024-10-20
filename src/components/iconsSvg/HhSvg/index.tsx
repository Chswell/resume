import { motion } from 'framer-motion';
import styles from './HhSvg.module.scss';

const HhSvg = () => {
  return (
    <a
      href={
        'https://kemerovo.hh.ru/applicant/resumes/view?resume=6d422e37ff0913a25b0039ed1f4c7a46334f4f'
      }
      target="_blank"
      rel="noopener noreferrer">
      <motion.svg
        width="35"
        height="35"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 386 213"
        className={styles.hh}>
        <motion.path
          d="m113.595,25.6045l0,62.444c9.507,-11.335 20.9,-17.046 34.12,-17.046c6.806,0 12.91,1.294 18.367,3.88c5.486,2.56 9.59,5.852 12.348,9.846c2.785,4.023 4.67,8.438 5.68,13.304c1.016,4.84 1.522,12.377 1.522,22.587l0,66.775l-29.535,0l0,-60.137c0,-11.925 -0.536,-19.493 -1.66,-22.7c-1.125,-3.233 -3.095,-5.766 -5.935,-7.65c-2.842,-1.912 -6.385,-2.87 -10.66,-2.87c-4.894,0 -9.283,1.238 -13.107,3.658c-3.88,2.447 -6.694,6.104 -8.466,10.998c-1.802,4.895 -2.703,12.123 -2.673,21.687l-0.03,57.015l-29.505,0l0,-161.791l29.534,0zm116.31,0l0,62.444c9.504,-11.335 20.898,-17.046 34.116,-17.046c6.78,0 12.91,1.294 18.398,3.88c5.455,2.56 9.562,5.852 12.317,9.846c2.785,4.023 4.67,8.438 5.683,13.304c1.013,4.84 1.52,12.377 1.52,22.587l0,66.775l-29.508,0l0,-60.137c0,-11.925 -0.56,-19.493 -1.687,-22.7c-1.126,-3.233 -3.093,-5.766 -5.936,-7.65c-2.813,-1.912 -6.386,-2.87 -10.66,-2.87c-4.895,0 -9.282,1.238 -13.108,3.658c-3.852,2.447 -6.665,6.104 -8.467,10.998c-1.772,4.895 -2.67,12.123 -2.67,21.687l0,57.015l-29.507,0l0,-161.791l29.508,0l0.001,0z"
          fill={'#25252c'}
        />
      </motion.svg>
    </a>
  );
};

export default HhSvg;
