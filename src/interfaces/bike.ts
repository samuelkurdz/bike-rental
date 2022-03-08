export interface CreateBikePayload {
  model: string;
  color: string;
  location: string;
}

export interface Bike {
  id: string;
  model: string;
  color: string;
  location: string;
  rating: number;
  isAvailable: boolean;
}
