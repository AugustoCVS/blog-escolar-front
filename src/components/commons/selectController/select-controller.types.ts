/* eslint-disable @typescript-eslint/no-explicit-any */
export type SelectControllerProps = {
  control: any;
  name: string;
  errorMessage: string | undefined;
  isInvalid: boolean;
  children: React.ReactNode;
  defaultValue?: string;
  label: string;
};