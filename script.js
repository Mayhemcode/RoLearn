
function filterProjects(category) {
    var projects = document.getElementsByClassName("project-card");

    for (var i = 0; i < projects.length; i++) {
        if (category == "all" || projects[i].classList.contains(category)) {
            projects[i].style.display = "block";
        } else {
            projects[i].style.display = "none";
        }
    }
}

function sendMessage(event) {
    event.preventDefault();

    document.getElementById("message").innerHTML =
        "Thank you! Your message has been received.";
}
