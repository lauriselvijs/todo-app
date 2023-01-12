import axios from "axios";
import { IP_API_FORMAT, IP_API_URL } from "./Ip.config";
import { IpServiceResponse } from "./Ip.service.d";

export const getIp = async (): Promise<string> => {
  try {
    const {
      data: { ip },
    } = await axios.get<IpServiceResponse>(IP_API_URL, {
      params: {
        format: IP_API_FORMAT,
      },
    });

    return ip;
  } catch (err: any) {
    throw err;
  }
};
