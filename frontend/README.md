# Yes, Chef!
Phase 3 Project

## Introduction
Yes, Chef! is a recipe sharing platform that allows users to view, rate, and create recipes of all types.

## Repo
* GitHub Repository: https://github.com/lizareed5/phase-3-project-maestro

## Technologies
* Ruby
* Sinata
* React
* JavaScript
* HTML
* CSS
* JSON
* Semantic UI

## User Stories
The user can:
* Login to an existing account
* View top rated recipes
* View recipe details
* Yes or Mess different recipes
* Add favorite recipes to their list of kisses
* Create a new recipe
* Browse all recipes
* Filter recipes by categories such as cuisine, difficulty, and time
* Logout

## Setup
To run this project, follow the following steps:
1. Clone [repository](https://github.com/lizareed5/phase-3-project-maestro)
```
git clone https://github.com/lizareed5/phase-3-project-maestro
```
2. Install packages and run server
```
cd phase-3-project-maestro/backend
```
run bundle install
```
run rake server
```
3. Install packages and start the app
```
npm i && npm start
```

## Domain Model
<img
  src="./components/Maestro Domain Model.png"
  alt="Domain Model"
  title="Domain Model">

### Backend API Points
METHOD | ENDPOINT | DESCRIPTION
------ | ---------| -----------
GET | /home | gets top 5 recipes (by yesses) from the database
GET | /comments/:id | fetches all comments for a particular recipe from the database
GET | /kisses/:id | fetches all kisses (likes) for a particular recipe from the database
GET | /messes/:id | fetches all messes (dislikes) for a particular recipe from the database
POST | /kisses/:id | posts a new kiss (like) to a recipe and updates the database
POST | /messes/:id | posts a new mess (dislike) to a recipe and updates the database
GET | /recipes | fetches all recipes and associated information from database
POST | /recipes | posts a newly created recipe to the recipe database

### Client-Side Routes
ROUTE | DESCRIPTION
---------| -----------
/ | home page + login page
/home | view top recipes
/recipes | view all recipes
/newrecipe | create a new recipe
/profile | view recipes created by user
/mykisses | view recipes liked by the user