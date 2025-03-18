import { Controller } from "react-hook-form";
import { TextAreaControllerProps } from "./text-area-controller.types";
import { TextArea } from "../textArea/text-area.component";

export const TexteAreaController: React.FC<TextAreaControllerProps> = ({
  control,
  errorMessage,
  isInvalid,
  name,
  placeholder,
  defaultValue,
  disabled,
}) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextArea
            placeholder={placeholder}
            value={field.value}
            onChange={field.onChange}
            errorMessage={errorMessage}
            isInvalid={isInvalid}
            disabled={disabled}
          />
        )}
      />
    </div>
  );
};
