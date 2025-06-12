import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleCard from "./ArticleCard";

jest.mock("../Image/Image", () => (props: any) => (
  <img src={props.src} alt={props.alt || "mock-image"} data-testid="article-image" />
));

jest.mock("../TextPills/TextPills", () => (props: any) => (
  <div data-testid="text-pill">{props.label}</div>
));

jest.mock("../Typography/Typography", () => (props: any) => (
  <div data-testid={`typography-${props.variant}`}>{props.children}</div>
));

describe("ArticleCard", () => {
  const mockProps = {
    imageSrc: "/test-image.jpg",
    label: "Health",
    title: "5 Ways to Stay Fit",
    description: "Tips to improve your daily routine.",
    author: "Jane Doe",
    date: "June 12, 2025",
  };

  it("renders the component with all props", () => {
    render(<ArticleCard {...mockProps} />);
    expect(screen.getByTestId("article-image")).toHaveAttribute("src", mockProps.imageSrc);
    expect(screen.getByTestId("text-pill")).toHaveTextContent(mockProps.label);
    expect(screen.getByTestId("typography-h3")).toHaveTextContent(mockProps.title);
    expect(screen.getByTestId("typography-h4")).toHaveTextContent(mockProps.description);
    expect(screen.getAllByTestId("typography-span")[0]).toHaveTextContent(mockProps.author);
    expect(screen.getAllByTestId("typography-span")[1]).toHaveTextContent(mockProps.date);
  });
});

