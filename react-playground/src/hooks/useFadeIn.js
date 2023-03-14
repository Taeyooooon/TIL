import { useEffect, useRef } from 'react';

export const useFadeIn = (duration = 1, delay = 0) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const { current } = ref;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = '1';
    }
  }, []);

  return { ref: ref, style: { opacity: 0 } };
};
