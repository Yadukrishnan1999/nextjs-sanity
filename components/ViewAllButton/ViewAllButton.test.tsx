import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ViewAllButton from "./ViewAllButton";
const consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
describe("ViewAllButton Component", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it("render ViewAllButton Component with its props", () => {
        render(<ViewAllButton btnLabel="btnLabel" />);
        const btn = screen.getByText("btnLabel");
        expect(btn).toHaveTextContent("btnLabel");
    });
    it("calls clickHandler (console.log) when button is clicked", () => {
        render(<ViewAllButton btnLabel="View All" />);
        const button = screen.getByText("View All");
        fireEvent.click(button);
        expect(consoleLogSpy).toHaveBeenCalledWith("Button clicked");
    });
});
