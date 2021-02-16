import axios from "axios";

const client = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID snCeqZb5nGGFuxgMTffoiLN9qdwkwWsHWAhpPKqmYkc",
  },
});

export const getPhotos = () => {
  return client.get("/photos");
};

export const searchPhoto = (keyword) => {
  return client.get(`/search/photos/?page=1&query=${keyword}`);
};
