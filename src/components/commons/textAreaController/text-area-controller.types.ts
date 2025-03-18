/* eslint-disable @typescript-eslint/no-explicit-any */
export type TextAreaControllerProps = {
  control: any;
  name: string;
  placeholder: string;
  errorMessage: string | undefined;
  isInvalid: boolean;
  defaultValue?: string | number | Date;
  disabled?: boolean;
};

