import { useState, useCallback } from "react";

export const useSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here
  }, []);

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
};
