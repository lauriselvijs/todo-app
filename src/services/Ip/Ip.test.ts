import { TEST_IP } from "../../tests/constants/Ip.const";
import { rest, server } from "../../tests/mocks/Server.mock";
import { IP_API_URL } from "./Ip.config";
import { ipService } from "./";

describe("Ip service", () => {
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
});
