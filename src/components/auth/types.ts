export interface SocialButtonProps {
  iconName: string;
  onClick?: () => void;
}

export interface AuthFormProps {
  onSubmit: (data: AuthFormData) => void;
}

export interface AuthFormData {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
}
