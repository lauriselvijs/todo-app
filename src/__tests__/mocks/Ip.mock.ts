import { rest } from "msw";
import { TEST_IP, IP_API_URL } from "../constants/Ip.const";

export const ipServerHandler = rest.get(IP_API_URL, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(TEST_IP));
});
