// ======================================================
// CAPACITY CONNECT
// TRAINER DASHBOARD JAVASCRIPT
// ======================================================


// ======================================================
// PAGE LOAD
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "Trainer dashboard loaded successfully."
    );

    loadProfile();

    loadVideos();

    loadMaterials();

    loadQuestions();

    updateCounts();

});


// ======================================================
// SECTION NAVIGATION
// ======================================================

function showSection(sectionId, clickedButton) {


    const sections =
        document.querySelectorAll(".dashboard-section");


    sections.forEach(function (section) {

        section.classList.remove("active-section");

    });


    const selectedSection =
        document.getElementById(sectionId);


    if (selectedSection) {

        selectedSection.classList.add("active-section");

    }


    const navButtons =
        document.querySelectorAll(".nav-item");


    navButtons.forEach(function (button) {

        button.classList.remove("active");

    });


    if (clickedButton) {

        clickedButton.classList.add("active");

    }


    updatePageTitle(sectionId);

}


// ======================================================
// QUICK ACTION NAVIGATION
// ======================================================

function openSectionFromAction(sectionId) {


    const navButton =
        document.querySelector(
            `.nav-item[onclick*="'${sectionId}'"]`
        );


    showSection(
        sectionId,
        navButton
    );

}


// ======================================================
// PAGE TITLES
// ======================================================

function updatePageTitle(sectionId) {


    const pageTitle =
        document.getElementById("pageTitle");


    const pageSubtitle =
        document.getElementById("pageSubtitle");


    const titles = {

        overview: [
            "Trainer Dashboard",
            "Manage your learning activities and learners."
        ],

        profile: [
            "Trainer Profile",
            "Manage your trainer information."
        ],

        videos: [
            "Video Lectures",
            "Create and manage your video lectures."
        ],

        materials: [
            "Learning Material",
            "Upload and manage learning resources."
        ],

        questions: [
            "Questions / MCQs",
            "Create assessments for learners."
        ],

        performance: [
            "Learner Performance",
            "Monitor learner progress and results."
        ]

    };


    if (titles[sectionId]) {

        pageTitle.textContent =
            titles[sectionId][0];

        pageSubtitle.textContent =
            titles[sectionId][1];

    }

}


// ======================================================
// PROFILE
// ======================================================

function saveProfile(event) {

    event.preventDefault();


    const name =
        document.getElementById("trainerName").value.trim();


    const email =
        document.getElementById("trainerEmail").value.trim();


    const specialization =
        document.getElementById("trainerSpecialization").value.trim();


    const experience =
        document.getElementById("trainerExperience").value.trim();


    const profile = {

        name: name,

        email: email,

        specialization: specialization,

        experience: experience

    };


    localStorage.setItem(
        "capacityTrainerProfile",
        JSON.stringify(profile)
    );


    updateProfileDisplay();


    alert(
        "Trainer profile saved successfully!"
    );

}


// ======================================================
// LOAD PROFILE
// ======================================================

function loadProfile() {

    const savedProfile =
        localStorage.getItem(
            "capacityTrainerProfile"
        );


    if (!savedProfile) {

        return;

    }


    try {

        const profile =
            JSON.parse(savedProfile);


        document.getElementById("trainerName").value =
            profile.name || "";


        document.getElementById("trainerEmail").value =
            profile.email || "";


        document.getElementById("trainerSpecialization").value =
            profile.specialization || "";


        document.getElementById("trainerExperience").value =
            profile.experience || "";


        updateProfileDisplay();


    } catch (error) {

        console.error(
            "Could not load trainer profile.",
            error
        );

    }

}


// ======================================================
// UPDATE PROFILE DISPLAY
// ======================================================

function updateProfileDisplay() {


    const savedProfile =
        localStorage.getItem(
            "capacityTrainerProfile"
        );


    if (!savedProfile) {

        return;

    }


    try {

        const profile =
            JSON.parse(savedProfile);


        const name =
            profile.name || "Trainer";


        document.getElementById(
            "profileName"
        ).textContent = name;


        document.getElementById(
            "topTrainerName"
        ).textContent = name;


    } catch (error) {

        console.error(error);

    }

}


