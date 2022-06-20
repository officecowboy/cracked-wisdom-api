# Cracked Wisdom API

![mock-up](crackedwisdom_mockup.jpg)

## Description

This REST API contains two [MondoDB](https://www.mongodb.com/) models:
1) 1,000 quotes from [Brainy Quote](https://www.brainyquote.com/), categorized by four tags: alone, computer, future, and techology.
2) 300 images of cracked phone screens submitted for repair.

You can experience it at the [Information Arcade](https://informationarcade.com/cracked-wisdom/).

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
npm install
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
| GET    | /phones/             | Retrieves all phone img URLs in the database   |
| GET    | /phones/:id          | Retrieves a single phone by object ID.  |
| GET    | /phones/random   | Retrieves one random phone. |
| GET    | /phones/random-ten | Retrieves an array of ten random phones.  |
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

Build a Twitter bot ([@crackedwisdom](https://twitter.com/crackedwisdom)) that posts a new quote card everyday!
