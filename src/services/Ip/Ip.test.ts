import { TEST_IP, TEST_IP_URL } from "../../test/constants/Ip.test.const";
import { rest, server } from "../../test/mocks/Server.mock";
import { getIpData } from "./Ip.service";

it("get ip test", async () => {
  const ip = await getIpData();

  expect(ip).toEqual(TEST_IP);
});

it("handler failure", async () => {
  server.use(
    rest.get(TEST_IP_URL, (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );

  await expect(getIpData()).rejects.toThrow("404");
});
