export interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}

export interface SignInFormProps {
  onSubmit?: (e: React.FormEvent) => void;
}
