import { render, screen, fireEvent } from "@testing-library/react";
import { SignInForm } from "../SignInForm";

describe("SignInForm", () => {
  const mockProps = {
    email: "",
    password: "",
    onEmailChange: jest.fn(),
    onPasswordChange: jest.fn(),
    onSubmit: jest.fn(),
  };

  it("renders form elements", () => {
    render(<SignInForm {...mockProps} />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls onChange handlers", () => {
    render(<SignInForm {...mockProps} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });
    expect(mockProps.onEmailChange).toHaveBeenCalled();

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });
    expect(mockProps.onPasswordChange).toHaveBeenCalled();
  });

  it("calls onSubmit handler", () => {
    render(<SignInForm {...mockProps} />);

    fireEvent.submit(screen.getByRole("form"));
    expect(mockProps.onSubmit).toHaveBeenCalled();
  });
});
