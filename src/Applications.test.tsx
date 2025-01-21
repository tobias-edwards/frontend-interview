import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Applications, { getApplications } from "./Applications";
import { getSingleApplicationFixture } from "./__fixtures__/applications.fixture";
import userEvent from "@testing-library/user-event";

// Can't easily replace mock
vi.mock("./Applications", async () => {
  const actual =
    await vi.importActual<typeof import("./Applications")>("./Applications");
  return {
    ...actual,
    getApplications: vi.fn().mockReturnValue(Promise.resolve([])),
  };
});

describe("Applications", () => {
  test("renders null when no applications", () => {
    render(<Applications />);
    expect(screen.queryByTestId("applications")).toBeNull();
  });

  test("renders first page of applications initially", async () => {
    getApplications.mockReturnValue(
      Promise.resolve(getSingleApplicationFixture),
    );

    render(<Applications />);

    // NOTE: Not respecting mock.... Hmmm - I'm more familiar with Jest mocks
    // screen.debug();
  });

  test.skip("clicks 'Load more' and fetches additional applications", async () => {
    // TODO: Replace mock fixture
    render(<Applications />);
    await userEvent.click(screen.getByRole("button", { name: /load more/i }));
  });
});
