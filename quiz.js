document.addEventListener("DOMContentLoaded", function () {

    const quizForm = document.getElementById("quizForm");


    quizForm.addEventListener("submit", function(event) {

        event.preventDefault();


        let answers = {};


        // Collect radio button answers (q1 - q35)
        for (let i = 1; i <= 35; i++) {

            let questionName = "q" + i;

            let selected = document.querySelector(
                `input[name="${questionName}"]:checked`
            );


            if (selected) {

                answers[questionName] = selected.value;

            }

        }



        // Collect checkbox answers (Question 3 concerns)
        let concerns = [];

        document.querySelectorAll(
            'input[name="concerns"]:checked'
        ).forEach(function(item){

            concerns.push(item.value);

        });


        answers.concerns = concerns;



        // Save results
        localStorage.setItem(
            "beautyQuizResults",
            JSON.stringify(answers)
        );



        // Go to results page
        window.location.href = "results.html";


    });


});