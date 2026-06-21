// =======================================
// BEAUTY CARE ASSESSMENT RESULTS.JS
// PART 1/3
// =======================================


// Get saved quiz answers

const answers = {};

for (let i = 1; i <= 35; i++) {

    answers[`q${i}`] = localStorage.getItem(`q${i}`);

}



// Get checkbox answers from Question 3

const concerns = JSON.parse(localStorage.getItem("concerns")) || [];




// =======================================
// RESULT VARIABLES
// =======================================

let routineTitle = "";

let routineDescription = "";

let routineSteps = [];

let products = [];

let fragranceRecommendation = "";

let bodyRecommendation = "";




// =======================================
// SCORING SYSTEM
// =======================================

let scores = {

    hydration: 0,

    acne: 0,

    sensitive: 0,

    antiAging: 0,

    brightening: 0,

    minimalist: 0,


    // fragrance scores

    scented: 0,

    lightScent: 0,

    fragranceFree: 0,


    // body care scores

    bodyHydration: 0,

    bodyScrub: 0

};





// =======================================
// QUESTION 2
// SKINCARE GOAL
// =======================================

if (answers.q2 === "Hydration") {

    scores.hydration += 5;

}


if (answers.q2 === "Acne") {

    scores.acne += 5;

}


if (answers.q2 === "Anti Aging") {

    scores.antiAging += 5;

}


if (answers.q2 === "Brightening") {

    scores.brightening += 5;

}


if (answers.q2 === "Healthy Skin") {

    scores.minimalist += 3;

}





// =======================================
// QUESTION 3
// SKIN CONCERNS CHECKBOXES
// =======================================

concerns.forEach(concern => {



    if (concern === "Acne") {

        scores.acne += 3;

    }



    if (concern === "Dark Spots") {

        scores.brightening += 3;

    }



    if (concern === "Dull Skin") {

        scores.brightening += 2;

    }



    if (concern === "Wrinkles") {

        scores.antiAging += 3;

    }



    if (concern === "Texture") {

        scores.brightening += 2;

    }



    if (concern === "Under Eye") {

        scores.antiAging += 2;

    }



    if (concern === "Sensitive") {

        scores.sensitive += 5;

    }



    if (concern === "Firmness") {

        scores.antiAging += 3;

    }



    if (concern === "Pores") {

        scores.acne += 2;

    }



});







// =======================================
// QUESTION 4
// PORES
// =======================================


if (answers.q4 === "Large") {

    scores.acne += 2;

}


if (answers.q4 === "Very Large") {

    scores.acne += 3;

}





// =======================================
// QUESTION 5
// EXFOLIATION
// =======================================


if (answers.q5 === "BHA") {

    scores.acne += 2;

}


if (answers.q5 === "AHA BHA") {

    scores.brightening += 2;

}


if (answers.q5 === "Hydrating") {

    scores.hydration += 2;

}





// =======================================
// QUESTION 6
// SKIN TEXTURE
// =======================================


if (answers.q6 === "Smooth") {

    scores.minimalist += 2;

}



if (answers.q6 === "Dry") {

    scores.hydration += 3;

}



if (answers.q6 === "Rough") {

    scores.brightening += 2;

}



if (answers.q6 === "Uneven") {

    scores.brightening += 3;

}







// =======================================
// QUESTION 7
// TIME AVAILABLE
// =======================================


if (answers.q7 === "Minimal") {

    scores.minimalist += 3;

}


if (answers.q7 === "Advanced") {

    scores.antiAging += 2;

}







// =======================================
// QUESTION 8
// BREAKOUTS
// =======================================


if (answers.q8 === "Frequently") {

    scores.acne += 5;

}


if (answers.q8 === "Sometimes") {

    scores.acne += 3;

}


if (answers.q8 === "Rarely") {

    scores.acne += 1;

}







// =======================================
// QUESTION 9
// SENSITIVITY
// =======================================


if (answers.q9 === "Very Sensitive") {

    scores.sensitive += 6;

}


