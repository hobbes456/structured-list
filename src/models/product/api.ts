import { IProduct } from "@/interfaces/IProduct";

import { FetchOption } from "@classes/FetchOption";

import { BASE_URL } from "@/constants/baseUrl";

export const getProducts = async (): Promise<IProduct[]> => {
    const response = await fetch(`${BASE_URL}/books`);
    return response.json();
};

export const createProduct = async (
    data: Omit<IProduct, "id">
): Promise<IProduct> => {
    const response = await fetch(
        `${BASE_URL}/books`,
        new FetchOption("POST", data)
    );
    return response.json();
};

export const deleteProduct = async (data: IProduct): Promise<IProduct> => {
    const responce = await fetch(
        `${BASE_URL}/books/${data.id}`,
        new FetchOption("DELETE", data)
    );
    return responce.json();
};

export const updateProduct = async (data: IProduct): Promise<IProduct> => {
    const response = await fetch(
        `${BASE_URL}/books/${data.id}`,
        new FetchOption("PUT", data)
    );
    return response.json();
};

export const toggleProduct = async (data: IProduct): Promise<IProduct> => {
    const response = await fetch(
        `${BASE_URL}/books/${data.id}`,
        new FetchOption("PUT", { ...data, isFavorite: !data.isFavorite })
    );
    return response.json();
};
