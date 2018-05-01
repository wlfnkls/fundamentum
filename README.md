# FUNDAMENTUM

This repository is a **basic enviroment** setup for an easy development start. <br />
It comes with _jquery_, _eslint_ and _webpack_ for now.

:warning: THIS IS UNDER CONSTRUCTION

----

## Requirement

In order to run this repository you need _node.js_ and the packet manager _npm_ which comes with _node.js_. <br />
To check if you are already ready to go, just run `node --v` and `npm --v`. In case you need it, head over to [node.js](https://nodejs.org/en/) and follow the instructions relating to your OS.

--- 

## How to use

After cloning this repository via `git clone https://github.com/wlfnkls/fundamentum.git` you have to install the dependencies via `npm install`.

At this time, I implemented _webpack_ to build your JavaScript. Just create your *.js-file in the **src**-folder and import it in the **index.js**. <br />
To build the **main.js** just run `npm run build-dev` and the **main.js** is created in the **dist**-folder.

For linting the JavaScript, I added _eslint_. You can lint any *.js-file in the **src**-folder by running `npm run lint -s`.