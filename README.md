# Royalust-backend

> This GitHub repository provides a robust API implementation for user authentication, utilizing JWT (JSON Web Tokens) for secure authentication and authorization. The API includes endpoints for user registration, login, token management (access token and refresh token), and user profile editing.

## Built With
- Node.js
- Typescript
- Mongodb
- Passport js

## Getting Started

To set up a local version of this project, a collection of steps have been put together to help guide you from installations to usage. Simply follow the guide below and you'll be up and running in no time.

### Set up

- Install [Node.js Framework](https://nodejs.org/en), if you haven't already.
- Open Terminal
- Navigate to the preferred location/folder you want the app on your local machine. Use `cd <file-path>` for this.
- Run `git clone https://github.com/Rashad-Muntar/Royalust-backend.git` to download the source folder.
- Now that you have a local copy of the project, navigate to the root of the project folder from your terminal.
- Run `yarn` or `npm install` to install all dependencies
- The app is connected with a Mongo db atlast database but you can choose to add you own database enpoint.
- Run `yarn dev` or `npm run dev` to get a server running on your local machine.

## Endpoints
_Base URL_: `http://localhost:4000/api`

|Description|Method|Endpoint|
|:---|:---|:---|
|Sign up to create an account|POST|`/register`|
|Log in to created account|POST|`/login`|
|Log out if logged in|DELETE|`/logout`|
|Fetch current user|GET|`/user/:id`|
|Fetch users list |GET|`/getUsers`|
|Refresh access token |POST|`/refresh`|
|Update user |PUT|`/updateUser`|

### Usage

At this point, you now have everything you need to properly run the program (source code, node.js, mongodb, typescript). If not, refer back to the setup section of this documentation.

👤 **Rashad Muntar**

- GitHub: [@Rashad-Muntar](https://github.com/Rashad-Muntar)
- Twitter - [@RashadToure](https://twitter.com/RashadToure)
- LinkedIn: [Rashad Muntar](https://www.linkedin.com/in/rashad-muntar/)
