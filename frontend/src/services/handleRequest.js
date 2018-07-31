import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001"
});

export function request(data) {
  console.log(data);
  return instance(data);
}
