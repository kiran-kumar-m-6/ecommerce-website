import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import BlogPage from "./BlogPage";
import { BlogData } from "@/Data/BlogData/BlogData";

describe("Testing Blog Page", () => {
  beforeEach(() => {
    render(<BlogPage data={BlogData} />);
  });

  test("checking blog rage render", () => {
    const blogPage = screen.getByTestId("blog-page");
    expect(blogPage).toBeInTheDocument();
  });

  test("check blog page heading text render", () => {
    const blogHead = screen.getByText("VAPE LIQUIDS & FLAVOURS");
    expect(blogHead).toBeInTheDocument();
  });

  test("check blogs was render", () => {
    const blogsFlex = screen.getByTestId("blog-flexblogs");
    expect(blogsFlex).toBeInTheDocument();
  });

  describe("Checking Blogs were render with all conditions", () => {
    test("check blogs image was render", () => {
      const checkAltImage = screen.getByAltText(
        /NEW VAPE FLAVOURS FOR 2026: CREAMY TOBACCO BLU BAR KIT AND PODS/i,
      );
      expect(checkAltImage).toBeInTheDocument();
      expect(checkAltImage).toHaveClass("object-cover w-full");
    });

    test("blog heading text was render", () => {
      const checkHeading = screen.getByRole("heading", {
        level: 1,
        name: /NEW VAPE FLAVOURS FOR 2026: CREAMY TOBACCO BLU BAR KIT AND PODS/i,
      });
      expect(checkHeading).toBeInTheDocument();
      expect(checkHeading).toHaveClass("text-blue-950 text-xl font-bold");
    });

    test("check blog description was render", () => {
      const checkDescription = screen.getByText(
        /Introducing new Creamy Tobacco flavour blu bar kit and pods for 2026./i,
      );
      expect(checkDescription).toBeInTheDocument();
    });

    test("blog cards have hover scale class", () => {
      const cards = screen.getAllByTestId("blog-card");
      cards.forEach((card) => {
        expect(card).toHaveClass("hover:scale-110");
      });
    });
  });
});
