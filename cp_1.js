// Get form and input elements
const form = document.getElementById("feedbackForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const feedbackInput = document.getElementById("feedback");
const charCount = document.getElementById("char-count");
const feedbackDisplay = document.getElementById("submittedFeedback");

// Get all tooltips and inputs
const tooltips = document.querySelectorAll(".tooltip");
const inputs = document.querySelectorAll("input, textarea");

// Show/hide tooltips on mouseover/mouseout
inputs.forEach((input, index) => {
    input.addEventListener("mouseover", () => {
        tooltips[index].style.display = "block";
    });
    input.addEventListener("mouseout", () => {
        tooltips[index].style.display = "none";
    });
});

// Handle form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Basic validation
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || feedbackInput.value.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Add feedback entry
    addFeedback();
});

// Function to add feedback to display
function addFeedback() {
    const entry = document.createElement("div");
    entry.textContent = `Name: ${nameInput.value}, Email: ${emailInput.value}, Feedback: ${feedbackInput.value}`;
    feedbackDisplay.appendChild(entry);

    // Clear form
    form.reset();
    charCount.textContent = "0 / 200 characters";
}