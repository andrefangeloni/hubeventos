import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.12:3333",
  headers: { "Content-Type": "multipart/form-data" },
});

export default api;
