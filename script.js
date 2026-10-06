function showAIMessage() {

    const message = document.getElementById("ai-message");

    message.innerText =
        "Portfolio AI is coming soon! It will answer questions about my skills, projects and experience.";

}


function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    event.target.reset();

}