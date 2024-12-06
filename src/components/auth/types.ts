export interface NavItemProps {
  icon: string;
  text: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export interface InputFieldProps {
  label: string;
  placeholder: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
