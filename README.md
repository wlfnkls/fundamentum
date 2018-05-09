# FUNDAMENTUM

This repository is a **basic environment** setup for an easy development start. <br />

:warning: **THIS IS UNDER CONSTRUCTION** <br />
_I'm at the very beginning with this repository and features will be added frequently._

----

## Requirements

In order to run this repository, you need _node.js_ and _npm_. <br />
To check if you are good to go, just run `node --v` and `npm --v`. In case you need it, head over to [node.js](https://nodejs.org/en/) and follow the instructions relating to your OS.

## How to use

After cloning this repository, you have to install the dependencies via `npm install`.

To start developing, just run `npm run start`. Your *.js-files and *.scss-files will be watched and _webpack_ builds bundled files for you. <br />
When you open the **index.html**, which you can find in the **dist**-folder, you will see a read headline saying ''Welcome to Fundamentum!', if everything went well so far.

Running `npm run start` starts the following watch-tasks, which you can run separately, too (if you need it...).

For linting the JavaScript, I added _eslint_. You can lint any *.js-file in the **src/js**-folder by running `npm run lint -s`. <br />
You can start a watch-task for eslint by running `npm run watch:lint`.

I added _webpack_ to build your JavaScript and CSS. Just create *.js-files in the **src/js**-folder and import it in the **index.js**. <br />

``` javascript
import test from './test';
test();
```

_Webpack_ compiles CSS from your *.(s)css-files found in the **src/scss**-folder. <br />
You have to import the (S)CSS-source in your *.js-file and _webpack_ bundles a minified CSS-file (_styles.min.css_) dependent on that JavaScript which is exported to the **dist/css**-folder.

``` javascript
import '../scss/test.scss';
```

The exported and minified CSS-file is linked in the **index.html**.

To get rid off the **main.js** created by _webpack_, you can run `npm run clean`. Since it's a better practise to delete it every time you build your JavaScript again, it runs the moment right before the **main.js** is built.
