import axios from "axios";

// whenever we make a request we can already append the beginning url
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
