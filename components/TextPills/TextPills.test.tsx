import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TextPills from "./TextPills";

describe("TextPill Component", () => {
  it("render TextPill Component with its props", () => {
    render(<TextPills label="Featured" customClasses="sample-class"/>);
    const pill = screen.getByText("Featured");
    expect(pill).toHaveClass("sample-class");
  });
});
