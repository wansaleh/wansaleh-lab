/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect } from 'react';
import { useMotionValue, useMotionValueEvent } from 'framer-motion';

export default function MouseProvider() {
  const mvx = useMotionValue(0);
  const mvy = useMotionValue(0);

  // const includeTouch = true;

  useEffect(() => {
    const updateMousePosition: EventListener = (ev) => {
      let x: number, y: number;
      if ('touches' in ev) {
        const touch = (ev as TouchEvent).touches[0];
        [x, y] = [touch.clientX, touch.clientY];
      } else {
        [x, y] = [(ev as MouseEvent).clientX, (ev as MouseEvent).clientY];
      }
      mvx.set(x);
      mvy.set(y);
    };

    window.addEventListener('pointermove', updateMousePosition);
    return () => {
      window.removeEventListener('pointermove', updateMousePosition);
    };
  }, []);

  // const springmvx = useSpring(mvx, { damping: 40, stiffness: 500 });
  // const springmvy = useSpring(mvy, { damping: 40, stiffness: 500 });

  useMotionValueEvent(mvx, 'change', (x) => {
    document.documentElement.style.setProperty('--mx', `${Math.round(x)}px`);
  });
  useMotionValueEvent(mvy, 'change', (y) => {
    document.documentElement.style.setProperty('--my', `${Math.round(y)}px`);
  });

  return null;
}
