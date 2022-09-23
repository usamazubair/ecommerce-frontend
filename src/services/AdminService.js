import axios from "utils/axios";

class AdminService {
  getAllProducts() {
    return axios.get("products");
  }

  addProduct(param, imagePath) {
    var data = { ...param, imagePath: imagePath };
    return axios.post("products", data);
  }
  deleteProduct(id) {
    return axios.delete("products", { data: { id: id } });
  }
  updateProduct(id, data) {
    const updateData = {
      Name: data.name,
      Quantity: data.quantity,
      Price: data.price,
      Color: data.color,
      Brand: data.brand,
    };

    return axios.put("products", { id, updateData });
  }

  getAllCategories() {
    return axios.get("category");
  }

  addCategory(param) {
    return axios.post("category", param);
  }

  updateCategory(id, data) {
    const updateData = {
      Name: data.name,
      Country: data.country,
    };

    return axios.put("category", { id, updateData });
  }

  deleteCategory(id) {
    return axios.delete("category", { data: { id: id } });
  }

  getAllOrders() {
    return axios.get("order");
  }
}

export default new AdminService();
