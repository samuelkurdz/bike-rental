# [Bike Rentals Project](https://bikerentals.netlify.app/)


## How to Use

### As a User

- Go to the [Bike Rentals](https://bikerentals.netlify.app/) web app
- As the system does not detect a logged in account, it routes you to login
- You have the option to create an account or login as an existing user (scroll down to see data of an existing user if you prefer the login choice)
- If you create a new account, you are routed back to login, use the details of the new account to login.
- After login, you can navigate the app, make and cancel reservations, filter the bikes
- Note that the JavaScrpt alert function is used as the error alert system for the app

### As a Manager

- Go to the [Bike Rentals](https://bikerentals.netlify.app/manager) managers platform
- As the system does not detect a logged in account, it routes you to login
- You have only the option to login as an existing manager (scroll down to see data of an existing user if you prefer the login choice), new managers can only be created by another manager.
- After login, you can navigate the app, create, edit and delete users, managers and bikes.
- Note that bikes can only be rated by users when they are reserving bikes.
- Note that when you delete a bike or a user, all the reservations in which such user or bike beling to are deleted from the database.
- Note that the JavaScrpt alert function is used as the error alert system for the app

### login data for some existing users

- email: reddington@gmmail.com, password: wisdom
- email: sambayo@gmmail.com, password: qwerty

### Login data for existing managers

- email: kurdz@gmail.com, password: qwerty (master admin: can neither be edited nor deleted)
- email: green@gmail.com, password: qwerty


### Project Setup
- Built with React, TypeScript, Vite, Redux Toolkit
- Routing with React-Router-Dom (v6)
- Styled with TailwindCSS
- Data persisted with redux-persist
- App hosted on Netlify

## The requirements for the test project are:
### Write an application to manage bike rentals:

- The application must be React-based.

- Include at least 2 user roles: Manager and User.

- Users must be able to create an account and log in.

- Each bike will have the following information in the profile: Model, Color, Location, Rating, and a checkbox indicating if the bike is available for rental or not.

#### Managers can:

- Create, Read, Edit, and Delete Bikes.[x]

- Create, Read, Edit, and Delete Users and Managers.[x]

- See all the users who reserved a bike, and the period of time they did it.[x]

- See all the bikes reserved by a user and the period of time they did it.[x]

#### Users can:

- See a list of all available bikes for some specific dates.

- Filter by model, color, location, or rate averages.[x]

- Reserve a bike for a specific period of time.[x]

- Rate the bikes with a score of 1 to 5.[x]

- Cancel a reservation.[x]

#### Other notes:

- You may use Firebase or similar services for the back-end. However, if you opt for this method, you should be able to explain how a REST API work
