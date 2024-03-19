import { Props } from '../page';
import { Product } from './types';

const url = 'http://localhost:8000/products';

export const fetchProducts = async ({ searchParams } : Props) => {
  const searchParamsUrl = searchParams ? new URLSearchParams(searchParams).toString() : '';
  const response = await fetch(`${url}?${searchParamsUrl}`);
  if (!response.ok) {
    throw new Error('Could not retrieve products');
  }
  const data = await response.json();
  return data.products;
};

export const fetchSingleProduct = async (id: string) : Promise<Product> => {
  const response = await fetch(`${url}/${id}`);
  if (!response.ok) {
    throw new Error('Could not retrieve product');
  }
  const data = await response.json();
  return data.product;
};

export const createProduct = async (newProduct: Omit<Product, '_id'>) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
  });
};

export const deleteProduct = async (id: string) => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
  });
};

export const editProduct = async (id: string, newProductData: Omit<Product, '_id'>) => {
  await fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProductData),
  });
};
