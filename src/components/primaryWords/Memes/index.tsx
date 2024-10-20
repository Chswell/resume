import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styles from './Memes.module.scss';
import img1 from '../../../assets/memes/1.png';
import img2 from '../../../assets/memes/2.gif';
import img3 from '../../../assets/memes/3.png';
import img4 from '../../../assets/memes/4.png';
import img5 from '../../../assets/memes/5.png';
import img6 from '../../../assets/memes/6.png';
import img7 from '../../../assets/memes/7.png';
import img8 from '../../../assets/memes/8.png';
import img9 from '../../../assets/memes/9.gif';
import img10 from '../../../assets/memes/10.png';
import img11 from '../../../assets/memes/11.gif';

interface ITooltipProps {
  position: { x: number; y: number };
  currentImage: string;
}

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const Tooltip: React.FC<ITooltipProps> = ({ position, currentImage }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: position.y - 200 + window.scrollY,
        left: position.x - 100 + window.scrollX,
        backgroundColor: '#1d1d22',
        padding: '5px',
        borderRadius: '5px',
        pointerEvents: 'none',
        height: 'calc(5em + 8 * (100vw - 320px) / 880)',
        width: 'calc(5em + 8 * (100vw - 320px) / 880)',
        zIndex: 100
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      {currentImage && (
        <img style={{ width: '100%', height: '100%' }} src={currentImage} alt={currentImage} />
      )}
    </motion.div>
  );
};

const Memes = () => {
  const [currentImage, setCurrentImage] = useState(''); // Текущая картинка
  const [isVisibleNotificationMemes, setIsVisibleNotificationMemes] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0); // Индекс текущей картинки
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (event: any) => {
    setIsVisibleNotificationMemes(false);
    setShowTooltip(true);
    setPosition({ x: event.clientX, y: event.clientY });
    // Показываем текущую картинку
    setCurrentImage(images[currentIndex]);
    // Увеличиваем индекс, сбрасываем на 0, если достигнут конец массива
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handleMouseMove = (event: any) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  return (
    <>
      <div className={styles.notification}>
        <div className={styles.flip}>
          <div className={styles.container}>
            <motion.span
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={styles.memes}>
              memes,
            </motion.span>
          </div>
        </div>
        {isVisibleNotificationMemes && (
          <motion.div
            animate={{
              scale: [1, 2, 2, 1],
              opacity: [0, 1]
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8],
              repeat: Infinity,
              repeatDelay: 1
            }}
            style={{
              position: 'absolute',
              backgroundColor: '#ff0000',
              height: '10px',
              width: '10px',
              borderRadius: '15px',
              top: '-5px',
              right: '-5px'
            }}
          />
        )}
      </div>
      {showTooltip && <Tooltip position={position} currentImage={currentImage} />}
    </>
  );
};

export default Memes;
