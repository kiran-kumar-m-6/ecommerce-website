import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, beforeEach } from "vitest";
import { Accordion } from "./Accordion";

const mockData = [
  {
    id: 1,
    question: "What is vaping?",
    answer: "Vaping is the act of inhaling vapor from an electronic device.",
  },
  {
    id: 2,
    question: "Is vaping safer?",
    answer: "Some studies suggest vaping is less harmful than smoking.",
  },
];

describe("Accordion Component", () => {
  beforeEach(() => {
    render(<Accordion data={mockData} />);
  });

  test("check accordion was rendering", () => {
    expect(screen.getByTestId("accordion-page")).toBeInTheDocument();
  });

  test("renders accordion questions", () => {
    expect(screen.getByText(/what is vaping/i)).toBeInTheDocument();
    expect(screen.getByText(/is vaping safer/i)).toBeInTheDocument();
  });

  test("answer is hidden initially", () => {
    const answer = screen.getByText(/vaping is the act of inhaling vapor/i);
    const container = answer.parentElement;
    expect(container).toHaveClass("max-h-0");
  });

  test("shows answer when question is clicked", () => {
    const questionButton = screen.getByRole("button", {
      name: /what is vaping/i,
    });
    fireEvent.click(questionButton);
    const answer = screen.getByText(/vaping is the act of inhaling vapor/i);
    const container = answer.parentElement;
    expect(container).toHaveClass("max-h-max");
  });

  test("closes answer when clicking the same question again", () => {
    const questionButton = screen.getByRole("button", {
      name: /what is vaping/i,
    });
    fireEvent.click(questionButton);
    fireEvent.click(questionButton);
    const answer = screen.getByText(/vaping is the act of inhaling vapor/i);
    const container = answer.parentElement;
    expect(container).toHaveClass("max-h-0");
  });

  test("opens only one accordion at a time", () => {
    const first = screen.getByRole("button", { name: /what is vaping/i });
    const second = screen.getByRole("button", { name: /is vaping safer/i });
    fireEvent.click(first);
    fireEvent.click(second);
    const firstAnswer = screen.getByText(/vaping is the act/i).parentElement;
    const secondAnswer = screen.getByText(/Some studies/i).parentElement;
    expect(firstAnswer).toHaveClass("max-h-0");
    expect(secondAnswer).toHaveClass("max-h-max");
  });
});