if (answers.q9 === "Slightly Sensitive") {

    scores.sensitive += 3;

}


if (answers.q9 === "Not Sensitive") {

    scores.sensitive += 1;

}







// =======================================
// QUESTION 10
// WATER INTAKE
// =======================================


if (answers.q10 === "Low Water") {

    scores.hydration += 2;

}


if (answers.q10 === "High Water") {

    scores.hydration += 1;

}







// =======================================
// QUESTION 11
// MAKEUP USE
// =======================================


if (answers.q11 === "Often") {

    scores.acne += 2;

}


if (answers.q11 === "Never") {

    scores.minimalist += 1;

}







// =======================================
// QUESTION 12
// EXFOLIATION HABITS
// =======================================


if (answers.q12 === "Never") {

    scores.hydration += 2;

}


if (answers.q12 === "Weekly") {

    scores.brightening += 2;

}


if (answers.q12 === "Several Times") {

    scores.antiAging += 2;

}







// =======================================
// QUESTION 13
// CLIMATE
// =======================================


if (answers.q13 === "Hot Humid") {

    scores.acne += 2;

}


if (answers.q13 === "Hot Dry") {

    scores.hydration += 2;

}


if (answers.q13 === "Cold") {

    scores.hydration += 2;

}


if (answers.q13 === "Moderate") {

    scores.minimalist += 1;

}







// =======================================
// QUESTION 14
// BUDGET
// =======================================


if (answers.q14 === "100+") {

    scores.antiAging += 2;

}


if (answers.q14 === "Under25") {

    scores.minimalist += 2;

}







// =======================================
// QUESTION 15
// PRODUCT INTEREST
// =======================================


if (answers.q15 === "Skincare") {

    scores.hydration += 2;

}


if (answers.q15 === "Self Care") {

    scores.minimalist += 2;

}







// =======================================
// QUESTION 16
// ROUTINE STYLE
// =======================================


if (answers.q16 === "Simple") {

    scores.minimalist += 3;

}


if (answers.q16 === "Balanced") {

    scores.hydration += 2;

}


if (answers.q16 === "Advanced") {

    scores.antiAging += 3;

}







// =======================================
// QUESTION 17
// 3 MONTH GOAL
// =======================================


if (answers.q17 === "Clear Skin") {

    scores.acne += 4;

}


if (answers.q17 === "Brighter Skin") {

    scores.brightening += 4;

}


if (answers.q17 === "Anti Aging") {

    scores.antiAging += 4;

}


if (answers.q17 === "Healthy Glow") {

    scores.hydration += 4;

}

// =======================================
// PART 2/3
// FRAGRANCE + BODY CARE SCORING
// =======================================





// =======================================
// QUESTION 18
// FRAGRANCE PREFERENCE
// =======================================


if (answers.q18 === "Scented") {

    scores.scented += 4;

}


if (answers.q18 === "Light Scent") {

    scores.lightScent += 4;

}


if (answers.q18 === "No Preference") {

    scores.lightScent += 1;

}


if (answers.q18 === "Fragrance Free") {

    scores.fragranceFree += 5;

}







// =======================================
// QUESTION 19
// REACTION TO SCENTED PRODUCTS
// =======================================


if (answers.q19 === "Handles Well") {

    scores.scented += 3;

}


if (answers.q19 === "Sometimes Irritated") {

    scores.fragranceFree += 3;

}


if (answers.q19 === "Sensitive") {

    scores.fragranceFree += 5;

}


if (answers.q19 === "Only Fragrance Free") {

    scores.fragranceFree += 6;

}







// =======================================
// QUESTION 20
// PRODUCT SCENT CHOICE
// =======================================


if (answers.q20 === "Sweet Scents") {

    scores.scented += 4;

}


if (answers.q20 === "Mild Scents") {

    scores.lightScent += 4;

}


if (answers.q20 === "Unscented") {

    scores.fragranceFree += 5;

}


if (answers.q20 === "Fragrance Free") {

    scores.fragranceFree += 6;

}







