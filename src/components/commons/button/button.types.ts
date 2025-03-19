/* eslint-disable @typescript-eslint/no-explicit-any */
export type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: any) => void;
  loading?: boolean;
  className?: string;
  type?: "button" | "submit" 
}