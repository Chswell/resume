// ParallaxEffect.tsx

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Массив слов для параллакса
const words = [
  'React',
  'JavaScript',
  'CSS',
  'HTML',
  'React Native',
  'Vite',
  'Framer Motion',
  'Modx',
  'Webpack',
  'TypeScript',
  'Git'
];

const ParallaxEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const wordRefs = useRef<(HTMLDivElement | null)[]>([]); // Для хранения ссылок на слова

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const generateRandomPosition = (buffer: number, positions: { x: number; y: number }[]) => {
    let position: { x: number; y: number };
    let isValidPosition: boolean;

    do {
      position = {
        x: Math.random() * (100 - 2 * buffer) + buffer,
        y: Math.random() * (100 - 2 * buffer) + buffer
      };

      isValidPosition = !positions.some((existingPosition) => {
        const distance = Math.sqrt(
          Math.pow(position.x - existingPosition.x, 2) + Math.pow(position.y - existingPosition.y, 2)
        );
        return distance < buffer;
      });

    } while (!isValidPosition);

    return position;
  };

  useEffect(() => {
    const buffer = 15; // Буфер, чтобы избежать появления у краев
    const randomPositions: { x: number; y: number }[] = [];

    // Генерируем позиции для каждого слова
    for (let i = 0; i < words.length; i++) {
      randomPositions.push(generateRandomPosition(buffer, randomPositions));
    }

    setPositions(randomPositions);
  }, []);

  // Проверка, находится ли курсор в области вокруг слова
  const isCursorNearWord = (wordIndex: number): boolean => {
    if (!wordRefs.current[wordIndex]) return false;

    const wordRect = wordRefs.current[wordIndex]?.getBoundingClientRect();
    if (!wordRect) return false;

    const buffer = 30; // Увеличиваем область вокруг слова

    // Проверяем, находится ли курсор в области вокруг слова
    return (
      mousePosition.x >= wordRect.left - buffer &&
      mousePosition.x <= wordRect.right + buffer &&
      mousePosition.y >= wordRect.top - buffer &&
      mousePosition.y <= wordRect.bottom + buffer
    );
  };

  return (
    <>
      {words.map((word, index) => {
        const { x: initialX = 0, y: initialY = 0 } = positions[index] || {};

        const x = ((mousePosition.x / window.innerWidth) * 15 - 7.5 + initialX) * 0.1;
        const y = ((mousePosition.y / window.innerHeight) * 15 - 7.5 + initialY) * 0.1;

        // Подсвечиваем слово, если курсор рядом
        const isHighlighted = isCursorNearWord(index);

        return (
          <motion.div
            key={word}
            ref={(el) => (wordRefs.current[index] = el)} // Сохраняем ссылку на элемент
            style={{
              position: 'absolute',
              whiteSpace: 'nowrap',
              fontSize: isHighlighted ? `3rem` : `${1 + index * 0.2}rem`,
              color: isHighlighted ? '#ae641e' : (index < words.length / 2 ? '#615E5E' : '#4A4A4A'), // Цвет текста
              top: `${initialY}vh`,
              left: `${initialX}vw`,
              transform: `translate(${x}vw, ${y}vh)`,
              pointerEvents: 'none', // Отключаем взаимодействие
              transition: 'color 0.2s ease-in-out, text-shadow 0.2s ease-in-out, font-size 0.2s ease-in-out'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {word}
          </motion.div>
        );
      })}
    </>
  );
};

export default ParallaxEffect;
