import axiosClient from "./axiosClient";

const productApi = {
  getProducts: (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
  getTopTrending: () => {
    const url = "/products/topTrending";
    return axiosClient.get(url);
  },
  getCategories: () => {
    const url = "/products/categories";
    return axiosClient.get(url);
  },
  getProduct: (productId) => {
    const url = `/products/${productId}`;
    return axiosClient.get(url);
  },
  getRelatedProduct: (productId) => {
    const url = `/products/related/${productId}`;
    return axiosClient.get(url);
  },
};
export default productApi;
