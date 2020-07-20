/*
 * Off Canvas
 * --------------------------------------------------
 */

$(document).ready(function () {
  $('[data-toggle="off-canvas"]').click(function () {
    if (event.currentTarget.getAttribute("aria-expanded") === "false") {
      event.currentTarget.setAttribute("aria-expanded", true);
    } else {
      event.currentTarget.setAttribute("aria-expanded", false);
    }
    $('.off-canvas').toggleClass('off-canvas-active');
    $('.footer').toggleClass('off-canvas-active');
  });
});
