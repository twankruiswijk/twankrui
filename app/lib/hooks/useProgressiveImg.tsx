import { useEffect, useState } from 'react';

const useProgressiveImg = (
  lowQualitySrc: string,
  highQualitySrc: string,
): [string, boolean] => {
  const [src, setSrc] = useState<string>(lowQualitySrc);
  const blur = src === lowQualitySrc;

  useEffect(() => {
    setSrc(lowQualitySrc);

    const img = new Image();
    img.src = highQualitySrc;

    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);

  return [src, blur];
};
export default useProgressiveImg;
