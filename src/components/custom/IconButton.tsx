import { iconMap } from "@/utils/iconMap";
import { IconButton } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { FaClock } from "react-icons/fa";

interface AppIconButtonProps {
  label?: string;
  iconName: string;
  className?: string;
}

function AppIconButton(props: AppIconButtonProps) {
  // @ts-expect-error iconName should be valid
  const Icon = iconMap[props.iconName] || FaClock;

  if (!props.label) {
    return (
      <IconButton className={props.className} aria-label={props.iconName}>
        <Icon />
      </IconButton>
    );
  }

  return (
    <Button aria-label={props.label} className={props.className}>
      <Icon />
      {props.label}
    </Button>
  );
}

export { AppIconButton };