// ======================================================
// VIDEO LECTURES
// ======================================================

function addVideo(event) {

    event.preventDefault();


    const title =
        document.getElementById(
            "videoTitle"
        ).value.trim();


    const url =
        document.getElementById(
            "videoUrl"
        ).value.trim();


    if (!title || !url) {

        alert(
            "Please enter the lecture title and video URL."
        );

        return;

    }


    const videos =
        JSON.parse(
            localStorage.getItem(
                "trainerVideos"
            ) || "[]"
        );


    videos.push({

        id: Date.now(),

        title: title,

        url: url

    });


    localStorage.setItem(
        "trainerVideos",
        JSON.stringify(videos)
    );


    document.getElementById(
        "videoForm"
    ).reset();


    loadVideos();

    updateCounts();


    alert(
        "Video lecture added successfully!"
    );

}


// ======================================================
// LOAD VIDEOS
// ======================================================

function loadVideos() {


    const list =
        document.getElementById(
            "videoList"
        );


    if (!list) {

        return;

    }


    const videos =
        JSON.parse(
            localStorage.getItem(
                "trainerVideos"
            ) || "[]"
        );


    list.innerHTML = "";


    if (videos.length === 0) {

        list.innerHTML =
            "<p class='empty-message'>No video lectures added yet.</p>";

        return;

    }


    videos.forEach(function (video) {


        const item =
            document.createElement("div");


        item.className = "item";


        item.innerHTML = `

            <div class="item-info">

                <div class="item-icon">

                    <i class="fa-solid fa-video"></i>

                </div>

                <div>

                    <strong>${escapeHTML(video.title)}</strong>

                    <span>Video Lecture</span>

                </div>

            </div>

            <a
                class="item-link"
                href="${escapeAttribute(video.url)}"
                target="_blank"
                rel="noopener noreferrer">

                Watch Video

            </a>

        `;


        list.appendChild(item);

    });

}


// ======================================================
// LEARNING MATERIAL
// ======================================================

function addMaterial(event) {

    event.preventDefault();


    const title =
        document.getElementById(
            "materialTitle"
        ).value.trim();


    const fileInput =
        document.getElementById(
            "materialFile"
        );


    if (!title || !fileInput.files.length) {

        alert(
            "Please enter a material title and select a file."
        );

        return;

    }


    const file =
        fileInput.files[0];


    const materials =
        JSON.parse(
            localStorage.getItem(
                "trainerMaterials"
            ) || "[]"
        );


    /*
        This demo stores the file name only.

        A real application should upload
        the actual file to a backend/server.
    */


    materials.push({

        id: Date.now(),

        title: title,

        fileName: file.name,

        fileSize: file.size

    });


    localStorage.setItem(
        "trainerMaterials",
        JSON.stringify(materials)
    );


    document.getElementById(
        "materialForm"
    ).reset();


    loadMaterials();

    updateCounts();


    alert(
        "Learning material added successfully!"
    );

}


// ======================================================
// LOAD MATERIALS
// ======================================================

function loadMaterials() {


    const list =
        document.getElementById(
            "materialList"
        );


    if (!list) {

        return;

    }


    const materials =
        JSON.parse(
            localStorage.getItem(
                "trainerMaterials"
            ) || "[]"
        );


    list.innerHTML = "";


    if (materials.length === 0) {

        list.innerHTML =
            "<p class='empty-message'>No learning materials uploaded yet.</p>";

        return;

    }


    materials.forEach(function (material) {


        const item =
            document.createElement("div");


        item.className = "item";


        item.innerHTML = `

            <div class="item-info">

                <div class="item-icon">

                    <i class="fa-solid fa-file-lines"></i>

                </div>

                <div>

                    <strong>
                        ${escapeHTML(material.title)}
                    </strong>

                    <span>
                        ${escapeHTML(material.fileName)}
                    </span>

                </div>

            </div>

            <span class="item-link">
                Added
            </span>

        `;


        list.appendChild(item);

    });

}


