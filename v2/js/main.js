$(function () {
    loadRoutes();

    $("#closebtn").click(() => {
        closeNav();
    });
    $("#openbtn").click(() => {
        openNav();
    });
});

function loadRoutes() {
    $("#inicio").load('pages/inicio.html');
    $("#servicios").load('pages/servicios.html');
    $("#contacto").load('pages/contacto.html');
    $("#nosotros").load('pages/nosotros.html');
}

function router(route) {
    $('html, body').animate({
        scrollTop: $(`#${route}`).offset().top
    }, 2000);
}

/**
 * Extraído de https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
 * 
 * Modificado por Stiven Muñoz Murillo
 */
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("dimmer").style.display = "none";
}
function openNav() {
    document.getElementById("sidebar").style.width = "300px";
    document.getElementById("dimmer").style.display = "block";
}
