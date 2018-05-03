# FUNDAMENTUM

This repository is a **basic enviroment** setup for an easy development start. <br />
It comes with _jquery_, _eslint_, _node-sass_ and _webpack_ for now.

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

This repository contains _node-sass_ to build CSS from SASS/SCSS-files. The command `npm run build:css` compiles your *.scss-files in the **src/scss**-folder into CSS and exports those to the **dist/css**-folder. <br />
There is a watch-task for this, too. You can start it with `npm run watch:scss`.

At this time, I implemented _webpack_ to build your JavaScript. Just create your *.js-file in the **src**-folder and import it in the **index.js**. <br />
To build the **main.js** just run `npm run build-dev` and the **main.js** is created in the **dist**-folder. <br /> 
You got it... there is another watch-task! Run `npm run watch:js` and _webpack_ is triggered everytime you change your JS.

You can run all three watch-tasks parallel by running `npm run start-dev`.

To get rid off the **main.js** created by _webpack_, you can run `npm run clean`. Since it's a better practise to delete it every time you build your JavaScript again, it runs the moment right before the **main.js** is built.