// ======================================================
// CREATE MCQ
// ======================================================

function addQuestion(event) {

    event.preventDefault();


    const question =
        document.getElementById(
            "questionText"
        ).value.trim();


    const optionA =
        document.getElementById(
            "optionA"
        ).value.trim();


    const optionB =
        document.getElementById(
            "optionB"
        ).value.trim();


    const optionC =
        document.getElementById(
            "optionC"
        ).value.trim();


    const optionD =
        document.getElementById(
            "optionD"
        ).value.trim();


    const correct =
        document.getElementById(
            "correctAnswer"
        ).value;


    if (
        !question ||
        !optionA ||
        !optionB ||
        !optionC ||
        !optionD ||
        !correct
    ) {

        alert(
            "Please complete all question fields."
        );

        return;

    }


    const questions =
        JSON.parse(
            localStorage.getItem(
                "trainerQuestions"
            ) || "[]"
        );


    questions.push({

        id: Date.now(),

        question: question,

        options: {

            A: optionA,

            B: optionB,

            C: optionC,

            D: optionD

        },

        correct: correct

    });


    localStorage.setItem(
        "trainerQuestions",
        JSON.stringify(questions)
    );


    document.getElementById(
        "questionForm"
    ).reset();


    loadQuestions();

    updateCounts();


    alert(
        "Question created successfully!"
    );

}


// ======================================================
// LOAD QUESTIONS
// ======================================================

function loadQuestions() {


    const list =
        document.getElementById(
            "questionList"
        );


    if (!list) {

        return;

    }


    const questions =
        JSON.parse(
            localStorage.getItem(
                "trainerQuestions"
            ) || "[]"
        );


    list.innerHTML = "";


    if (questions.length === 0) {

        list.innerHTML =
            "<p class='empty-message'>No questions created yet.</p>";

        return;

    }


    questions.forEach(function (question, index) {


        const item =
            document.createElement("div");


        item.className = "item";


        item.innerHTML = `

            <div class="item-info">

                <div class="item-icon">

                    <i class="fa-solid fa-circle-question"></i>

                </div>

                <div>

                    <strong>
                        Q${index + 1}. ${escapeHTML(question.question)}
                    </strong>

                    <span>
                        Correct answer: Option ${escapeHTML(question.correct)}
                    </span>

                </div>

            </div>

        `;


        list.appendChild(item);

    });

}


// ======================================================
// UPDATE COUNTS
// ======================================================

function updateCounts() {


    const videos =
        JSON.parse(
            localStorage.getItem(
                "trainerVideos"
            ) || "[]"
        );


    const materials =
        JSON.parse(
            localStorage.getItem(
                "trainerMaterials"
            ) || "[]"
        );


    const questions =
        JSON.parse(
            localStorage.getItem(
                "trainerQuestions"
            ) || "[]"
        );


    const videoCount =
        document.getElementById(
            "videoCount"
        );


    const materialCount =
        document.getElementById(
            "materialCount"
        );


    const questionCount =
        document.getElementById(
            "questionCount"
        );


    if (videoCount) {

        videoCount.textContent =
            videos.length;

    }


    if (materialCount) {

        materialCount.textContent =
            materials.length;

    }


    if (questionCount) {

        questionCount.textContent =
            questions.length;

    }

}


// ======================================================
// BACK TO ROLE SELECTION
// ======================================================

function goToRoles() {

    window.location.href =
        "role-selection.html";

}


// ======================================================
// LOGOUT
// ======================================================

function logoutTrainer() {


    const confirmLogout =
        confirm(
            "Are you sure you want to logout?"
        );


    if (!confirmLogout) {

        return;

    }


    window.location.href =
        "home_page.html";

}


// ======================================================
// SECURITY / TEXT HELPERS
// ======================================================

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function escapeAttribute(value) {

    return String(value)
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}