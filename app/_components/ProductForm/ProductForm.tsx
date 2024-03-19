'use client';

import { editProductFormAction, createProductFormAction } from '@/app/_utils/actions';
import SubmitButton from '../Buttons/SubmitButton/SubmitButton';
import { Product } from '@/app/_utils/types';
import PriceInput from '../PriceInput/PriceInput';
import GoBackButton from '../Buttons/GoBackButton/GoBackButton';

type Props = {
    productData?: Product;
}

const ProductForm = async ({ productData } : Props) => (
  <form className="my-16" action={productData ? editProductFormAction : createProductFormAction}>
    <div className="w-full lg:w-1/2  m-auto flex flex-col gap-4">
      {productData && <input type="hidden" value={productData._id} name="id" />}
      <input
        className="input input-bordered"
        placeholder="Product name"
        type="text"
        name="title"
        required
        defaultValue={productData?.title}
      />
      <PriceInput defaultValue={productData?.price} />
      <input
        className="input input-bordered"
        placeholder="Product image url"
        type="text"
        name="imageUrl"
        required
        defaultValue={productData?.imageUrl}
      />
      <textarea className="textarea textarea-bordered" placeholder="Product description" name="description" cols={30} rows={10} defaultValue={productData?.description} />
      <div className="flex justify-between items-center">
        <GoBackButton />
        <SubmitButton isEditing={!!productData} />
      </div>
    </div>
  </form>
);

export default ProductForm;
