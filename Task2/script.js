// Form Validation
const form = document.getElementById("contactForm");

const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  // Empty Field Validation
  if (name === "" || email === "") {
    message.style.color = "red";

    message.innerText = "All fields are required!";

    return;
  }

  // Email Validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(emailPattern)) {
    message.style.color = "red";

    message.innerText = "Enter a valid email address!";

    return;
  }

  message.style.color = "green";

  message.innerText = "Form Submitted Successfully!";
});

// Add Task Function
function addTask() {
  const taskInput = document.getElementById("taskInput");

  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task");

    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
        ${taskText}
        <button onclick="removeTask(this)">Remove</button>
    `;

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

// Remove Task Function
function removeTask(button) {
  button.parentElement.remove();
}
