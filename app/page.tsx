/* eslint-disable max-len */
import ProductList from './_components/ProductList/ProductList';
import ProductSearch from './_components/ProductSearch/ProductSearch';
import { fetchProducts } from './_utils/http';
import { Product } from './_utils/types';

export const metadata = {
  title: 'Extendeal Products Page',
  description: 'Check out our latest products!',
};

export type Props = {
  searchParams: {
    title?: string;
    sortBy?: string;
    order?: string;
  }
}

const HomePage = async ({ searchParams } : Props) => {
  let products: Product[];
  try {
    products = await fetchProducts({ searchParams });
  } catch (error) {
    throw new Error('Error retrieving products');
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl">Products</h1>
        <ProductSearch placeholder="Search products..." />
      </div>
      {products.length > 0 ? <ProductList products={products} /> : <p>There are no products yet!</p>}
    </div>
  );
};

export default HomePage;
