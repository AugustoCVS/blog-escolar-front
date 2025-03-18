export type TextAreaProps = {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  errorMessage?: string;
  isInvalid?: boolean;
};