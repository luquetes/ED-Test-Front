import ProductForm from '@/app/_components/ProductForm/ProductForm';
import { fetchSingleProduct } from '@/app/_utils/http';

type Props = {
  params: {
      id: string;
  }
}

export const metadata = {
  title: 'Editing product',
  description: 'Use the form to edit the product',
};

const EditProductPage = async ({ params }: Props) => {
  const productData = await fetchSingleProduct(params.id);

  return (
    <div className="w-full">
      <h1 className="text-3xl">
        Editing
        {' '}
        {productData.title}
      </h1>
      <ProductForm productData={productData} />
    </div>
  );
};

export default EditProductPage;