// =======================================
// QUESTION 21
// WHY CHOOSE SCENTED PRODUCTS
// =======================================


if (answers.q21 === "Relaxing") {

    scores.scented += 3;

}


if (answers.q21 === "Fresh") {

    scores.scented += 3;

}


if (answers.q21 === "Luxury") {

    scores.scented += 3;

}


if (answers.q21 === "No Scent") {

    scores.fragranceFree += 5;

}







// =======================================
// QUESTION 22
// WHY PREFER FRAGRANCE FREE
// =======================================


if (answers.q22 === "Sensitive Skin") {

    scores.fragranceFree += 5;

}


if (answers.q22 === "Irritation") {

    scores.fragranceFree += 5;

}


if (answers.q22 === "Simple Ingredients") {

    scores.fragranceFree += 3;

}


if (answers.q22 === "No Added Scents") {

    scores.fragranceFree += 5;

}







// =======================================
// QUESTION 23
// FAVORITE SCENT TYPE
// =======================================


if (answers.q23 === "Floral") {

    scores.scented += 3;

}


if (answers.q23 === "Woody") {

    scores.scented += 3;

}


if (answers.q23 === "Fresh") {

    scores.lightScent += 3;

}


if (answers.q23 === "Sweet") {

    scores.scented += 4;

}


if (answers.q23 === "Fragrance Free") {

    scores.fragranceFree += 6;

}







// =======================================
// QUESTION 24
// BIGGEST SCENT CONCERN
// =======================================


if (answers.q24 === "Irritation") {

    scores.fragranceFree += 5;

}


if (answers.q24 === "Allergies") {

    scores.fragranceFree += 6;

}


if (answers.q24 === "Strong Smells") {

    scores.lightScent += 3;

}


if (answers.q24 === "No Concerns") {

    scores.scented += 2;

}







// =======================================
// BODY SCRUB QUESTIONS
// Q25 - Q31
// =======================================





// QUESTION 25
// BODY EXFOLIATION FREQUENCY


if (answers.q25 === "2-3 Weekly") {

    scores.bodyScrub += 4;

}


if (answers.q25 === "Weekly") {

    scores.bodyScrub += 3;

}


if (answers.q25 === "Occasionally") {

    scores.bodyHydration += 2;

}


if (answers.q25 === "Never") {

    scores.bodyHydration += 3;

}







// QUESTION 26
// BODY SCRUB GOAL


if (answers.q26 === "Soft Skin") {

    scores.bodyHydration += 3;

}


if (answers.q26 === "Dry Skin") {

    scores.bodyHydration += 5;

}


if (answers.q26 === "Rough Areas") {

    scores.bodyScrub += 5;

}


if (answers.q26 === "Texture") {

    scores.bodyScrub += 4;

}







// QUESTION 27
// BODY SCRUB TYPE


if (answers.q27 === "Sugar") {

    scores.scented += 2;

    scores.bodyScrub += 3;

}


if (answers.q27 === "Gentle") {

    scores.bodyHydration += 3;

}


if (answers.q27 === "Deep") {

    scores.bodyScrub += 5;

}


if (answers.q27 === "Sensitive") {

    scores.fragranceFree += 4;

}







// QUESTION 28
// BODY SCENT CONCERNS


if (answers.q28 === "Irritation") {

    scores.fragranceFree += 4;

}


if (answers.q28 === "Allergies") {

    scores.fragranceFree += 5;

}


if (answers.q28 === "Strong Smell") {

    scores.lightScent += 3;

}


if (answers.q28 === "None") {

    scores.scented += 2;

}







// QUESTION 29
// BODY SCRUB REACTION


if (answers.q29 === "Smooth") {

    scores.bodyScrub += 3;

}


if (answers.q29 === "Dry") {

    scores.bodyHydration += 4;

}


if (answers.q29 === "Irritated") {

    scores.fragranceFree += 4;

}


if (answers.q29 === "Never Used") {

    scores.bodyHydration += 1;

}







