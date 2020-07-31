$(function () {
    if (localStorage.getItem("juraecuador.com") == null) {
        storageRoute("inicio");
    }

    loadRoute();

    $("#closebtn").click(() => {
        closeNav();
    });

    $("#openbtn").click(() => {
        openNav();
    })

});

function router(route) {
    storageRoute(route);
    loadRoute();
}

function loadRoute() {
    closeNav();
    history.pushState(null, null, localStorage.getItem("juraecuador.com/route"));
    $("#router").load(localStorage.getItem("juraecuador.com"));
}

function storageRoute(route) {
    localStorage.setItem("juraecuador.com", `/pages/${route}.html`);
    localStorage.setItem("juraecuador.com/route", route);
}

/**
 * Extraído de https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
 * 
 * Modificado por Stiven Muñoz Murillo
 */

/* Set the width of the sidebar to 350px and the left margin of the page content to 350px */
function openNav() {
    document.getElementById("sidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
