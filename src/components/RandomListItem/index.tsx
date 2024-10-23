import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface RandomListItemProps {
  text: string;
}

const RandomListItem: React.FC<RandomListItemProps> = ({ text }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current; // Сохраняем текущее значение ref

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              x: 0,
              y: 0,
              transition: { duration: 1, ease: 'easeOut' },
            });
          }
        });
      },
      { threshold: 0.1 } // Порог видимости 10% для более чувствительного срабатывания
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);

  // Генерируем случайное начальное положение
  const initialX = Math.random() * 200 - 100; // от -100 до 100 пикселей
  const initialY = Math.random() * 200 - 100; // от -100 до 100 пикселей

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={controls}
      style={{ marginBottom: '16px', textAlign: 'start' }}
      className={'link'}
    >
      {text}
    </motion.div>
  );
};

export default RandomListItem;
