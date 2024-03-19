import ProductForm from '@/app/_components/ProductForm/ProductForm';

export const metadata = {
  title: 'Create a new product',
  description: 'Create a new product to be stored at our database using the form.',
};

const NewProductPage = () => (
  <div className="w-full">
    <h1 className="text-3xl">New product</h1>
    <ProductForm />
  </div>
);

export default NewProductPage;
