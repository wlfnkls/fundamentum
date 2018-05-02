/* ************************************************* */
/*    THIS FILE IS FOR DEMONSTRATION PUPROSE ONLY    */
/*  YOU CAN DELETE IT AFTER TEST-RUN WAS SUCCESSFUL  */
/* ************************************************* */

import $ from 'jquery';

let $container = $('.container');
let $headline = $('<h2 class=headline></h2>');

$(function () {
  $headline.text('Welcome to Fundamentum!');
  $container.append($headline);
});