// =======================================
// BODY CREAM QUESTIONS
// Q30 - Q35
// =======================================





// QUESTION 30
// BODY CREAM TYPE


if (answers.q30 === "Rich Cream") {

    scores.bodyHydration += 5;

}


if (answers.q30 === "Light Lotion") {

    scores.bodyHydration += 3;

}


if (answers.q30 === "Calming") {

    scores.fragranceFree += 3;

}


if (answers.q30 === "No Fragrance") {

    scores.fragranceFree += 5;

}







// QUESTION 31
// SCRUB TEXTURE


if (answers.q31 === "Deep") {

    scores.bodyScrub += 4;

}


if (answers.q31 === "Gentle") {

    scores.bodyHydration += 3;

}


if (answers.q31 === "Moisturizing") {

    scores.bodyHydration += 4;

}


if (answers.q31 === "None") {

    scores.minimalist += 1;

}







// QUESTION 32
// BODY CREAM PREFERENCE


if (answers.q32 === "Deep Moisture") {

    scores.bodyHydration += 5;

}


if (answers.q32 === "Light") {

    scores.bodyHydration += 2;

}


if (answers.q32 === "Sensitive") {

    scores.fragranceFree += 4;

}


if (answers.q32 === "Fragrance Free") {

    scores.fragranceFree += 5;

}







// QUESTION 33
// WHEN APPLY BODY CREAM


if (answers.q33 === "After Shower") {

    scores.bodyHydration += 3;

}


if (answers.q33 === "Dry Skin") {

    scores.bodyHydration += 4;

}


if (answers.q33 === "Before Bed") {

    scores.scented += 1;

}


if (answers.q33 === "Never") {

    scores.minimalist += 1;

}







// QUESTION 34
// BODY CREAM GOAL


if (answers.q34 === "Hydration") {

    scores.bodyHydration += 5;

}


if (answers.q34 === "Repair") {

    scores.bodyHydration += 4;

}


if (answers.q34 === "Texture") {

    scores.bodyScrub += 3;

}


if (answers.q34 === "Comfort") {

    scores.fragranceFree += 4;

}







// QUESTION 35
// INGREDIENT PREFERENCE


if (answers.q35 === "Butters") {

    scores.bodyHydration += 5;

}


if (answers.q35 === "Hydration") {

    scores.bodyHydration += 5;

}


if (answers.q35 === "Aloe") {

    scores.fragranceFree += 3;

}


if (answers.q35 === "Fragrance Free") {

    scores.fragranceFree += 5;

}

// =======================================
// PART 3/3
// CREATE FINAL RESULTS
// =======================================



// Find highest skincare routine score

let skincareScores = {

    hydration: scores.hydration,

    acne: scores.acne,

    sensitive: scores.sensitive,

    antiAging: scores.antiAging,

    brightening: scores.brightening,

    minimalist: scores.minimalist

};



let highestRoutine = Object.keys(skincareScores).reduce((a,b)=>{

    return skincareScores[a] >= skincareScores[b] ? a : b;

});







// =======================================
// CREATE SKINCARE ROUTINE RESULT
// =======================================


