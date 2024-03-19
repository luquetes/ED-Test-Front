import { Product } from '@/app/_utils/types';
import ProductItemCard from '../ProductItemCard/ProductItemCard';

type Props = {
    products: Product[];
}

// eslint-disable-next-line max-len
const ProductList = ({ products }: Props) => (
  <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {products.map((product) => (
      <li key={product._id}>
        <ProductItemCard product={product} />
      </li>
    ))}
  </ul>
);

export default ProductList;
