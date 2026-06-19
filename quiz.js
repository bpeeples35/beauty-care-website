document.getElementById("quiz-form")
.addEventListener("submit", function(event) {

event.preventDefault();

const selected =
document.querySelector(
'input[name="question1"]:checked'
);

if (selected) {

localStorage.setItem(
"question1",
selected.value
);

window.location.href =
"results.html";

}

});