import { useRef } from 'react';

export const useFullScreen = () => {
  const ref = useRef();

  const triggerFull = () => {
    // requestFullscreen은 브라우저마다 이름 다름
    ref.current.requestFullscreen();
  };

  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen !== null) {
      document.exitFullscreen();
    }
  };
  return { ref, triggerFull, exitFull };
};
