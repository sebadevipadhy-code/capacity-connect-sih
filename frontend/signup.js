// =========================
// HOME
// =========================

function goHome() {

    window.location.href = "home_page.html";

}



// =========================
// PASSWORD VISIBILITY
// =========================

function togglePassword(inputId, button) {

    const input =
        document.getElementById(inputId);

    const icon =
        button.querySelector("i");


    if (input.type === "password") {

        input.type = "text";

        icon.classList.remove("fa-eye");

        icon.classList.add("fa-eye-slash");

    }

    else {

        input.type = "password";

        icon.classList.remove("fa-eye-slash");

        icon.classList.add("fa-eye");

    }

}



// =========================
// CREATE ACCOUNT
// =========================

function createAccount(event) {

    event.preventDefault();


    const fullName =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const role =
        document.getElementById("role").value;

    const organization =
        document.getElementById("organization").value.trim();

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const terms =
        document.getElementById("terms").checked;



    // =========================
    // VALIDATION
    // =========================

    if (!fullName ||
        !email ||
        !role ||
        !organization ||
        !password ||
        !confirmPassword) {

        alert("Please fill in all required fields.");

        return;

    }


    if (password.length < 8) {

        alert(
            "Password must contain at least 8 characters."
        );

        return;

    }


    if (password !== confirmPassword) {

        alert(
            "Passwords do not match."
        );

        return;

    }


    if (!terms) {

        alert(
            "Please agree to the Terms & Conditions."
        );

        return;

    }



    // =========================
    // ACCOUNT DATA
    // =========================

    const accountData = {

        full_name: fullName,

        email: email,

        role: role,

        organization: organization,

        password: password

    };


    console.log(
        "Signup data:",
        accountData
    );



    // =========================
    // DEMO SUCCESS
    // =========================

    alert(
        "🎉 Account created successfully!\n\n" +
        "Welcome to Capacity Connect."
    );


    // After successful signup
    window.location.href =
        "dashboard.html";

}



// =========================
// GOOGLE SIGNUP
// =========================

function handleGoogleSignup(response) {

    console.log(
        "Google Signup Response:",
        response
    );


    if (
        response &&
        response.credential
    ) {

        alert(
            "🎉 Google account connected successfully!"
        );


        /*
            Later, send response.credential
            to your Python backend for
            real account creation/login.
        */


        console.log(
            "Google credential received."
        );


        window.location.href =
            "dashboard.html";

    }

    else {

        alert(
            "Google signup failed."
        );

    }

}



// =========================
// LOGIN FROM SIGNUP
// =========================

function openLoginFromSignup(event) {

    event.preventDefault();

    /*
        Because your login is currently
        a popup inside home_page.html,
        we return to the home page first.
    */

    window.location.href =
        "home_page.html";

}