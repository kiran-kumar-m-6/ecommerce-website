import { render, screen } from "@testing-library/react";
import { describe, expect, it, test, vi } from "vitest";
import PopUp from "./PopUp";

vi.mock("@/hook/useBreakPoint", () => ({
  useBreakPoint: vi.fn(),
}));
const PopUpData = [
  {
    image:
      "https://images.ctfassets.net/r414rw797gvf/EhsIbQQAhoeu1qbkp4ykv/a2ea1aac4187a1b94442e1b69cc4efde/Summer_TEASER_homepage_banner_desktop.webp?fm=avif&q=75&w=3840",
    head: "NEW PROMOTION TEST",
    footer:
      "Stay up to datewith all things blu. You can unsubscribe at anytime.",
    btnText: "SIGN UP",
    btnClass: "bg-yellow-500 hover:bg-[#0099ff] w-[150px] h-[45px]",
  },
];

import { useBreakPoint } from "@/hook/useBreakPoint";

describe("Checking PopUp", () => {
  test("Checking use BreakPoint for Small Screen", () => {
    (useBreakPoint as any).mockReturnValue("sm");
    render(
      <PopUp
        data={PopUpData}
        open={true}
        onClose={() => {
          false;
        }}
      />,
    );
    expect(screen.getByText("sm")).toBeInTheDocument();
  });

  test("Checking use BreakPoint for Medium Screen", () => {
    (useBreakPoint as any).mockReturnValue("md");
    render(
      <PopUp
        data={PopUpData}
        open={true}
        onClose={() => {
          false;
        }}
      />,
    );
    expect(screen.getByText("md")).toBeInTheDocument();
  });

  test("Checking use BreakPoint for Large Screen", () => {
    (useBreakPoint as any).mockReturnValue("lg");
    render(
      <PopUp
        data={PopUpData}
        open={true}
        onClose={() => {
          false;
        }}
      />,
    );
    expect(screen.getByText("lg")).toBeInTheDocument();
  });

  test("Checking use BreakPoint for windows Screen", () => {
    (useBreakPoint as any).mockReturnValue("xl");
    render(
      <PopUp
        data={PopUpData}
        open={true}
        onClose={() => {
          false;
        }}
      />,
    );
    expect(screen.getByText("xl")).toBeInTheDocument();
  });

  test("Checking use BreakPoint Hook for extra extra large screen", () => {
    (useBreakPoint as any).mockReturnValue("xxl");
    render(
      <PopUp
        data={PopUpData}
        open={true}
        onClose={() => {
          false;
        }}
      />,
    );
    expect(screen.getByText("xxl")).toBeInTheDocument();
  });
});
