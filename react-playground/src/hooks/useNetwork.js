import { useEffect, useState } from 'react';

export const useNetwork = (networkMessage) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleNetwork = () => {
    setStatus(navigator.onLine);
    networkMessage(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', handleNetwork);
    window.addEventListener('offline', handleNetwork);

    return () => {
      window.removeEventListener('online', handleNetwork);
      window.removeEventListener('offline', handleNetwork);
    };
  }, []);

  return status;
};
