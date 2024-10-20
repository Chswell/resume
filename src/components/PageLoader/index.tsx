import { motion, useIsPresent } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './PageLoader.module.scss';

const PageLoader = () => {
  const isPresent = useIsPresent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    setIsVisible(false);
    return () => {
      clearTimeout(timer);
      setIsVisible(false);
    };
  }, []);

  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={isVisible && { scaleX: 0, transition: { duration: 0.5, ease: 'circOut' } }}
      exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
      style={{ originX: isPresent ? 0 : 1 }}
      className={styles.privacyScreen}
    />
  );
};

export default PageLoader;
