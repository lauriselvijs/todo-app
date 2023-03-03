import { rest } from "msw";
import { setupServer } from "msw/node";
import { ipServerHandler } from "./Ip.mock";
import { currentWeatherServerHandler } from "./Weather.mock";

const serverHandlers = [ipServerHandler, currentWeatherServerHandler];

export const server = setupServer(
  ...serverHandlers,
  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: "Please add request handler" })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { rest };
