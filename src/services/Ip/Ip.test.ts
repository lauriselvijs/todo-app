import { TEST_IP } from "../../__tests__/constants/Ip.const";
import { rest, server } from "../../__tests__/mocks/Server.mock";
import { IP_API_URL } from "./Ip.config";
import { ipService } from "./";

it("get ip test", async () => {
  const ip = await ipService.fetchIp();

  expect(ip).toEqual(TEST_IP);
});

it("handler failure", async () => {
  server.use(
    rest.get(IP_API_URL, (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );

  await expect(ipService.fetchIp()).rejects.toThrow("404");
});
