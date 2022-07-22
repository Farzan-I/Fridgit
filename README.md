<div align="center">

# Brains On Brioche (B.O.B)

[![Contributors](https://img.shields.io/badge/-Contributors-brightgreen)](#contributors) | 
[![Project description](https://img.shields.io/badge/-Project%20description-ff69b4)](#project-description) | 
[![Demo](https://img.shields.io/badge/-Demo-inactive)](#demo) | 
[![Technologies used](https://img.shields.io/badge/-Technologies%20used-yellow)](#technologies-used) | 
[![How to run locally](https://img.shields.io/badge/-How%20to%20run%20locally-blue)](#how-to-run-locally) | 
[![Card wall](https://img.shields.io/badge/-Card%20wall-orange)](#card-wall) | 
[![Team approach](https://img.shields.io/badge/-Team%20approach-informational)](#team-approach) <br>
[![User stories](https://img.shields.io/badge/-User%20stories-green)](#user-stories) | 
[![Further User Stories](https://img.shields.io/badge/-Further%20User%20Stories-blueviolet)](#further-user-stories) | 
[![Minimum Viable Product](https://img.shields.io/badge/-%20Minimum%20Viable%20Product-lightgrey)](#minimum-viable-product-mvp) | 
[![Wireframes](https://img.shields.io/badge/-Wireframes-important)](#wireframes) | 
[![Edge cases](https://img.shields.io/badge/-Edge%20cases-brown)](#edge-cases) | 
[![Future improvements](https://img.shields.io/badge/-Future%20Improvements-skyblue)](#future-improvements)

</div>

## Contributors:
- [Alexandros Papagiannis](https://github.com/Alexandros91)
- [Archie Martin](https://github.com/archiemartini)
- [Farzan Imanzadeh](https://github.com/Farzan-I)
- [Jimmy Lyons](https://github.com/jimmy-lyons)
- [Stevie Spiegl](https://github.com/S-Spiegl)

## Project description
Welcome to Brains On Brioche (B.O.B), the food web application we built as our final group project of the Makers Academy bootcamp during weeks 11 and 12. We designed and developed a web app where a user can enter some ingredients at their disposal and get access to a wide range of meal recipes that they can prepare using their instructions.

As a team, we thought an app like this would be useful for many different reasons. Food waste is real and it results in a financial burden for everyone. This is where B.O.B comes to the rescue. If frequently used, it can help minimise food waste significantly as it encourages you to use the ingredients at your disposal. From salmon and marmite to pork and peanut butter, we got it covered. For those who want to cook their food themselves, whether they're on a specific diet such as low FODMAP, gluten free or anything in between, B.O.B provides the basis for anyone seeking to make the most of their fridge leftovers and create something that brings restaurant quality food to their dinner table.

We managed to implement into our web app an external API from [Spoonacular](https://spoonacular.com/food-api) that contains thousands of recipes from many different cuisines, so the user can find recipes even with ingredients that at first glance may look like they could not be combined. Even users who can actually cook, by using this web app, they can find many alternative options and prepare meals that they didn't even know existed from all around the world, thus having a nice break from their usual meals and adding much more variety to their diet.

We've also implemented another feature of our app that the user can sign up and have their own 'fridge' which contains all the ingredients they have. This way they can enter the ingredients they have in their fridge, without having to interact with the search bar everytime. Their ingredients get saved in our database and make it a lot more convenient for the user as they can log out and come back to their pre-made 'fridge'!

In conclusion, we are extremely happy with our effort in building this app and the features we managed to include. In total, we had a great time, of course with our highs and lows, while working on this and we are very pleased with our final product. We hope the users of our app will find it equally useful and fun to use. We are more than open to hear your opinion and any constructive crisicism that would improve our program even further. 

## Demo
### Home page
![home](client/public/1-home-page.png)
### Non-signed up/in user recipe search (1/2)
![search-1](client/public/search-1.png)
### Non-signed up/in user recipe search (2/2 - showing the instructions on the left)
![search-2](client/public/search-2.png)
### New user (Lucy) trying to log in without valid email
![sign-in](client/public/bcrypt-sign-up.png)
### New user (Lucy) has logged in (with correct details)
![sign-in](client/public/lucy-logged-in.png)
### Lucy has stocked up her fridge and storeds in database
![fridge-contents](client/public/lucy-fridge.png)
### Lucy searches for recipes using the fridge contents
![fridge-search](client/public/lucy-fridge-recipe.png)
### Lucy searches for recipes using more than the fridge contents
![fridge-extend](client/public/lucy-fridge-recipe-extend.png)
### About us / Contact us footer dropdown(up) menus
![contact-about](client/public/contact-about.png)


## Technologies Used
- [Axios](https://axios-http.com/) - promise based HTTP client for the browser and node.js.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - styling of the webpages.
- [Cypress](https://www.cypress.io/) - for end-to-end testing.
- [ESLint](https://eslint.org) - for linting of the code.
- [Express](https://expressjs.com/) - web framework for Node.js.
- [Jest](https://jestjs.io/) - for testing of the code.
- [MongoDB](https://www.mongodb.com/) - for our database needs.
- [Mongoose](https://mongoosejs.com) - to model objects in MongoDB.
- [Nodemon](https://nodemon.io/) - to reload the server automatically.
- [React](https://reactjs.org/) - to build user interfaces.
- [Redux](https://redux.js.org/) - to help with consistency across client, server, and native environments and make testing easier.

## How to run locally

### Set up
1. Fork this repository (optional)
2. Clone your fork (or this repo) to your local machine
3. Navigate to the project directory in command line/terminal and run `npm install`
4. Navigate to the server folder in a separate terminal using `cd server` and run `npm install`
5. In another terminal, navigate to the client folder using `cd client` and run `npm install`
6. With two terminals open (one in the server folder and the other in the client folder), run `npm start` in both, first in the server then in the client
7. This starts the server connection (app to database, app to the API) and automatically opens the website to `localhost:3000`
8. Create an account (if you want to store your fridge contents for later use) and start typing in the ingredients you want recipes for, one at a time please
9. Click on the recipe you find most intriguing and maybe even adjust the search to show more adventurous recipes!

#### Cypress Testing
* To install Cypress enter the `npm install cypress --save-dev` command.
* To open Cypress enter `npx cypress open`.

#### Configuration
* If you run into any problems when using `npm install` to install dependencies, the following commands can be used to overcome the setbacks in case the node modules
do not install properly:
```
npm config set legacy-peer-deps true
```
```
npm install --save --legacy-peer-deps
```

## Card wall
We used a [Trello](https://trello.com/b/b9m4qtRa/brainsonbrioche) board to keep track of the features we want to implement. We organised tickets amongst the team and moved the tickets accordingly to demonstrate at what stage that feature's at (To do/In progress/In review etc.).

![Trello](client/public/Trello-board.png)

### Diagramming
#### JavaScript sequence Diagram
![JS Diagram](client/public/JS-sequence-diagram.png)
#### Early Sequence Diagram
![Early Sequence Diagram](client/public/sequence-2.jpg)
#### Final Sequence Diagram
![Final Sequence Diagram](client/public/sequence-diagram.png)

## Team approach
* Standups every morning at 10:00
* Retro at 5:30 every evening
* Pair programming throughout the whole project
* Use of mobbing to ensure every member understands the code and eliminate blockers
* Regular check-ins with team members to make sure nobody was left behind
* Trello board for distributing work and staying on track

## User stories
```
As a user,
So that I can create a meal from the items in my fridge,
I would like to be able to search for recipes by typing in my ingredients to a search bar.
```
```
As a user, 
So that I can make a complete meal, 
I want to see recipes which only contain the ingredients I have entered.
```
```
As a user,
So that I can cook a recipe that I've searched for,
I would like to see the steps of the recipe.
```
```
As a user,
So that I can have all the ingredients I need for the recipe,
I would like to see a list of the ingredients I am missing.
```
```
As a user,
So that I don't have to enter ingredients everytime,
I would like to have a fridge that saves all my available ingredients.
```

## Further User Stories
```
As a user,
So that I can save all of my progress,
I want to be able to create an account and store my ingredients.
```
```
As a user,
So that no one can access my ingredients,
I'd like to be able to sign out.
```
```
As a user,
So that I know what the company is about,
I'd like to access more information about the company in an about us section.
```
```
As a user,
So that I can contact the company with feedback,
I'd like to see a contact us page with the company's details.
```
## Minimum Viable Product (MVP)
<details>
<summary> Search bar on the home page 🍽</summary>

* User can see a search bar 🔎
* User can type an ingredient one by one 🧀
* User gets recipes given back with their selected ingredients 🍝
</details>

<br>

## Wireframes
### Figma wireframe (early development)
![Wireframe 1](client/public/figma-wire.png)
### Board wireframe (late development)
![Wireframe 2](client/public/wireframe.jpg)

## Edge cases
* Sign up with invalid input
* Ingredients don't get saved if the user is not signed up/signed in
* Clicking on a certain recipe, it shows only the recipe's information (ingredients, measurements and instructions)

## Future improvements
* When a user arrives, they can't see the log out button
* When the user signs in, they can only see the log out button, not create account or sign in options
* User can filter recipes to 

Aside from the practicalities, there is the fun aspect of the app too, thanks to the mystery-meal function. By choosing a mystery meal, the app provides the user with a random meal (of course according to their available ingredients) so they can consume a surprise meal that wasn't their option, or in some cases, might not even know what it is, or how it tastes, making the whole process a lot more fun and unpredictable.

## The brains behind the brioche
###
![Team B.o.B](client/public/team.jpg)
