import axios from "axios";
import { IP_API_FORMAT, IP_API_URL } from "./Ip.config";
import { IpServiceResponse } from "./Ip.service.d";

export const fetchIp = async (): Promise<IpServiceResponse> => {
  const { data } = await axios.get<IpServiceResponse>(IP_API_URL, {
    params: {
      format: IP_API_FORMAT,
    },
  });

  return data;
};
