// ======================================================
// CAPACITY CONNECT
// ADMIN DASHBOARD
// ======================================================


// ======================================================
// SHOW DASHBOARD SECTION
// ======================================================

function showSection(sectionId, clickedButton) {

    const sections =
        document.querySelectorAll(".dashboard-section");

    sections.forEach(function(section) {

        section.classList.remove("active-section");

    });


    const selectedSection =
        document.getElementById(sectionId);

    if (selectedSection) {

        selectedSection.classList.add("active-section");

    }


    const buttons =
        document.querySelectorAll(".nav-item");

    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    if (clickedButton) {

        clickedButton.classList.add("active");

    }

}


// ======================================================
// GO HOME
// ======================================================

function goHome() {

    window.location.href = "home_page.html";

}


// ======================================================
// APPROVE USER
// ======================================================

function approveUser(button) {

    const row =
        button.closest("tr");

    if (!row) {
        return;
    }


    const status =
        row.querySelector(".status");


    if (status) {

        status.textContent = "Approved";

        status.classList.remove("pending");

        status.classList.add("active");

    }


    button.disabled = true;

    button.textContent = "Approved";


    const rejectButton =
        row.querySelector(".reject-btn");

    if (rejectButton) {

        rejectButton.disabled = true;

    }


    alert("User approved successfully.");

}


// ======================================================
// REJECT USER
// ======================================================

function rejectUser(button) {

    const row =
        button.closest("tr");

    if (!row) {
        return;
    }


    const status =
        row.querySelector(".status");


    if (status) {

        status.textContent = "Rejected";

        status.classList.remove("pending");

        status.style.background = "#fff0f0";

        status.style.color = "#dc2626";

    }


    button.disabled = true;

    button.textContent = "Rejected";


    const approveButton =
        row.querySelector(".approve-btn");

    if (approveButton) {

        approveButton.disabled = true;

    }


    alert("User registration rejected.");

}


// ======================================================
// SEARCH USERS
// ======================================================

function searchUsers() {

    const input =
        document.getElementById("userSearch");

    const table =
        document.getElementById("userTable");

    if (!input || !table) {
        return;
    }


    const search =
        input.value.toLowerCase();


    const rows =
        table.querySelectorAll("tbody tr");


    rows.forEach(function(row) {

        const text =
            row.textContent.toLowerCase();


        if (text.includes(search)) {

            row.style.display = "";

        }

        else {

            row.style.display = "none";

        }

    });

}


// ======================================================
// SAVE ROLE
// ======================================================

function saveRole(button) {

    const row =
        button.closest("tr");

    if (!row) {
        return;
    }


    const select =
        row.querySelector("select");

    if (!select) {
        return;
    }


    const selectedRole =
        select.value;


    alert(
        "User role updated to: " +
        selectedRole
    );

}


// ======================================================
// SEND ANNOUNCEMENT
// ======================================================

function sendAnnouncement() {

    const title =
        document.getElementById(
            "announcementTitle"
        );

    const message =
        document.getElementById(
            "announcementMessage"
        );

    const audience =
        document.getElementById(
            "announcementAudience"
        );


    if (!title || !message || !audience) {

        return;

    }


    const titleValue =
        title.value.trim();

    const messageValue =
        message.value.trim();

    const audienceValue =
        audience.value;


    if (
        titleValue === "" ||
        messageValue === ""
    ) {

        alert(
            "Please enter both title and message."
        );

        return;

    }


    const announcementList =
        document.getElementById(
            "announcementList"
        );


    const announcement =
        document.createElement("div");

    announcement.className =
        "announcement-item";


    announcement.innerHTML =

        "<strong>" +
        escapeHTML(titleValue) +
        "</strong>" +

        "<p>" +
        escapeHTML(messageValue) +
        "</p>" +

        "<span>Sent to " +
        escapeHTML(audienceValue) +
        "</span>";


    announcementList.prepend(
        announcement
    );


    title.value = "";

    message.value = "";


    alert(
        "Announcement created successfully."
    );

}


// ======================================================
// SECURITY HELPER
// ======================================================

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


// ======================================================
// PAGE LOAD
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "Admin Dashboard loaded successfully."
        );

    }
);