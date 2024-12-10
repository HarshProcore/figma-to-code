export interface NavItemProps {
  iconName: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface SocialButtonProps {
  iconName: string;
  onClick?: () => void;
}

export interface AuthLayoutProps {
  children: React.ReactNode;
}

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
}
