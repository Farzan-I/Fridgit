# Brains On Brioche

| [Contributors](#contributors) | [Project description](#project-description) | [Production](#production) | [Demo](#demo) | [Technologies used](#technologies-used) | [How to run locally](#how-to-run-locally) | [Card wall](#card-wall) | [Team approach](#team-approach) | [User stories](#user-stories) | [Further User Stories](#further-user-stories) | [Minimum Viable Product](#minimum-viable-product-mvp) | [Wireframes](#wireframes) | [Edge cases](#edge-cases) | [Future improvements](#future-improvements) |

## Contributors:
- [Alexandros Papagiannis](https://github.com/Alexandros91)
- [Archie Martin](https://github.com/archiemartini)
- [Farzan Imanzadeh](https://github.com/Farzan-I)
- [Jimmy Lyons](https://github.com/jimmy-lyons)
- [Stevie Spiegl](https://github.com/S-Spiegl)

## Project description
Final group project of the Makers Academy bootcamp during weeks 11 and 12, we designed and implemented a ...

## Production

## Demo
### Home page
![home](public/images/_____.png)

## Technologies Used
- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [React](https://reactjs.org/) to build user interfaces.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) for styling of the webpages.

## How to run locally

### Set up
#### Client
* To initialise an empty react application `npx create-react-app ./` in the client directory
* `npm install axios moment react-file-base64 redux redux-thunk` (in order of being installed: to make api requests, a library to work with time and date, to convert images, asynchronous actions using redux)

#### Server
* `npm init -y` to initialise an empty package.json file
* `npm install body-parser cors express mongoose nodemon` to install all necessary dependencies (in order of being installed: enable app to send recipe requests, enable cross origin requests, framework of the application, create models for the recipes, to have the browser reload everytime a change is made)

## Card wall
We used a [Trello](https://trello.com/b/b9m4qtRa/brainsonbrioche) board to keep track of the features we want to implement. We organised tickets amongst the team and moved the tickets accordingly to demonstrate at what stage that feature's at (To do/In progress/In review etc.).

## Team approach
* Standups every morning at 10:00
* Retro at 5:30 every evening
* Pair programming throughout the whole project
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

## Further User Stories

## Minimum Viable Product (MVP)

## Wireframes
![Wireframe 1](public/images/_____.png)

## Edge cases

## Future improvements

