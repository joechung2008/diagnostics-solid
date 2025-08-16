import * as solidWeb from "solid-js/web";
import { describe, expect, it, vi } from "vitest";
import reportWebVitals from "../reportWebVitals";

vi.mock("solid-js/web");
vi.mock("../reportWebVitals");

describe("index.tsx", () => {
  it("renders App to root element", async () => {
    const root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);

    // Re-import index.tsx to trigger its code
    await import("../index");

    expect(solidWeb.render).toHaveBeenCalled();
    expect(document.getElementById("root")).not.toBeNull();
  });

  it("calls reportWebVitals with console.log", async () => {
    await import("../index");
    expect(reportWebVitals).toHaveBeenCalledWith(console.log);
  });
});
