import axiosClient from "./axiosClient";

const cartApi = {
  // Add product to cart
  addProduct: (data) => {
    const url = `/shop/cart/add`;
    return axiosClient.post(url, data);
  },

  // Remove product from cart
  removeProduct: (productId) => {
    const url = `/shop/cart/remove/${productId}`;
    return axiosClient.delete(url);
  },

  // Clear entire cart
  clearCart: () => {
    const url = `/shop/cart/clear`;
    return axiosClient.delete(url);
  },

  // Increase product quantity in cart
  increaseQuantity: (productId) => {
    const url = `/shop/cart/increase/${productId}`;
    return axiosClient.put(url);
  },

  // Decrease product quantity in cart
  decreaseQuantity: (productId) => {
    const url = `/shop/cart/decrease/${productId}`;
    return axiosClient.put(url);
  },

  // Get cart details (if needed)
  getCart: () => {
    const url = `/shop/cart`;
    return axiosClient.get(url);
  },
};

export default cartApi;
