/* ************************************************* */
/*    THIS FILE IS FOR DEMONSTRATION PUPROSE ONLY    */
/*  YOU CAN DELETE IT AFTER TEST-RUN WAS SUCCESSFUL  */
/* ************************************************* */

import $ from 'jquery';

export default () => {
  let $container = $('.container');
  let $headline = $('<h2 class=test-headline></h2>');

  $(function () {
    $headline.text('Welcome to Fundamentum!');
    $container.append($headline);
  });
};