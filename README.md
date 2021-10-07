# Project Title

React App that uses Github API to show all public gists for an username.

## Description

Following features have been added

1. Search: When a user enters a username, it should be able to get a list of all gists by that user.
2. Add to Favourites: User can add gist to favorites section with click of button
3. Remove from Favourites: User can remove gist from favourites section
4. Storing the favourites: User can save the favourite gists to persist for longer duration

## Libraries/Components

- create-react-app: Starter kit to build/create react app.
- bootstrap: For styling and basic layout.
- ant design(antd): React UI library with reusable components like Alerts,Search and Input.
- Api calls: Javascript Promise based Fetch() Api.
- gh-pages: For deploying and hosting react application on github pages.

## Getting Started and Installation Instructions

- First Git clone the repo into your computer

```
git clone https://github.com/pranavdoshi/react-github-gists.git
```

- Open your terminal

```
$ cd react-github-gists
$ npm install
```

- This should install all the dependencies. Once done
- Run

```
$ yarn start
or
$ npm start
```

- to start the server.
- open (http://localhost:3000) in your browser.
- This should open up the Demo App

#### Generating a Production build

```
$ cd react-github-gists
$ npm run build
or
$ yarn build
```

## Live Demo

I have deployed the demo application using github pages.

- Live Demo URL: [https://pranavdoshi.github.io/react-github-gists/](https://pranavdoshi.github.io/react-github-gists/)
