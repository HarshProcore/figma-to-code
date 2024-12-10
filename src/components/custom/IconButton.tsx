import { iconMap } from "@/utils/iconMap";
import { IconButton as IButton } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { FaClock } from "react-icons/fa";

interface AppIconButtonProps {
  label?: string;
  iconName: string;
  className?: string;
}

function IconButton(props: AppIconButtonProps) {
  // @ts-expect-error iconName should be valid
  const Icon = iconMap[props.iconName.toLowerCase()] || FaClock;

  if (!props.label) {
    return (
      <IButton className={props.className} aria-label={props.iconName}>
        <Icon />
      </IButton>
    );
  }

  return (
    <Button aria-label={props.label} className={props.className}>
      <Icon />
      {props.label}
    </Button>
  );
}

export { IconButton };
