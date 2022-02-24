import { FC } from 'react';
import useProgressiveImg from '~/lib/hooks/useProgressiveImg';

type Props = {
  imgSrc: string;
  props: any;
};

const BlurredUpImage: FC<Props> = ({ imgSrc, props }) => {
  const [src, blur] = useProgressiveImg('./placeholder.webp', imgSrc);

  return (
    <img
      src={src}
      style={{
        filter: blur ? 'blur(20px)' : 'none',
        transition: blur ? 'none' : 'filter 0.3s ease-out',
        clipPath: 'inset(0)',
      }}
      {...props}
    />
  );
};

export default BlurredUpImage;
