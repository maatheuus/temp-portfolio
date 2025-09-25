import { useEffect, useRef, useState } from 'react';

function useOverlapDetector(
  imgRef: React.RefObject<HTMLElement>,
  textRef: React.RefObject<HTMLElement>,
  minOverlapPx = 12,
) {
  const [overlapping, setOverlapping] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!imgRef.current || !textRef.current) return;

    const check = () => {
      rafRef.current = null;
      const imgRect = imgRef.current!.getBoundingClientRect();
      const textRect = textRef.current!.getBoundingClientRect();

      // interseção vertical
      const intersectTop = Math.max(textRect.top, imgRect.top);
      const intersectBottom = Math.min(textRect.bottom, imgRect.bottom);
      const intersectHeight = intersectBottom - intersectTop;

      const intersectLeft = Math.max(textRect.left, imgRect.left);
      const intersectRight = Math.min(textRect.right, imgRect.right);
      const intersectWidth = intersectRight - intersectLeft;

      const isIntersecting =
        intersectHeight > minOverlapPx && intersectWidth > 10; // considerar >= um pequeno width também

      setOverlapping(isIntersecting);
    };

    const onScrollOrResize = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(check);
    };

    // listeners
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    // também observa redimensionamentos do próprio container (melhora responsividade)
    const ro = new ResizeObserver(onScrollOrResize);
    ro.observe(document.documentElement);
    if (imgRef.current) ro.observe(imgRef.current);
    if (textRef.current) ro.observe(textRef.current);

    // check inicial *após* paint (evita estado true por causa de SSR/layout ainda não pronto)
    requestAnimationFrame(check);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      ro.disconnect();
    };
  }, [imgRef, textRef, minOverlapPx]);

  return overlapping;
}

export default useOverlapDetector;
