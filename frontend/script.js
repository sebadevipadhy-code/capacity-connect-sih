// ======================================================
// CAPACITY CONNECT
// LOGIN + GOOGLE LOGIN + FORGOT PASSWORD + SIGNUP
// ======================================================


// ======================================================
// OPEN LOGIN
// ======================================================

function openLogin() {

    const loginBox =
        document.getElementById("loginBox");

    if (!loginBox) {
        return;
    }

    loginBox.classList.add("show");

    // Always show normal login when opening
    showLoginContent();
}


// ======================================================
// CLOSE LOGIN
// ======================================================

function closeLogin() {

    const loginBox =
        document.getElementById("loginBox");

    if (!loginBox) {
        return;
    }

    loginBox.classList.remove("show");

    // Reset to normal login
    setTimeout(function () {

        showLoginContent();

    }, 200);
}


// ======================================================
// SHOW NORMAL LOGIN
// ======================================================

function showLoginContent() {

    const loginContent =
        document.getElementById("loginContent");

    const forgotContent =
        document.getElementById("forgotPasswordContent");


    if (loginContent) {

        loginContent.style.display = "block";

    }


    if (forgotContent) {

        forgotContent.style.display = "none";

        forgotContent.classList.remove("active");

    }

}


// ======================================================
// OPEN FORGOT PASSWORD
// ======================================================

function openForgotPassword() {

    const loginContent =
        document.getElementById("loginContent");

    const forgotContent =
        document.getElementById("forgotPasswordContent");


    if (!loginContent || !forgotContent) {
        return;
    }


    loginContent.style.display = "none";

    forgotContent.style.display = "block";

    forgotContent.classList.add("active");


    // Clear previous email

    const resetEmail =
        document.getElementById("resetEmail");


    if (resetEmail) {

        resetEmail.value = "";

        setTimeout(function () {

            resetEmail.focus();

        }, 100);

    }

}


// ======================================================
// BACK TO LOGIN
// ======================================================

function backToLogin() {

    showLoginContent();

}


// ======================================================
// NORMAL LOGIN
// ======================================================

function loginUser(event) {

    event.preventDefault();


    const email =
        document.getElementById("loginEmail");

    const password =
        document.getElementById("loginPassword");


    if (!email || !password) {
        return;
    }


    if (
        email.value.trim() === "" ||
        password.value.trim() === ""
    ) {

        alert("Please enter your email and password.");

        return;

    }


    alert(
        "Login successful! Welcome to Capacity Connect."
    );


    closeLogin();

}


// ======================================================
// FORGOT PASSWORD / RESET
// ======================================================

function resetPassword(event) {

    event.preventDefault();


    const resetEmail =
        document.getElementById("resetEmail");


    if (!resetEmail) {
        return;
    }


    const email =
        resetEmail.value.trim();


    if (email === "") {

        alert(
            "Please enter your email address."
        );

        return;

    }


    alert(
        "Password reset request submitted for:\n\n" +
        email +
        "\n\nFor a real application, your backend must send the reset email."
    );


    // Return to login

    showLoginContent();

}


// ======================================================
// GOOGLE LOGIN
// ======================================================

function handleGoogleLogin(response) {

    console.log(
        "Google Login Response:",
        response
    );


    if (
        response &&
        response.credential
    ) {

        /*
            Google has successfully returned
            an ID credential.

            For production:
            Send this credential to your backend
            and verify it there.
        */


        console.log(
            "Google credential received successfully."
        );


        alert(
            "Google Login successful!"
        );


        closeLogin();

    }

    else {

        alert(
            "Google Login failed. Please try again."
        );

    }

}


// ======================================================
// SIGNUP
// ======================================================

function openSignup() {

    /*
        Make sure signup.html is in the
        same folder as home_page.html.
    */

    window.location.href = "signup.html";

}


// ======================================================
// SIGNUP FROM LOGIN BOX
// ======================================================

function goToSignup() {

    window.location.href = "signup.html";

}


// ======================================================
// GOOGLE INITIALIZATION CHECK
// ======================================================

window.addEventListener(
    "load",
    function () {

        console.log(
            "Capacity Connect loaded successfully."
        );

    }
);


// ======================================================
// CLOSE LOGIN WHEN CLICKING OUTSIDE
// ======================================================

document.addEventListener(
    "click",
    function (event) {

        const loginBox =
            document.getElementById("loginBox");


        const loginButton =
            document.querySelector(".login-switch");


        if (
            !loginBox ||
            !loginButton
        ) {

            return;

        }


        if (
            loginBox.classList.contains("show") &&
            !loginBox.contains(event.target) &&
            !loginButton.contains(event.target)
        ) {

            closeLogin();

        }

    }
);


// ======================================================
// HOME
// ======================================================

function goHome() {

    window.location.href =
        "home_page.html";

}


// ======================================================
// ABOUT
// ======================================================

function goAbout() {

    window.location.href =
        "about_page.html";

}


// ======================================================
// FEATURES
// ======================================================

function goFeatures() {

    window.location.href =
        "features_page.html";

}


// ======================================================
// GET STARTED
// ======================================================

function getStarted() {

    window.location.href = "role-selection.html";

}


// ======================================================
// LEARN MORE
// ======================================================

function learnMore() {

    window.location.href =
        "learn-more.html";

}


// ======================================================
// SMOOTH SCROLL
// ======================================================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth"

                    });

                }

            }
        );

    });