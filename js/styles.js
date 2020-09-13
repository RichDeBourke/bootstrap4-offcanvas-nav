/*
 * Off Canvas
 * --------------------------------------------------
 */

$(document).ready(function () {
    var overlay = document.getElementById("offcanvas-overlay");

    $("[data-toggle='off-canvas']").click(function (event) {
        if (event.currentTarget.getAttribute("aria-expanded") === "false") {
            var tmp;
            event.currentTarget.setAttribute("aria-expanded", true);
            if (document.body.style.transition !== undefined) { // only do for modern browsers
                overlay.classList.add("transition-overlay");
                tmp = overlay.clientWidth; // force layout
                overlay.classList.remove("hide-overlay");
            }
        } else {
            event.currentTarget.setAttribute("aria-expanded", false);
            if (document.body.style.transition !== undefined) {
                overlay.classList.add("transition-overlay");
                overlay.classList.add("hide-overlay");
            }
        }
        $(".off-canvas").toggleClass("off-canvas-active");
        $(".footer").toggleClass("off-canvas-active");
    });

    if (document.body.style.transition !== undefined) {
        overlay.addEventListener("transitionend", function () {
            overlay.classList.remove("transition-overlay");
        }, false);
        overlay.addEventListener("click", function () {
            $("[data-toggle='off-canvas']").click();
        }, false);
    }
});

