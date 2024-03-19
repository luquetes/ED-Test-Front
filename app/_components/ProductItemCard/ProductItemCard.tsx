import Link from 'next/link';
import { Product } from '@/app/_utils/types';
import { formatPriceToCurrency } from '@/app/_utils/helpers';
import ProductImage from '../ProductImage/ProductImage';

type Props = {
    product: Product
}

const ProductItemCard = ({ product }: Props) => (
  <div className="card bg-base-100 shadow-xl">
    <div>
      <ProductImage src={product.imageUrl} alt={product.title} height={300} />
    </div>
    <div className="card-body">
      <h2 className="card-title">{formatPriceToCurrency(product.price)}</h2>
      <p className="line-clamp-2 h-12">{product.title}</p>
      <div className="card-actions justify-end">
        <Link className="btn btn-primary" href={`/product/${product._id}`}>See details</Link>
      </div>
    </div>
  </div>
);

export default ProductItemCard;
