import { IpService } from ".";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { IP, IP_URL } from "./Ip.test.const";

const { getIpData } = IpService;

const server = setupServer(
  rest.get(IP_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(IP));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

it("get ip test", async () => {
  const ip = await getIpData();

  expect(ip).toEqual(IP);
});

it("handler failure", async () => {
  server.use(
    rest.get(IP_URL, (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );

  await expect(getIpData()).rejects.toThrow(
    "Request failed with status code 404"
  );
});
