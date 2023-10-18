import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketmovies-api-3ny1.onrender.com"
  })