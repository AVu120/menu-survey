import { render } from "@testing-library/react";
import App from "./App";

test("renders app", () => {
  render(<App />);
  // const heading = screen.getByText(/select your item:/i);
  // expect(heading).toBeInTheDocument();
});
