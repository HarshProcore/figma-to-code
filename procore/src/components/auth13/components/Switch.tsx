import * as React from "react";
import styled from "styled-components";
import { SwitchProps } from "../types";

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!disabled) {
        onChange(!checked);
      }
    }
  };

  return (
    <SwitchWrapper>
      <SwitchInput
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <SwitchControl
        role="switch"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyPress}
        isChecked={checked}
        isDisabled={disabled}
      >
        <SwitchThumb isChecked={checked} />
      </SwitchControl>
      {label && <SwitchLabel disabled={disabled}>{label}</SwitchLabel>}
    </SwitchWrapper>
  );
};

const SwitchWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const SwitchInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const SwitchControl = styled.div<{ isChecked: boolean; isDisabled: boolean }>`
  position: relative;
  width: 36px;
  height: 19px;
  background: ${(props) => (props.isChecked ? "#4FD1C5" : "#E2E8F0")};
  border-radius: 97.74px;
  transition: background-color 0.2s ease;
  opacity: ${(props) => (props.isDisabled ? 0.5 : 1)};
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};

  &:focus-visible {
    outline: 2px solid #4fd1c5;
    outline-offset: 2px;
  }
`;

const SwitchThumb = styled.span<{ isChecked: boolean }>`
  position: absolute;
  top: 3px;
  left: ${(props) => (props.isChecked ? "19px" : "3px")};
  width: 14px;
  height: 13px;
  background: white;
  border-radius: 50%;
  transition: left 0.2s ease;
`;

const SwitchLabel = styled.span<{ disabled: boolean }>`
  color: ${(props) => (props.disabled ? "#A0AEC0" : "#2D3748")};
  font-size: 12px;
`;
