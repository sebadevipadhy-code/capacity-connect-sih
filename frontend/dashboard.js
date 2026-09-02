/* =====================================================
   CAPACITY CONNECT
   LEARNER DASHBOARD JAVASCRIPT
===================================================== */


/* =====================================================
   SECTION NAVIGATION
===================================================== */

function showSection(sectionId, clickedItem) {

    const sections =
        document.querySelectorAll(".page-section");

    sections.forEach(function(section) {

        section.classList.remove("active-section");

    });


    const selected =
        document.getElementById(sectionId);

    if (selected) {

        selected.classList.add("active-section");

    }


    /* Remove active from sidebar */

    const menuItems =
        document.querySelectorAll(".menu-item");

    menuItems.forEach(function(item) {

        item.classList.remove("active");

    });


    /* Add active to clicked menu */

    if (clickedItem) {

        clickedItem.classList.add("active");

    }


    /* Scroll to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    /* Close mobile sidebar */

    const sidebar =
        document.getElementById("sidebar");

    if (sidebar) {

        sidebar.classList.remove("show");

    }

}



/* =====================================================
   PROFILE
   THIS FIXES THE PROFILE BUTTON
===================================================== */

function openProfile(clickedItem) {

    /* Open profile section */

    showSection("profile", clickedItem);


    /* Update profile information */

    loadProfile();

}



/* =====================================================
   LOAD PROFILE
===================================================== */

function loadProfile() {

    let name =
        localStorage.getItem("learnerName");

    let email =
        localStorage.getItem("learnerEmail");


    if (!name) {

        name = "Welcome Learner";

    }


    if (!email) {

        email = "learner@capacityconnect.com";

    }


    const profileName =
        document.getElementById("profileName");

    const displayName =
        document.getElementById("displayName");

    const displayEmail =
        document.getElementById("displayEmail");

    const topProfileName =
        document.getElementById("topProfileName");


    if (profileName) {

        profileName.textContent = name;

    }


    if (displayName) {

        displayName.textContent = name;

    }


    if (displayEmail) {

        displayEmail.textContent = email;

    }


    if (topProfileName) {

        topProfileName.textContent = name;

    }

}



/* =====================================================
   EDIT PROFILE
===================================================== */

function editProfile() {

    const modal =
        document.getElementById("profileModal");

    const editName =
        document.getElementById("editName");

    const editEmail =
        document.getElementById("editEmail");


    let name =
        localStorage.getItem("learnerName");

    let email =
        localStorage.getItem("learnerEmail");


    if (!name) {

        name = "Welcome Learner";

    }


    if (!email) {

        email = "learner@capacityconnect.com";

    }


    editName.value = name;

    editEmail.value = email;


    modal.classList.add("show");

}



/* =====================================================
   CLOSE PROFILE MODAL
===================================================== */

function closeProfileModal() {

    const modal =
        document.getElementById("profileModal");

    if (modal) {

        modal.classList.remove("show");

    }

}



/* =====================================================
   SAVE PROFILE
===================================================== */

function saveProfile(event) {

    event.preventDefault();


    const name =
        document.getElementById("editName").value.trim();

    const email =
        document.getElementById("editEmail").value.trim();


    if (name === "" || email === "") {

        alert("Please complete all profile fields.");

        return;

    }


    /* Save locally */

    localStorage.setItem(
        "learnerName",
        name
    );


    localStorage.setItem(
        "learnerEmail",
        email
    );


    /* Update screen */

    loadProfile();


    /* Close modal */

    closeProfileModal();


    alert(
        "Profile updated successfully!"
    );

}



/* =====================================================
   BACK TO HOME
===================================================== */

function goHome() {

    window.location.href =
        "home_page.html";

}



/* =====================================================
   CONTINUE COURSE
===================================================== */

function continueCourse(courseName) {

    if (!courseName) {

        courseName = "your selected course";

    }


    alert(
        "Opening course:\n\n" +
        courseName +
        "\n\nCourse player will be connected here."
    );

}



/* =====================================================
   ENROLL COURSE
===================================================== */

function enrollCourse(courseName) {

    alert(
        "🎉 Enrollment successful!\n\n" +
        "You have enrolled in:\n" +
        courseName
    );

}



/* =====================================================
   START ASSESSMENT
===================================================== */

function startAssessment(assessmentName) {

    alert(
        "Assessment:\n\n" +
        assessmentName +
        "\n\nThe assessment page will open here."
    );

}



/* =====================================================
   VIEW CERTIFICATE
===================================================== */

function viewCertificate(courseName) {

    alert(
        "Certificate\n\n" +
        courseName +
        "\n\nCertificate viewer will be connected here."
    );

}



/* =====================================================
   KNOWLEDGE HUB RESOURCE
===================================================== */

function openResource(resourceName) {

    alert(
        "Knowledge Hub\n\n" +
        resourceName +
        "\n\nResource page will open here."
    );

}



/* =====================================================
   NOTIFICATION
===================================================== */

function showNotification() {

    alert(
        "You have 3 new learning notifications!\n\n" +

        "• New course recommendation\n" +

        "• Assessment available\n" +

        "• New resource added to Knowledge Hub"
    );

}



/* =====================================================
   MOBILE SIDEBAR
===================================================== */

function toggleSidebar() {

    const sidebar =
        document.getElementById("sidebar");


    if (sidebar) {

        sidebar.classList.toggle("show");

    }

}



/* =====================================================
   SEARCH
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        const searchInput =
            document.getElementById("searchInput");


        if (searchInput) {

            searchInput.addEventListener(
                "keyup",
                function() {

                    const value =
                        this.value.trim().toLowerCase();


                    if (value === "") {

                        return;

                    }


                    console.log(
                        "Searching Capacity Connect for:",
                        value
                    );

                }
            );

        }


        /* Load saved profile */

        loadProfile();


    }
);



/* =====================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("profileModal");


        if (!modal) {

            return;

        }


        if (
            event.target === modal
        ) {

            closeProfileModal();

        }

    }
);



/* =====================================================
   ESC KEY CLOSES PROFILE MODAL
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProfileModal();

        }

    }
);