import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer", () => {
  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/made with/i)).toBeInTheDocument();
  });

  it("renders all links", () => {
    render(<Footer />);
    expect(screen.getByText("Creative Tim")).toHaveAttribute("href", "/about");
    expect(screen.getByText("Simmmple")).toHaveAttribute("href", "/about");
    expect(screen.getByText("Blog")).toHaveAttribute("href", "/blog");
    expect(screen.getByText("License")).toHaveAttribute("href", "/license");
  });
});
