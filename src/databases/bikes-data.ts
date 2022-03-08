import { Bike } from "@interfaces";

export const bikes: Bike[] = [
  {
    id: 'd9428888-122b-11e1-b85c-61cd3cbb3210',
    model: 'toyota',
    color: 'green',
    location: 'Lagos, Nigeria',
    rating: 3,
    isAvailable: true,
    reservedDates: [
      {
        reservedBy: '630eb68f-e0fa-5ecc-887a-7c7a62614681',
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
        reservedBy: '630eb68f-e0fa-5ecc-887a-7c7a62614681',
        fromPeriod: '2022-02-01',
        toPeriod: '2022-02-03'
      }
    ]
  },
  {
    id: '710b962e-041c-11e1-9234-0123456789ab',
    model: 'benz',
    color: 'green',
    location: 'Lagos, Nigeria',
    rating: 3,
    isAvailable: true,
    reservedDates: [
      {
        reservedBy: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        fromPeriod: '2022-02-01',
        toPeriod: '2022-02-03'
      },
      {
        reservedBy: '630eb68f-e0fa-5ecc-887a-7c7a62614681',
        fromPeriod: '2022-02-10',
        toPeriod: '2022-02-13'
      }
    ]
  },
  {
    id: '11b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    model: 'bmw',
    color: 'red',
    location: 'Abuja, Nigeria',
    rating: 4,
    isAvailable: false,
    reservedDates: [
      {
        reservedBy: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        fromPeriod: '2022-02-10',
        toPeriod: '2022-02-13'
      },
      {
        reservedBy: 'c106a26a-21bb-5538-8bf2-57095d1976c1',
        fromPeriod: '2022-02-15',
        toPeriod: '2022-02-20'
      },
    ]
  },
];
