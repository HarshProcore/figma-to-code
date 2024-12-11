import { render, screen } from "@testing-library/react";
import { SocialIconButton } from "../SocialIconButton";

describe("SocialIconButton", () => {
  it("renders with provided icon name", () => {
    render(<SocialIconButton iconName="facebook" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<SocialIconButton iconName="facebook" className="custom-class" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });
});
