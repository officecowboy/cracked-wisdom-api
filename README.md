# Cracked Wisdom API

This REST API contains almost 4,000 quotes from [Brainy Quote](https://www.brainyquote.com/), categorized by four tags: alone, computer, future, and techology.

## Instructions for local manipulation

1) Clone down this repo.
2) Install dependencies.
3) Seed the database.
4) Start server link.
5) Either view the API info through a browser for the seeded information or manipulate the information through apps like Postman.

### Clone repository

```
git clone https://github.com/officecowboy/cracked-wisdom-api.git
```

### Install dependencies

```
npm install express mongoose
```

### Seed the data

```
npm run seed
```

### Connect to server

```
npm start
````

## API Endpoints

Only GET commands will work in browser. You can use an app like [Postman]("https://www.postman.com/") for further API manipulation.

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | /quotes/             | Retrieves all quotes in the database   |
| GET    | /quotes/:id          | Retrieves a single quote by object ID.  |
| GET    | /quotes/random   | Retrieves one random quote. |
| GET    | /quotes/random-ten | Retrieves an array of ten random quotes.  |
| POST  | /quotes/ | Creates a new quote based on the JSON body submitted.   |
| PUT    | /quotes/:id | Updates a single quote based on the JSON submitted.    |
| DELETE | /quotes/:id | Deletes a single quote by ID.    |