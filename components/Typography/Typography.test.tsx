import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Typography from "./Typography";

describe("Typography Component", () => {
    it("renders the children text", () => {
        render(<Typography variant="h1">Hello World</Typography>);
        expect(screen.getByText("Hello World")).toBeInTheDocument();
    });
    it("applies additional className", () => {
        render(
            <Typography variant="h2" className="text-red-500">
                Custom Class
            </Typography>
        );
        const element = screen.getByText("Custom Class");
        expect(element).toHaveClass("text-red-500");
    });
    it("renders span variant with correct styles", () => {
        render(<Typography variant="span" className="">Inline Text</Typography>);
        const element = screen.getByText("Inline Text");
        expect(element).toHaveClass("inline");
        expect(element).toHaveClass("text-[10px]");
    });
     it("renders if variant doesn't exist", () => {
        render(<Typography variant="span1">Inline Text</Typography>);
    });
});