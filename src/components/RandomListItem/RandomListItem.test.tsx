import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { motion } from 'framer-motion';
import RandomListItem from '~/components/RandomListItem';

describe('RandomListItem', () => {
  beforeEach(() => {
    // Мокаем IntersectionObserver
    vi.stubGlobal('IntersectionObserver', class {
      observe = vi.fn((callback) => {
        // Вызовем callback с событием, чтобы имитировать пересечение
        callback([{ isIntersecting: true }]);
      });
      unobserve = vi.fn();
      disconnect = vi.fn();
    });
  });

  it('renders the component with provided text', () => {
    render(<RandomListItem text="Test Item" />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('has initial animation state', async () => {
    render(<RandomListItem text="Test Item" />);
    const motionDiv = screen.getByText('Test Item').parentElement;

    // Проверяем начальные стили анимации (opacity = 0)
    await waitFor(() => {
      expect(motionDiv).toHaveStyle('opacity: 0');
    });

    // Проверяем начальные стили анимации по x и y
    const style = window.getComputedStyle(motionDiv as Element);
    const x = parseFloat(style.transform.split(',')[4]); // Получаем значение по оси x
    const y = parseFloat(style.transform.split(',')[5]); // Получаем значение по оси y

    expect(x).toBeGreaterThanOrEqual(-100);
    expect(x).toBeLessThanOrEqual(100);
    expect(y).toBeGreaterThanOrEqual(-100);
    expect(y).toBeLessThanOrEqual(100);
  });

  it('starts animation when intersecting', () => {
    const controlsMock = {
      start: vi.fn(),
    };

    // Мокаем useAnimation
    vi.spyOn(motion, 'useAnimation').mockReturnValue(controlsMock);

    render(<RandomListItem text="Test Item" />);
    const motionDiv = screen.getByText('Test Item').parentElement;

    // Симулируем вызов IntersectionObserver
    const observerInstance = (IntersectionObserver as unknown as vi.Mock).mock.instances[0];
    const callback = observerInstance.observe.mock.calls[0][0];

    // Имитация пересечения
    callback([{ isIntersecting: true, target: motionDiv }]);

    expect(controlsMock.start).toHaveBeenCalledWith({
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    });
  });
});
