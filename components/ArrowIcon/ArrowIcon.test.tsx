import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArrowIcon from "./ArrowIcon";

describe("ArrowIcon Component", () => {
  it("render ArrowIcon Component with its props", () => {
    render(<ArrowIcon direction="left" className="test-arrow-icon" />);
    const icon = screen.getByTestId("arrow-icon-left");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("test-arrow-icon");
  });
});
