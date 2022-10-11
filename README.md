# PERN Final Project Template

- select `use this template`
- clone this repo

## Getting Started

### Project Structure

```
├── README.md (what you are currently reading)
├── back-end (a basic express app)
├── front-end (a basic create-react-app)
└── package.json (necessary boilerplate for heroku deployment )
```

**NOTE:** - You will have 3 `package.json` files in this project

- **Top level** - necessary for heroku deployment: you don't need to do anything with this file, it is set up for you
- **back-end** - everything to do with the express/postgres backend
- **front-end** - everything to do with the create-react-app front-end

### `back-end` Set Up and Deployment to Heroku

#### Basic App

**/back-end**

- `cd back-end`
- `npm install`
- `touch .env`

make sure you are on the same level as the `package.json` of the `back-end` directory

- `touch .env`

```
PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=postgres
PG_USER=postgres
PG_PASSWORD=""
```

- `npm run db:init`
- `npm run db:seed`

Test app locally. If it does not work locally, it will not work on Heroku.

Fix bugs.

When you are ready, deploy this app. 
