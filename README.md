![Our Planet](src/images/branding/Our-Planet-Wordmark-Small.png)

# Our Planet
> A study in React, Redux, and Node.js centered around the well being of endangered animals across the globe

Our Planet is a web application built as part of the curriculum at Turing School of Software & Design. The project incorporates both a back-end database and a front-end user interface. [The back-end repository](https://github.com/HartiganHM/our-planet-be) was built using Node.js and Knex, while the front-end was constructed primarily through React and Redux. All styling was done through Sass and the testing suite runs through Enzyme and Jest.

For the subject matter of representing endangered animals, during research, it was evident that most information available online about endangered animals was well represented, but tucked away and hidden. Our Planet makes use of a wealth of stunning photos in order to resonate with users in a more immediate way. It is our hope that you walk away with a greater awareness of the impact we have, as humans, to the other species that call this planet home.

## Installing / Getting started

To get the project running on your machine, clone the repository down. Once complete run:

```shell
npm install
```

This will give you all of the primary dependencies you need to run the application. The repository makes use of `node-sass-chokidar`, a CSS style watcher that is friendly with `create-react-app`. Though all of the stylesheets are `.scss`, the `.js` files themselves look for a `.css`. To prepare for this, run:

```shell
npm run build-css
```

This will allow `node-sass-chokidar` to build the `.css` files that all of the `.js` require when running. 

You should now be ready to start the application! Run the following command to boot it up:

```shell
npm start
```

This script has been built to not only start your application (default to `localhost:3000`), but will watch your CSS for any style changes, as well as run a linter to warn you of any potential errors in your code. These warns will show up in the terminal from which you ran the above mentioned command.

## Developing

### Built With
React, Redux, Sass, Enzyme, Jest, React Router

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone git@github.com:HartiganHM/our-planet.git
cd our-planet/
npm install
```

As mentioned above, this will get the project installed on your machine. Before you start, however, you must build all of the necessary `.css` files with the following comand:

```shell
npm run build-css
```

The project is now ready to be built upon in the development environment.

## Tests

The testing suite runs through Enzyme and Jest. To run the testing suite, enter the following command:

```shell
npm test
```

Any new tests will populate in the terminal. If no changes have been made to any of the tests since the last commit, you will have the following options:

* `a`: Run all tests
* `p`: Filter tests by file name
* `t`: Filter tests by test name
* `q`: Quit watch mode

The testing suite is comprhenzive in scope, checking all `.js` files, including Redux architecture, React conditional rendering, helper functions, and API calls.

## Style guide

The styling of this project uses Sass with an independent style sheet for any component or container. The `styles/` directory holds all mixins and variables which reference reused styling methods for specific content sections, as well as the overarching color palette for the project.

An initial wireframe was also created for Our Plant prior to the project being built. This set the ground work for an over-arching design concept as well as intial UI/UX structure.

[Our Planet UI/UX Wireframe](https://xd.adobe.com/view/a017c691-0ff2-4b78-979a-b5e5e64187b7)

## Api Reference and Database

The API calls used in this project references the [Our Planet BE Database](https://github.com/HartiganHM/our-planet-be) using two `GET` calls for the `animals` and `continents` endpoints. For more information about the this database, please reference the above repo.
