/* =========================
   GO TO HOME
========================= */

function goHome() {

    window.location.href = "home_page.html";

}


/* =========================
   GO TO ABOUT
========================= */

function goAbout() {

    window.location.href = "about_page.html";

}


/* =========================
   GO TO FEATURES
========================= */

function goFeatures() {

    window.location.href = "features_page.html";

}


/* =========================
   GO TO DASHBOARD
========================= */

function goDashboard() {

    window.location.href = "dashboard.html";

}


/* =========================
   SCROLL TO HOW IT WORKS
========================= */

function scrollToHow() {

    const section =
        document.getElementById("howItWorks");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}