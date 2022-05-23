import axios from "axios";
import { GET_YOUR_IP_URL } from "../../constants/Ip.const";

export const getIpData = async () => {
  const response = await axios.get(GET_YOUR_IP_URL);
  return response.data;
};
