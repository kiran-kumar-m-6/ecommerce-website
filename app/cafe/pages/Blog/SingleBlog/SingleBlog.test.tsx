import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import SingleBlog from "./SingleBlog";

const singleBlogData = {
  id: "blog1",
  image:
    "https://images.ctfassets.net/r414rw797gvf/6EcQczMiw91nGoJrcWw84y/55e31d6a103be02823bbcff225158452/Creamy_banner.webp?fm=avif&q=75&w=1500",
  heading: "NEW VAPE FLAVOURS FOR 2026: CREAMY TOBACCO BLU BAR KIT AND PODS",
  description:
    "Introducing new Creamy Tobacco flavour blu bar kit and pods for 2026.",
};

describe("Testing Single Blog Page", () => {
  beforeEach(() => {
    render(<SingleBlog data={singleBlogData} />);
  });

  test("checking blog rage render", () => {
    const blogPage = screen.getByTestId("singleBlog-page");
    expect(blogPage).toBeInTheDocument();
  });

  test("check blog page heading text render", () => {
    const blogHead = screen.getByText("VAPE LIQUIDS & FLAVOURS");
    expect(blogHead).toBeInTheDocument();
  });
});
