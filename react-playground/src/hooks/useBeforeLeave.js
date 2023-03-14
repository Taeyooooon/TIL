import { useEffect } from 'react';

export const useBeforeLeave = () => {
  const handler = () => {
    console.log('mouse leave');
  };

  useEffect(() => {
    document.addEventListener('mouseleave', handler);
    return () => document.removeEventListener('mouseleave', handler);
  }, []);
};
