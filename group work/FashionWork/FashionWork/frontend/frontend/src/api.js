import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4060", // backend 的端口
});

export default api;