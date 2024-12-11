import { Field } from "../ui/field";
import { AppInput } from "../ui/input";

interface InputFiedlProps {
  label: string;
  placeholder: string;
}

function InputField(props: InputFiedlProps) {
  return (
    <Field label={props.label}>
      <AppInput placeholder={props.placeholder}></AppInput>
    </Field>
  );
}

export { InputField };
