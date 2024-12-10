import { iconMap } from "@/utils/iconMap";
import { IconButton } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { FaClock } from "react-icons/fa";

interface AppIconButtonProps {
  label?: string;
  iconName: string;
}

function AppIconButton(props: AppIconButtonProps) {
  // @ts-expect-error iconName should be valid
  const Icon = iconMap[props.iconName] || FaClock;

  if (!props.label) {
    return (
      <IconButton aria-label={props.iconName}>
        <Icon />
      </IconButton>
    );
  }

  return (
    <Button aria-label={props.label}>
      <Icon />
      {props.label}
    </Button>
  );
}

export { AppIconButton };
