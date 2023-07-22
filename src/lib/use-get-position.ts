/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect } from 'react';
import {
  animate,
  MotionStyle,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion';
import { useDebouncedCallback } from 'use-debounce';

export default function useGetPosition(ref: RefObject<HTMLElement>) {
  const posX = useMotionValue(0);
  const posY = useMotionValue(0);

  function getPosition() {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    // posX.set(Math.round(rect.x));
    // posY.set(Math.round(rect.y));
    animate(posX, Math.round(rect.x), { duration: 0.2 });
    animate(posY, Math.round(rect.y), { duration: 0.2 });
  }

  const debouncedPosition = useDebouncedCallback(getPosition, 50);

  useEffect(() => {
    debouncedPosition();
    window.addEventListener('scroll', debouncedPosition);
    window.addEventListener('resize', debouncedPosition);

    return () => {
      window.removeEventListener('scroll', debouncedPosition);
      window.removeEventListener('resize', debouncedPosition);
    };
  }, []);

  return {
    left: posX,
    top: posY,
    styles: {
      '--x': useMotionTemplate`calc(var(--mx, 0px) - ${posX}px)`,
      '--y': useMotionTemplate`calc(var(--my, 0px) - ${posY}px)`,
    } as MotionStyle,
  };
}
