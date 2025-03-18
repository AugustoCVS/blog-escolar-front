/* eslint-disable @typescript-eslint/no-explicit-any */
export type InputControllerProps = {
  control: any;
  name: string;
  placeholder: string;
  type: string;
  errorMessage: string | undefined;
  isInvalid: boolean;
  isSecondInput?: boolean;
  children?: React.ReactNode;
  defaultValue?: string | number | Date;
  disabled?: boolean;
  onClick?: () => void;
};