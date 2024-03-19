import { StaticImageData } from 'next/image';
// eslint-disable-next-line import/extensions
import notFoundImg from '@/public/imageComingSoon.jpg';

export const formatPriceToCents = (value: string): number => parseFloat(value.slice(1)) * 100;

export const formatPriceToCurrency = (value: string): string => `$ ${(parseFloat(value) / 100).toFixed(2)}`;

export const getImageSrc = (src: string): string | StaticImageData => (src.startsWith('http') || src.startsWith('data:image') ? src : notFoundImg);
