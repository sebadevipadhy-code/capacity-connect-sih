// =========================
// SEARCH HELP
// =========================

function searchHelp() {

    const searchInput =
        document.getElementById("searchInput");

    const query =
        searchInput.value.trim();


    if (query === "") {

        alert("Please enter what you need help with.");

        return;

    }


    alert(
        "Searching the Capacity Connect Help Center for:\n\n" +
        query
    );

}



// =========================
// HELP CATEGORY
// =========================

function showHelp(category) {

    alert(
        "You selected:\n\n" +
        category +
        "\n\nDetailed support for this category will be available here."
    );

}



// =========================
// FAQ
// =========================

function toggleFAQ(button) {

    const faqItem =
        button.parentElement;


    faqItem.classList.toggle("active");

}



// =========================
// OPEN SUPPORT FORM
// =========================

function openSupport() {

    const form =
        document.getElementById("supportForm");


    form.style.display = "block";


    form.scrollIntoView({
        behavior: "smooth"
    });

}



// =========================
// CLOSE SUPPORT FORM
// =========================

function closeSupport() {

    const form =
        document.getElementById("supportForm");


    form.style.display = "none";

}



// =========================
// SUBMIT SUPPORT REQUEST
// =========================

function submitSupport(event) {

    event.preventDefault();


    alert(
        "Your support request has been submitted successfully!\n\n" +
        "Our support team will review your request."
    );


    event.target.reset();

}