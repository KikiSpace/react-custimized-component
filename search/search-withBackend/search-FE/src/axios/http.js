import axios from "axios";
const HTTP_ENDPOINT = "http://localhost:9090";

export const getFruits = async () => {
  const { data } = await axios.get(`${HTTP_ENDPOINT}/fruits`);

  return data;
};

export const addFruit = async (item) => {
  axios.post(`${HTTP_ENDPOINT}/addItem`, { item }).catch((e) => console.log(e));
};
