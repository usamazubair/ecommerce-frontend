import axios from "utils/axios";

class AuthService {
  login(params) {
    return axios.post("login", params);
  }
  register(params) {
    return axios.post("register", params);
  }
}

export default new AuthService();
