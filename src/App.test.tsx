import { render, screen } from "@testing-library/react";
import { describe, test, vi } from "vitest";
import App from "./App";

vi.mock("./Applications", () => ({
  __esModule: true,
  default: () => <div data-testid="applications" />,
}));

describe("App", () => {
  test("renders title and logo", () => {
    render(<App />);
    screen.getByRole("heading", { name: /application portal/i });
    screen.getByRole("img", { name: /iwoca logo/i });
    screen.getByTestId("applications");
  });

  test("renders Applications", () => {
    render(<App />);
    screen.getByTestId("applications");
  });
});
