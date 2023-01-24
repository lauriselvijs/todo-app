import { rest } from "msw";
import { IP_API_URL } from "../../services/Ip/Ip.config";
import { TEST_IP } from "../constants/Ip.const";

export const ipServerHandler = rest.get(IP_API_URL, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(TEST_IP));
});
