import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Image from "./Image";

jest.mock("next/image", () => (props: any) => {
    return <img {...props} />;
});
describe("Image Component", () => {
    it("renders the image with correct src and alt", () => {
        render(<Image src="/test.jpg" alt="Test Image" />);
        const img = screen.getByAltText("Test Image") as HTMLImageElement;
        expect(img).toBeInTheDocument();
        expect(img.src).toContain("/test.jpg");
    });

    it("applies the correct inner and outer classes", () => {
        render(
            <Image
                src="/test.jpg"
                alt="Styled Image"
                innerClass="test-inner-class"
                outterClass="test-outer-class"
            />
        );
        const outerDiv = screen.getByAltText("Styled Image").parentElement;
        const image = screen.getByAltText("Styled Image");
        expect(outerDiv).toHaveClass("test-outer-class");
        expect(image).toHaveClass("test-inner-class");
    });
});
