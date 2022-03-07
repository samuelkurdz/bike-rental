import { User } from "../interfaces/user";

export const users: User[] = [
  {
    id: '630eb68f-e0fa-5ecc-887a-7c7a62614681',
    email: 'kurdzsamuel@gmail.com',
    username: 'samuel',
    password: 'qwerty',
    bikes: [
      {
        bikeId: 'd9428888-122b-11e1-b85c-61cd3cbb3210',
        fromPeriod: '2022-01-30',
        toPeriod: '2022-02-01'
      },
      {
        bikeId: '135e33f7-hcf1-bsdd3e-2s6e-78470141d89d',
        fromPeriod: '2022-02-01',
        toPeriod: '2022-02-03'
      },
      {
        bikeId: '710b962e-041c-11e1-9234-0123456789ab',
        fromPeriod: '2022-02-10',
        toPeriod: '2022-02-13'
      }
    ]
  },
  {
    id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    email: 'reddington@gmmail.com',
    username: 'reddo',
    password: 'wisdom',
    bikes: [
      {
        bikeId: '710b962e-041c-11e1-9234-0123456789ab',
        fromPeriod: '2022-02-01',
        toPeriod: '2022-02-03'
      },
      {
        bikeId: '11b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        fromPeriod: '2022-02-10',
        toPeriod: '2022-02-13'
      }
    ]
  },
  {
    id: 'c106a26a-21bb-5538-8bf2-57095d1976c1',
    email: 'bolu@gmmail.com',
    username: 'bolu',
    password: 'samuel',
    bikes: [
      {
        bikeId: '11b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        fromPeriod: '2022-02-15',
        toPeriod: '2022-02-20'
      }
    ]
  },
  {
    id: '9b1deb4d-9b1d-eb4d-9bdd-2b0d7b3dcb6d',
    email: 'sambayo@gmmail.com',
    username: 'dayo',
    password: 'qwerty',
    bikes: []
  },
];