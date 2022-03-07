export interface LoginUserPayload {
  email: string;
  password: string;
}
export interface CreateUserPayload {
  email: string;
  username: string;
  password: string;
}

export interface ReservedBike {
  bikeId: string;
  fromPeriod: string;
  toPeriod: string;
}
export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  bikes: ReservedBike[]
}

// export interface 
