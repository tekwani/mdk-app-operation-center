// @vitest-environment jsdom
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithApp } from "../../test-utils/render";
import { DashboardPage } from "./dashboard-page";

describe("DashboardPage", () => {
  it("renders the hash rate and power charts with the site stats", async () => {
    renderWithApp(<DashboardPage />);

    expect(screen.getByText("Dashboard")).toBeTruthy();
    expect(await screen.findByText("Hash Rate")).toBeTruthy();
    expect(screen.getByText("Power Consumption")).toBeTruthy();
  });
});
