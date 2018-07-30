# Would You Rather Project
This is the second practice program  for the assessment project for Udacity's React Redux course. This App could allow user to browse all the questions, to answer questions and to see the results of all the votes and users.

## TL;DR
Start the project:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## URL
http://localhost:3000/   --Would you rather App main page
http://localhost:3000/add -- Create new question page
http://localhost:3000/leaderBoard -- Show the points of each user.
http://localhost:3000/question/:id -- Show the vote form or the result of question of certain id.

## Main Function
 1 Main page:
    1) Once the user logs in, the user should be able to toggle between his/her answered and unanswered polls on the home page.
    2)The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom)
    3)The unanswered questions should be shown by default
    4)The name of the logged in user should be visible on the page
 2 Add New Question
    1) This page should have a form for creating two options.
    2) Upon submitting the form, a new poll should be created, the user should be taken to the home page, and the new polling question should appear in the correct category on the home page.
 3 Question Page
  1) For unanswered polls,the following is shown:
      a. Text “Would You Rather”;
      b. Avatar of the user who posted the polling question; and
      c. Two options.
  2) For answered polls, , each of the two options contains the following:
      a.  Text of the option;
      b.  Number of people who voted for that option; and
      c.  Percentage of people who voted for that option.
 4 Leader Board
  1)Each entry on the leaderboard should contain the following:
     a. User’s name;
     b. User’s picture;
     c. Number of questions the user asked; and
     d. Number of questions the user answered
  2) Users should be ordered in descending order based on the sum of the number of questions they’ve asked and the number of questions they’ve answered
## Backend Server

 The provided file [`api.js`](src/util/api.js) contains the methods you will need to perform necessary operations on the backend:

* [`getQuestions`](#getQuestions)
* [`getUsers`](#getUsers)
* [`saveQuestion`](#saveQuestion)
* [`saveQuestionAnswer`](#saveQuestionAnswer)

### `getQuestions`

Method Signature:

```js
getQuestions()
```

* Returns a Promise which resolves to a JSON object containing a collection of Question objects.
* This collection represents all the questions currently created in the app.

### `getUsers`

Method Signature:

```js
getUsers()
```

* Returns a Promise which resolves to a JSON object containing a collection of user objects.
* This collection represents all the users currently created in the app.
### `saveQuestion`

Method Signature:

```js
saveQuestion(question)
```

* question: `<Object>`
* Returns a Promise which resolves to a JSON object containing two collections of question and user objects.
* Both users and questions list should be updated.

### `saveQuestionAnswer`

Method Signature:

```js
saveQuestionAnswer(answer)
```

* answer: `<Object>`
* Returns a Promise which resolves to a JSON object containing two collections of question and user objects.
* Both users and questions list should be updated.


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

The original _DATA.js is created by udacity. Other files are created by Lei He.
Images and icons are from internet.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
