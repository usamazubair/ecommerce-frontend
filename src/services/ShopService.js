import axios from "utils/axios";

class ShopService {
  getProducts(categoryId, sort) {
    return axios.get(`category/${categoryId}/products`, {
      params: {
        sort,
      },
    });
  }

  addToCart(param) {
    return axios.post("cart", param);
  }

  getCart() {
    return axios.get("cart");
  }

  checkout() {
    return axios.post("payment");
  }
  order(param) {
    console.log(param);
    return axios.post("order", param);
  }
}

export default new ShopService();
