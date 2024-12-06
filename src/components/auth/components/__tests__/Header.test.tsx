import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

describe("Header", () => {
  it("renders logo and navigation items", () => {
    render(<Header />);

    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByText("PURITY UI DASHBOARD")).toBeInTheDocument();
    expect(screen.getByText("DASHBOARD")).toBeInTheDocument();
    expect(screen.getByText("PROFILE")).toBeInTheDocument();
    expect(screen.getByText("SIGN UP")).toBeInTheDocument();
    expect(screen.getByText("SIGN IN")).toBeInTheDocument();
  });

  it("renders download button", () => {
    render(<Header />);
    expect(screen.getByText("Free Download")).toBeInTheDocument();
  });
});
