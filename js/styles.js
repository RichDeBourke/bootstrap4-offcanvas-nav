/*
 * Off Canvas
 * --------------------------------------------------
 */

$(document).ready(function () {
  $('[data-toggle="off-canvas"]').click(function () {
    $('.off-canvas').toggleClass('off-canvas-active');
    $('.footer').toggleClass('off-canvas-active');
  });
});
