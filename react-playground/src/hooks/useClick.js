import { useEffect, useRef } from 'react';

export const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    element.current?.addEventListener('click', onClick);
    return () => element.current?.removeEventListener('click', onClick);
  });

  return element;
};
