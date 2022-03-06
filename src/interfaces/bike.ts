export interface Bike {
  id: string;
  model: string;
  color: string;
  location: string;
  rating: number;
  isAvailable: boolean;
  reservedDates: ReservedDate[];
}

export interface ReservedDate {
  reservedBy: string;
  fromPeriod: string;
  toPeriod: string;
}
