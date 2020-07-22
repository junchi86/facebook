import { useEffect } from 'react';

const useCustumHeight = (ref: any) => {
  const autoHeightResizer = () => {
    ref.current.style.height = ref.current.scrollHeight + 'px';
  };
  useEffect(() => {
    ref.current.addEventListener('keypress', autoHeightResizer);
    return () => {
      ref.current.removeEventListener('keypress', autoHeightResizer);
    };
  }, [ref.current]);
};

export default useCustumHeight;