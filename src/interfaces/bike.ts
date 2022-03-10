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
  isAvailable: boolean;
}

export interface TypeInterface {
  name: 'model' | 'rating' | 'location' | 'color';
}
