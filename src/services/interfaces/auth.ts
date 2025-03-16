export type RegisterRequestProps = {
  name: string;
  email: string;
  isAdmin: boolean;
  password: string;
  confirm_password: string;
};

export type LoginRequestProps = {
  email: string;
  password: string;
};

export type LoginResponseProps = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}