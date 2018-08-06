import axios from "axios";

const instance = axios.create({
  // baseURL: "http://10.0.2.2:3001",
  baseURL: "http://localhost:3001"
});

export function request(data) {
  return instance(data);
}
