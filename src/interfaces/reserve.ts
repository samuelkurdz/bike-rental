export interface Reserve {
  id: string;
  bikeId: string;
  userId: string;
  fromPeriod: string;
  toPeriod: string;
  rating: number;
}

export interface CreateReservePayload {
  bikeId: string;
  userId: string;
  fromPeriod: string;
  toPeriod: string;
  rating: number;
}
export interface UpdateReservePayload {
  id: string;
  fromPeriod: string;
  toPeriod: string;
  rating: number;
}