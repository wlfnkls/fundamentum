# FUNDAMENTUM

This repository is a **basic enviroment** setup for an easy development start. <br />
It comes with _webpack_, _gulp_, _eslint_, _gulp-sass_ and _jquery_ for now.

:warning: THIS IS UNDER CONSTRUCTION <br />
_I'm at the very beginning with this repository and features are added nearly every day._

----

## Requirements

In order to run this repository, you need _node.js_ and the package manager _npm_, which comes with _node.js_. <br />
To check if you are good to go, just run `node --v` and `npm --v`. In case you need it, head over to [node.js](https://nodejs.org/en/) and follow the instructions relating to your OS.

## How to use

After cloning this repository via `git clone https://github.com/wlfnkls/fundamentum.git`, you have to install the dependencies via `npm install`.

For linting the JavaScript, I added _eslint_. You can lint any *.js-file in the **src**-folder by running `npm run lint -s`. <br />
You can start a watch-task for eslint by running `npm run watch:lint`. This task watches any *.js-file in the **src**-folder.

To build CSS from *.scss-files, **FUNDAMENTUM** comes with a task that concats your *.scss-files and exports a minified version to your **dist/css**-folder. Just run `npm run build:css`.
There is a watch-task for this, which you can start by running `npm run watch:scss`. <br />
The minified version is already linked in the index.html which you'll find in the **dist**-folder. <br />
> **HINT:** This watch-task has some problems in case you start it while the **src/scss**-folder is empty! <br />
> For now create a *.scss-file in the **src/scss**-folder and _then_ start the watch-task(s), please.

At this time, I implemented _webpack_ to build your JavaScript. Just create your *.js-file in the **src**-folder and import it in the **index.js**. <br />
To build the **main.js** just run `npm run build-dev` and the **main.js** is created in the **dist**-folder. <br /> 
You got it... there is another watch-task! Run `npm run watch:js` and _webpack_ is triggered everytime you change your JS.

You can run all three watch-tasks parallel by running `npm run start-dev`.

To get rid off the **main.js** created by _webpack_, you can run `npm run clean`. Since it's a better practise to delete it every time you build your JavaScript again, it runs the moment right before the **main.js** is built.