switch(highestRoutine){



case "hydration":


routineTitle = "💧 Hydration Glow Routine";


routineDescription =
"Your answers show that your skin needs moisture, nourishment, and barrier support to maintain a healthy glow.";


routineSteps = [

"1. Gentle hydrating cleanser",

"2. Hyaluronic acid serum",

"3. Ceramide moisturizer",

"4. Hydrating body cream",

"5. Daily SPF"

];


products = [

"Hydrating cleanser",

"Hyaluronic acid serum",

"Ceramide moisturizer",

"Moisturizing body cream"

];


break;





case "acne":


routineTitle = "✨ Clear Skin Routine";


routineDescription =
"Your results focus on reducing breakouts, controlling excess oil, and keeping pores clear.";


routineSteps = [

"1. Gentle cleanser",

"2. Salicylic acid or BHA treatment",

"3. Niacinamide serum",

"4. Lightweight moisturizer",

"5. Daily SPF"

];


products = [

"Salicylic acid cleanser",

"Niacinamide serum",

"Oil-free moisturizer"

];


break;







case "sensitive":


routineTitle = "🌿 Sensitive Skin Routine";


routineDescription =
"Your skin profile suggests choosing calming products that protect your skin barrier and avoid irritation.";


routineSteps = [

"1. Fragrance-free cleanser",

"2. Soothing serum",

"3. Barrier repair moisturizer",

"4. Gentle body cream",

"5. Mineral sunscreen"

];


products = [

"Aloe soothing products",

"Ceramide moisturizer",

"Fragrance-free skincare"

];


break;







case "antiAging":


routineTitle = "💎 Anti-Aging Renewal Routine";


routineDescription =
"Your results show a focus on supporting firmness, smooth texture, and healthy aging.";


routineSteps = [

"1. Gentle cleanser",

"2. Vitamin C serum",

"3. Retinol treatment",

"4. Peptide moisturizer",

"5. Daily SPF"

];


products = [

"Vitamin C serum",

"Retinol cream",

"Peptide moisturizer"

];


break;







case "brightening":


routineTitle = "✨ Brightening Glow Routine";


routineDescription =
"Your skin goals focus on improving radiance, uneven tone, and achieving a brighter complexion.";


routineSteps = [

"1. Brightening cleanser",

"2. Vitamin C serum",

"3. Niacinamide serum",

"4. Moisturizer",

"5. SPF"

];


products = [

"Vitamin C serum",

"Niacinamide serum",

"Brightening moisturizer"

];


break;







default:


routineTitle = "🌸 Minimalist Beauty Routine";


routineDescription =
"Your results suggest a simple routine that maintains balanced and healthy-looking skin.";


routineSteps = [

"1. Gentle cleanser",

"2. Moisturizer",

"3. Daily SPF"

];


products = [

"Simple cleanser",

"Light moisturizer",

"Sunscreen"

];


}







// =======================================
// FRAGRANCE RESULT
// =======================================


if(scores.fragranceFree > scores.scented && 
   scores.fragranceFree > scores.lightScent){


fragranceRecommendation =
"🌿 Fragrance Profile: Your skin preferences suggest fragrance-free products to help avoid possible irritation.";


}



else if(scores.scented > scores.fragranceFree){


fragranceRecommendation =
"🌸 Fragrance Profile: You enjoy scented skincare with floral, fruity, sweet, or relaxing aromas.";


}



else{


fragranceRecommendation =
"✨ Fragrance Profile: You may enjoy lightly scented products with gentle aromas.";


}







// =======================================
// BODY CARE RESULT
// =======================================


if(scores.bodyHydration > scores.bodyScrub){


bodyRecommendation =
"🧴 Body Care Profile: Your results suggest rich moisturizing products that focus on softness and hydration.";


}



else if(scores.bodyScrub > scores.bodyHydration){


bodyRecommendation =
"✨ Body Care Profile: Your results suggest exfoliating products that improve texture and smooth rough areas.";


}



else{


bodyRecommendation =
"🌸 Body Care Profile: A balanced combination of exfoliation and hydration would work well for you.";


}







// =======================================
// DISPLAY RESULTS
// =======================================


document.getElementById("routineTitle").textContent =
routineTitle;



document.getElementById("routineDescription").textContent =
routineDescription;





const stepsList = document.getElementById("routineSteps");


routineSteps.forEach(step=>{


let li = document.createElement("li");


li.textContent = step;


stepsList.appendChild(li);


});





const productList = document.getElementById("products");


products.forEach(product=>{


let li = document.createElement("li");


li.textContent = product;


productList.appendChild(li);


});






// Display fragrance and body results


document.getElementById("fragranceResult").textContent =
fragranceRecommendation;



document.getElementById("bodyResult").textContent =
bodyRecommendation;







// =======================================
// RESTART QUIZ
// =======================================


function restartQuiz(){


localStorage.clear();


window.location.href = "quiz.html";


}