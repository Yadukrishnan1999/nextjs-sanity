import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleSmallCard from "./ArticleSmallCard";

jest.mock("../Image/Image", () => (props: any) => (
  <img data-testid="mock-image" src={props.src} alt="mock" />
));

jest.mock("../TextPills/TextPills", () => (props: any) => (
  <div data-testid="mock-textpills">{props.label}</div>
));

jest.mock("../Typography/Typography", () => (props: any) => (
  <div data-testid={`typography-${props.variant}`}>{props.children}</div>
));

describe("ArticleSmallCard", () => {
  const mockProps = {
    imageSrc: "/demo.jpg",
    label: "Lifestyle",
    title: "Healthy Morning Routine",
    description: "Start your day right.",
    author: "Ayesha M",
    date: "June 12, 2025",
  };

  it("renders correctly with given props", () => {
    render(<ArticleSmallCard {...mockProps} />);
    expect(screen.getByTestId("mock-image")).toHaveAttribute("src", mockProps.imageSrc);
    expect(screen.getByTestId("mock-textpills")).toHaveTextContent(mockProps.label);
    expect(screen.getByTestId("typography-h3")).toHaveTextContent(mockProps.title);
    expect(screen.getByText(mockProps.author)).toBeInTheDocument();
    expect(screen.getByText(mockProps.date)).toBeInTheDocument();
  });
});
