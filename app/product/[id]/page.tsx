import DeleteProductButton from '@/app/_components/Buttons/DeleteProductButton/DeleteProductButton';
import EditProductButton from '@/app/_components/Buttons/EditProductButton/EditProductButton';
import { fetchSingleProduct } from '@/app/_utils/http';
import { formatPriceToCurrency } from '@/app/_utils/helpers';
import ProductImage from '@/app/_components/ProductImage/ProductImage';
import GoBackButton from '@/app/_components/Buttons/GoBackButton/GoBackButton';

type Props = {
    params: {
        id: string;
    }
}

export const generateMetadata = async ({ params }: Props) => {
  const meal = await fetchSingleProduct(params.id);
  return {
    title: meal?.title,
    description: meal?.description,
  };
};

const ProductDetailPage = async ({ params } : Props) => {
  const productData = await fetchSingleProduct(params.id);

  return (
    <div className="w-full">
      <h1 className="text-3xl hidden">{productData.title}</h1>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="w-full lg:w-1/3 flex justify-center items-center p-x4">
          <ProductImage src={productData.imageUrl} alt={productData.title} height={500} />
        </div>
        <div className="card-body w-2/3">
          <h2 className="card-title line-clamp-2 h-14">{productData.title}</h2>
          <h3 className="text-2xl">{formatPriceToCurrency(productData.price)}</h3>
          <p>{productData.description}</p>
        </div>
      </div>
      <div className="flex gap-4 my-8 justify-between items-center">
        <GoBackButton />
        <div className="flex gap-4">
          <EditProductButton id={productData._id} />
          <DeleteProductButton id={productData._id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
