import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  const scrollHandler = () => {
    setScroll({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return scroll;
};
