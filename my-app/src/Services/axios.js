import axios from "axios";

axios.defaults.baseURL = "https://658e14c07c48dce94739ee30.mockapi.io";

export const paginationCamper = async (item) => {
  const response = await axios.get(`/advert/?page=${item.page}&limit=4`);
  return { item: response.data, page: item.page };
};

export const getCamper = async (id) => {
  const response = await axios.get(`/favorites/${id}`);
  return response.data;
};

export const addCamper = async (favorite) => {
  const response = await axios.post("/favorites", favorite);
  return response.data;
};

export const deleteCamper = async (id) => {
  const response = await axios.delete(`/favorites/${id}`);
  return response.data;
};
