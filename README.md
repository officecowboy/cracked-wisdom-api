# Cracked Wisdom API

![mock-up](crackedwisdom_mockup.jpg)

## Description

This REST API contains a [MondoDB](https://www.mongodb.com/) model with almost 4,000 quotes from [Brainy Quote](https://www.brainyquote.com/), categorized by four tags: alone, computer, future, and techology.

## Instructions for local manipulation

1) Clone down this repo.
2) Install dependencies.
3) Seed the database.
4) Start server link.
5) View the API through a browser or manipulate its information through apps like [Postman](https://www.postman.com/).

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

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | /quotes/             | Retrieves all quotes in the database   |
| GET    | /quotes/:id          | Retrieves a single quote by object ID.  |
| GET    | /quotes/random   | Retrieves one random quote. |
| GET    | /quotes/random-ten | Retrieves an array of ten random quotes.  |
| GET    | /quotes/?tag=tag | Retrieves all quotes with submitted tag. (i.e. "/quotes/?tag=computer")  |
| GET    | /quotes/?author=author | Retrieves all quotes by submitted author.  |
| POST  | /quotes/ | Creates a new quote based on the JSON body submitted.   |
| PUT    | /quotes/:id | Updates a single quote based on the JSON submitted.    |
| DELETE | /quotes/:id | Deletes a single quote by ID.    |

*Note: only GET commands will work in browser*

## Next Steps

I'm in the process of adding a second model that contains images of smartphones with cracked screens. My end goal with this project is to build a front-end interface that allows users to generate and download random quote cards, like the preview image above. I will then set up a Twitter bot ([@crackedwisdom](https://twitter.com/crackedwisdom)) that posts a new quote card everyday.
