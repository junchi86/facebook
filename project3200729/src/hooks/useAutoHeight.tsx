import { useRef, useLayoutEffect } from 'react';

export default function useAutoHeight(lineHeight: number, contents: string) {
  const ref: any = useRef(null);
  // textarea 높이 자동 조절
  useLayoutEffect(() => {
    ref.current.style.height = 'auto';
    ref.current.style.height = ref.current.scrollHeight + lineHeight + 'px';
  }, [contents]);
  return [ref];
}
