export interface Manager {
  id: string;
  email: string;
  username: string;
  password: string;
}

export interface CreateManagerPayload {
  email: string;
  username: string;
  password: string;
}
