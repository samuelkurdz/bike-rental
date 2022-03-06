import { Bike } from "../interfaces";

export const bikes: Bike[] = [
  {
    id: '235e35f7-tc41-4e3e-996e-78470141d89d',
    model: 'toyota',
    color: 'green',
    location: 'Lagos, Nigeria',
    rating: 3,
    isAvailable: true,
    reservedDates: [
      {
        reservedBy: '297c34f7-6c71-483e-996e-78470141d89d',
        fromPeriod: '2022-01-30',
        toPeriod: '2022-02-01'
      }
    ]
  },
  {
    id: '135e33f7-hcf1-bsdd3e-2s6e-78470141d89d',
    model: 'honda',
    color: 'red',
    location: 'Abuja, Nigeria',
    rating: 4,
    isAvailable: false,
    reservedDates: [
      {
        reservedBy: '297c34f7-6c71-483e-996e-78470141d89d',
        fromPeriod: '2022-02-01',
        toPeriod: '2022-02-03'
      }
    ]
  },
  {
    id: '235e35f7-tc41-4e3e-99dsc6e-78470141d89d',
    model: 'toyota',
    color: 'green',
    location: 'Lagos, Nigeria',
    rating: 3,
    isAvailable: true,
    reservedDates: [
      {
        reservedBy: '297c34f7-6c71-483e-996e-78470141d89d',
        fromPeriod: '2022-02-01',
        toPeriod: '2022-02-03'
      }
    ]
  },
  {
    id: '135e33f7-hcf1-b63eac-2s6e-78470141d89d',
    model: 'honda',
    color: 'red',
    location: 'Abuja, Nigeria',
    rating: 4,
    isAvailable: false,
    reservedDates: [
      {
        reservedBy: '297c34f7-6c71-483e-996e-78470141d89d',
        fromPeriod: '2022-02-10',
        toPeriod: '2022-02-13'
      }
    ]
  },
  {
    id: '235e35f7-tc41-4esca3e-996e-78470141d89d',
    model: 'toyota',
    color: 'green',
    location: 'Lagos, Nigeria',
    rating: 3,
    isAvailable: true,
    reservedDates: [
      {
        reservedBy: '297c34f7-6c71-483e-996e-78470141d89d',
        fromPeriod: '2022-02-05',
        toPeriod: '2022-02-10'
      }
    ]
  },
  {
    id: '135e33f7-hcf1-bwdl63e-2s6e-78470141d89d',
    model: 'honda',
    color: 'red',
    location: 'Abuja, Nigeria',
    rating: 4,
    isAvailable: false,
    reservedDates: []
  },
];
