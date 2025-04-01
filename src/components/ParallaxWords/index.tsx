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
  'Mobx',
  'Webpack',
  'TypeScript',
  'Git',
];

const ParallaxWords: React.FC = () => {
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

  const generateRandomPosition = (buffer: number, positions: { x: number; y: number }[], wordWidth: number) => {
    let position: { x: number; y: number };
    let isValidPosition: boolean;

    const maxX = 80 - 2 * buffer - wordWidth;
    const maxY = 80 - 2 * buffer;

    do {
      position = {
        x: Math.random() * maxX + buffer,
        y: Math.random() * maxY + buffer,
      };

      // Проверка на достаточное расстояние до других слов
      isValidPosition = !positions.some((existingPosition) => {
        const distance = Math.sqrt(
          Math.pow(position.x - existingPosition.x, 2) +
          Math.pow(position.y - existingPosition.y, 2)
        );
        return distance < buffer;
      });
    } while (!isValidPosition);

    return position;
  };

  useEffect(() => {
    const buffer = 10; // Буфер для избежания появления у краев
    const randomPositions: { x: number; y: number }[] = [];

    // Генерация случайных позиций для слов
    for (let i = 0; i < words.length; i++) {
      const wordElement = wordRefs.current[i];
      const wordWidth = wordElement ? wordElement.offsetWidth / window.innerWidth * 100 : 0;
      randomPositions.push(generateRandomPosition(buffer, randomPositions, wordWidth));
    }

    setPositions(randomPositions);
  }, []);

  const isCursorNearWord = (wordIndex: number): boolean => {
    if (!wordRefs.current[wordIndex]) return false;

    const wordRect = wordRefs.current[wordIndex]?.getBoundingClientRect();
    if (!wordRect) return false;

    const buffer = 30; // Увеличенная область вокруг слова

    // Проверка, находится ли курсор в области вокруг слова
    return (
      mousePosition.x >= wordRect.left - buffer &&
      mousePosition.x <= wordRect.right + buffer &&
      mousePosition.y >= wordRect.top - buffer &&
      mousePosition.y <= wordRect.bottom + buffer
    );
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {positions.length > 0 && words.map((word, index) => {
        const { x: initialX, y: initialY } = positions[index];

        // Добавляем depthFactor для разной скорости движения
        const depthFactor = 0.03 + index * 0.02;

        const x = ((mousePosition.x / window.innerWidth) * 10 - 5 + initialX) * depthFactor;
        const y = ((mousePosition.y / window.innerHeight) * 10 - 5 + initialY) * depthFactor;

        const isHighlighted = isCursorNearWord(index);

        return (
          <motion.div
            key={word}
            ref={(el) => (wordRefs.current[index] = el)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              whiteSpace: 'nowrap',
              fontSize: isHighlighted ? `3rem` : `${1 + index * 0.2}rem`,
              color: isHighlighted ? 'rgba(97,94,94,0.33)' : (index < words.length / 2 ? 'rgba(97,94,94,0.23)' : 'rgba(74,74,74,0.27)'),
              top: `${initialY}vh`,
              left: `${initialX}vw`,
              transform: `translate(${x}vw, ${y}vh)`,
              pointerEvents: 'none',
              transition: 'color 0.2s ease-in-out, text-shadow 0.2s ease-in-out, font-size 0.2s ease-in-out',
            }}
          >
            {word}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ParallaxWords;
