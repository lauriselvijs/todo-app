import { TEST_IP, IP_API_URL } from "../../__tests__/constants/Ip.const";
import { rest, server } from "../../__tests__/mocks/Server.mock";
import { getIp } from "./Ip.service";

it("get ip test", async () => {
  const ip = await getIp();

  expect(ip).toEqual(TEST_IP);
});

it("handler failure", async () => {
  server.use(
    rest.get(IP_API_URL, (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );

  await expect(getIp()).rejects.toThrow("404");
});
