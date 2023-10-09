import { ApiData } from '../types/api-types';
import { config } from '../config';

export const getProducts = async (search?: string): Promise<ApiData> => {
  const productsUrl = `${config.apiUrl}/products`;
  const url = search ? `${productsUrl}/search?q=${search}` : productsUrl;
  const goodsResp = await fetch(url);

  return await goodsResp.json();
};
