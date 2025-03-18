import { TextAreaProps } from "./text-area.types";

export const TextArea: React.FC<TextAreaProps> = ({
  onChange,
  placeholder,
  value,
  disabled,
  errorMessage,
  isInvalid,
}) => {
  const invalid = !!errorMessage || isInvalid;

  const hasError = errorMessage ? "border-red-500" : "border-gray-300";

  return (
    <div className="flex flex-col gap-1">
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full h-96 p-4 border border-gray-100 rounded-md shadow-gray-300 shadow-md focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500
          ${hasError}
        `}
      />
      {invalid && (
        <span className="text-red-500 text-sm font-semibold">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
