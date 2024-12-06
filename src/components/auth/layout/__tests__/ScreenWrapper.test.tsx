import { render } from "@testing-library/react";
import { ScreenWrapper, MainContent, ContentSection } from "../ScreenWrapper";

describe("Layout Components", () => {
  it("renders ScreenWrapper with correct styles", () => {
    const { container } = render(<ScreenWrapper />);
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveStyle({
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#fff",
    });
  });

  it("renders MainContent with correct styles", () => {
    const { container } = render(<MainContent />);
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveStyle({
      flex: "1",
      display: "flex",
      flexDirection: "column",
    });
  });

  it("renders ContentSection with correct styles", () => {
    const { container } = render(<ContentSection />);
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveStyle({
      display: "flex",
      gap: "20px",
      maxWidth: "1454px",
      margin: "0 auto",
      width: "100%",
    });
  });
});
