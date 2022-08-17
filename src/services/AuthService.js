import axios from "utils/axios";

class AuthService {
  login(params) {
    console.log(params);
    return axios.post("login", params);
  }
  register(params) {
    return axios.post("register", params);
  }
}

export default new AuthService();
