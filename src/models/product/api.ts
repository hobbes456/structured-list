import axios from "axios";

import { IProduct } from "@/interfaces/IProduct";

import { BASE_URL } from "@/constants/baseUrl";

axios.defaults.baseURL = BASE_URL;

export const getProducts = async (): Promise<IProduct[]> => {
    const response = await axios.get<IProduct[]>(`/books`);
    return response.data;
};

export const createProduct = async (
    data: Omit<IProduct, "id">
): Promise<IProduct> => {
    const response = await axios.post<IProduct>(`/books`, data);
    return response.data;
};

export const deleteProduct = async (data: IProduct): Promise<IProduct> => {
    const responce = await axios.delete(`/books/${data.id}`);
    return responce.data;
};

export const updateProduct = async (data: IProduct): Promise<IProduct> => {
    const response = await axios.put<IProduct>(`/books/${data.id}`, data);
    return response.data;
};

export const toggleProduct = async (data: IProduct): Promise<IProduct> => {
    const response = await axios.put<IProduct>(`/books/${data.id}`, {
        ...data,
        isFavorite: !data.isFavorite,
    });
    return response.data;
};
