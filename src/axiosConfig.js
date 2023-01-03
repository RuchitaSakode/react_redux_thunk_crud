import axios from "axios";
import env from "./env";

const instance = axios.create({
  baseURL: env.env.API_URL,
});
console.log("Check Process env", env.env);
instance.defaults.headers.post["content-Type"] =
  "application/json;charset=utf-8";
instance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default instance;
