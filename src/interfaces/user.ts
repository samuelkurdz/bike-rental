export interface LoginUserPayload {
  email: string;
  password: string;
}
export interface CreateUserPayload {
  email: string;
  username: string;
  password: string;
}
export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
}
