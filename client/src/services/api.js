import axios from "axios";

const uri = "http://127.0.0.1:9000/api/";

export const getPostApiRequest = async () => {
  const response = await axios.get(uri);
  return response.data;
};
