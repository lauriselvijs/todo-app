import { rest } from "msw";
import { TEST_IP, TEST_IP_URL } from "../constants/Ip.test.const";

export const ipServerHandler = rest.get(TEST_IP_URL, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(TEST_IP));
});
