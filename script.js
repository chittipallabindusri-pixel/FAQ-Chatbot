function sendMessage() {

    let input = document.getElementById("user-input");
    let question = input.value.toLowerCase().trim();
    let chatBox = document.getElementById("chat-box");

    if (question === "") {
        alert("Please enter a question!");
        return;
    }

    chatBox.innerHTML +=
        `<div class="user-message">${input.value}</div>`;

    let answer = "";

    if (question.includes("hello") || question.includes("hi")) {
        answer = "Hello! Welcome to our FAQ Chatbot.";
    }
    else if (question.includes("name")) {
        answer = "I am an FAQ Chatbot.";
    }
    else if (question.includes("help")) {
        answer = "Sure! I am here to help you.";
    }
    else if (question.includes("college")) {
        answer = "Our college provides education and learning opportunities.";
    }
    else if (question.includes("course")) {
        answer = "We offer different courses for students.";
    }
    else if (question.includes("thank")) {
        answer = "You're welcome!";
    }
    else if (question.includes("bye")) {
        answer = "Goodbye! Have a nice day.";
    }
    else {
        answer = "Sorry, I don't understand your question. Please try another question.";
    }

    chatBox.innerHTML +=
        `<div class="bot-message">${answer}</div>`;

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}