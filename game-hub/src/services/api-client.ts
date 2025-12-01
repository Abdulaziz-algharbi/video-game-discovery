import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5e9238ea31ce4771924347d347e2dd72",
  },
});
