import React from "react";
import { render } from "../../utils/Test.util";
import WeatherCurrent from "./WeatherCurrent.component";

test("Get Current Weather", () => {
  render(<WeatherCurrent />);
});
