// Get saved answer from quiz
const routine = localStorage.getItem("routine");

// Default result
let resultText = "";

// Decide result
if (routine === "minimalist") {
    resultText =
    "Minimalist Routine 🌿\n\n" +
    "Best for sensitive skin and beginners.\n" +
    "Recommended:\n" +
    "- Gentle cleanser\n" +
    "- Lightweight moisturizer\n" +
    "- Daily SPF";
}

else if (routine === "comprehensive") {
    resultText =
    "Comprehensive Routine ✨\n\n" +
    "Best for acne, dark spots, and anti-aging.\n" +
    "Recommended:\n" +
    "- Cleanser\n" +
    "- Toner\n" +
    "- Vitamin C serum\n" +
    "- Moisturizer\n" +
    "- SPF";
}

else if (routine === "holistic") {
    resultText =
    "Holistic Routine 🍃\n\n" +
    "Focus on balance and natural glow.\n" +
    "Recommended:\n" +
    "- Hydrating cleanser\n" +
    "- Facial oil\n" +
    "- Water + sleep habits\n" +
    "- Daily sunscreen";
}

// Optional extra result
else if (routine === "custom") {
    resultText =
    "Custom Routine 💖\n\n" +
    "Mix products based on your skin needs.";
}

else {
    resultText =
    "No result found. Please retake the quiz.";
}

// Show result
document.addEventListener("DOMContentLoaded", function () {

const result =
document.getElementById("result-text");

if (result) {
    result.textContent = resultText;
}

});