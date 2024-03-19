'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createProduct, deleteProduct, editProduct } from './http';
import { Product } from './types';
import { formatPriceToCents } from './helpers';

export const createProductFormAction = async (formData: FormData) => {
  const formDataPrice = formData.get('price')?.toString() || '';
  const newProductData: Omit<Product, '_id'> = {
    price: formDataPrice ? formatPriceToCents(formDataPrice).toString() : '',
    imageUrl: formData.get('imageUrl')?.toString() || '',
    title: formData.get('title')?.toString() || '',
    description: formData.get('description')?.toString() || '',
  };

  await createProduct(newProductData);
  revalidatePath('/');
  redirect('/');
};

export const deleteProductAction = async (formData: FormData) => {
  const id = formData.get('id')?.toString() || '';
  await deleteProduct(id);
  revalidatePath('/');
  redirect('/');
};

export const editProductFormAction = async (formData: FormData) => {
  const productId = formData.get('id')?.toString();
  const formDataPrice = formData.get('price')?.toString() || '';
  const newProductData: Omit<Product, '_id'> = {
    price: formDataPrice ? formatPriceToCents(formDataPrice).toString() : '',
    imageUrl: formData.get('imageUrl')?.toString() || '',
    title: formData.get('title')?.toString() || '',
    description: formData.get('description')?.toString() || '',
  };
  if (productId) {
    await editProduct(productId, newProductData);
    revalidatePath('/');
    redirect('/');
  }
};
