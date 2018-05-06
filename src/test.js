/* ************************************************* */
/*    THIS FILE IS FOR DEMONSTRATION PUPROSE ONLY    */
/*  YOU CAN DELETE IT AFTER TEST-RUN WAS SUCCESSFUL  */
/* ************************************************* */

import $ from 'jquery';
import './scss/test.scss';

export default () => {
  let $container = $('.container');
  let $headline = $('<h2></h2>');

  $(function () {
    $headline.addClass('test-headline');
    $headline.text('Welcome to Fundamentum!');
    $container.append($headline);
  });
};