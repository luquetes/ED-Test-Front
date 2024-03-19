import Image from 'next/image';
import { getImageSrc } from '@/app/_utils/helpers';

type Props = {
    src: string;
    alt: string;
    height: number;
}

const ProductImage = ({ height, src, alt } : Props) => (
  <Image src={getImageSrc(src)} alt={alt} width={500} height={500} priority style={{ height: `${height}px` }} className="object-contain" />
);

export default ProductImage;
