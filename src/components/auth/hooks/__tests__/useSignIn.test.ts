import { renderHook, act } from "@testing-library/react-hooks";
import { useSignIn } from "../useSignIn";

describe("useSignIn", () => {
  it("should handle email change", () => {
    const { result } = renderHook(() => useSignIn());

    act(() => {
      result.current.handleEmailChange({
        target: { value: "test@example.com" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.email).toBe("test@example.com");
  });

  it("should handle password change", () => {
    const { result } = renderHook(() => useSignIn());

    act(() => {
      result.current.handlePasswordChange({
        target: { value: "password123" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.password).toBe("password123");
  });

  it("should handle form submission", () => {
    const { result } = renderHook(() => useSignIn());
    const preventDefault = jest.fn();

    act(() => {
      result.current.handleSubmit({
        preventDefault,
      } as React.FormEvent);
    });

    expect(preventDefault).toHaveBeenCalled();
  });
});
