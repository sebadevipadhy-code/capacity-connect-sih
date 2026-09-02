// ======================================================
// CAPACITY CONNECT - ROLE SELECTION
// ======================================================


// GO HOME
function goHome() {
    window.location.href = "home_page.html";
}


// LEARNER
function selectLearner() {
    window.location.href = "dashboard.html";
}


// TRAINER
function selectTrainer() {
    window.location.href = "trainer-dashboard.html";
}


// ADMIN
function selectAdmin() {
    window.location.href = "admin-dashboard.html";
}


// GENERAL ROLE FUNCTION
function selectRole(role) {

    if (role === "learner") {
        window.location.href = "dashboard.html";
    }

    else if (role === "trainer") {
        window.location.href = "trainer-dashboard.html";
    }

    else if (role === "admin") {
        window.location.href = "admin-dashboard.html";
    }

    else {
        alert("Invalid role selected.");
    }
}