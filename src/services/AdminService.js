import axios from "utils/axios";

class AdminService {
  getAllProducts() {
    return axios.get("products");
  }

  addProduct(param) {
    return axios.post("products", param);
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
}

export default new AdminService();
