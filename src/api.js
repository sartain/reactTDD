import axios from "axios";

const client = axios.create({
  baseURL:
    "https://outside-in-dev-api.herokuapp.com/fwvNFKji7z0TOl5KCzrKwNLt6e2H5m7k",
});

const api = {
  loadRestaurants() {
    return client.get("/restaurants").then((response) => response.data);
  },
};

export default api;
