document.addEventListener("DOMContentLoaded", function () {

    const results = JSON.parse(
        localStorage.getItem("beautyQuizResults")
    );


    if (!results) {

        alert("No quiz results found.");
        window.location.href = "quiz.html";
        return;

    }


    function get(id){

        const element = document.getElementById(id);

        return element ? element : null;

    }


    function setText(id,text){

        const element = get(id);

        if(element){

            element.textContent = text;

        }

    }


    function addList(id,items){

        const element = get(id);

        if(!element) return;


        element.innerHTML="";


        items.forEach(function(item){

            let li=document.createElement("li");

            li.textContent=item;

            element.appendChild(li);

        });

    }



    let concerns = results.concerns || [];


    /*
    ==========================
    BEAUTY PROFILE
    ==========================
    */


    let skinProfile="Balanced Skin";



    if(results.q2==="Hydration" ||
       results.q6==="Dry"){

        skinProfile="Hydration-Focused Skin";

    }


    if(results.q2==="Acne" ||
       results.q8==="Frequently"){

        skinProfile="Clarifying Acne-Prone Skin";

    }


    if(results.q9==="Very Sensitive" ||
       concerns.includes("Sensitive")){

        skinProfile="Sensitive Skin";

    }


    if(results.q2==="Anti Aging" ||
       concerns.includes("Wrinkles") ||
       concerns.includes("Firmness")){

        skinProfile="Age Support Skin";

    }


    if(results.q2==="Brightening" ||
       concerns.includes("Dark Spots") ||
       concerns.includes("Dull Skin")){

        skinProfile="Brightening Skin";

    }



    setText(
        "skinProfile",
        skinProfile
    );


    setText(
        "age",
        results.q1
    );


    setText(
        "goal",
        results.q2
    );


    setText(
        "texture",
        results.q6
    );


    setText(
        "sensitivity",
        results.q9
    );


    setText(
        "climate",
        results.q13
    );


    setText(
        "budget",
        results.q14
    );


    /*
    ==========================
    SKIN CONCERNS
    ==========================
    */


    addList(
        "concerns",
        concerns.length ?
        concerns :
        ["No major concerns selected"]
    );


    /*
    ==========================
    MORNING ROUTINE
    ==========================
    */


    let morning=[

        "Gentle cleanser",

        "Treatment serum",

        "Moisturizer",

        "Broad spectrum SPF 30+ sunscreen"

    ];



    if(results.q2==="Acne"){

        morning=[

            "Oil-control cleanser",

            "Niacinamide serum",

            "Light moisturizer",

            "Non-comedogenic sunscreen"

        ];

    }



    if(results.q2==="Hydration"){

        morning=[

            "Hydrating cleanser",

            "Hyaluronic acid serum",

            "Ceramide moisturizer",

            "Hydrating sunscreen"

        ];

    }



    if(results.q2==="Brightening"){

        morning=[

            "Gentle cleanser",

            "Vitamin C serum",

            "Brightening moisturizer",

            "SPF 50 sunscreen"

        ];

    }



    if(results.q9==="Very Sensitive"){

        morning=[

            "Fragrance-free cleanser",

            "Soothing serum",

            "Barrier repair moisturizer",

            "Mineral sunscreen"

        ];

    }



    addList(
        "morningRoutine",
        morning
    );




    /*
    ==========================
    NIGHT ROUTINE
    ==========================
    */


    let night=[

        "Remove makeup and sunscreen",

        "Gentle cleanser",

        "Treatment serum",

        "Night moisturizer"

    ];



    if(results.q16==="Advanced"){

        night.push(
            "Weekly treatment mask"
        );

    }


    if(results.q2==="Anti Aging"){

        night.push(
            "Retinol treatment 2-3 nights weekly"
        );

    }


    if(results.q2==="Acne"){

        night.push(
            "Salicylic acid treatment"
        );

    }


    addList(
        "nightRoutine",
        night
    );

    /*
    ==========================
    INGREDIENT RECOMMENDATIONS
    ==========================
    */


    let ingredients = [];


    if(results.q2 === "Hydration"){

        ingredients.push(
            "Hyaluronic Acid",
            "Ceramides",
            "Glycerin",
            "Squalane"
        );

    }


    if(results.q2 === "Acne"){

        ingredients.push(
            "Salicylic Acid",
            "Niacinamide",
            "Benzoyl Peroxide",
            "Zinc"
        );

    }


    if(results.q2 === "Anti Aging"){

        ingredients.push(
            "Retinol",
            "Peptides",
            "Vitamin C",
            "Collagen-supporting ingredients"
        );

    }


    if(results.q2 === "Brightening"){

        ingredients.push(
            "Vitamin C",
            "Niacinamide",
            "Alpha Arbutin",
            "Licorice Root"
        );

    }


    if(results.q2 === "Healthy Skin"){

        ingredients.push(
            "Ceramides",
            "Antioxidants",
            "Niacinamide",
            "Panthenol"
        );

    }



    if(results.q6 === "Dry"){

        ingredients.push(
            "Shea Butter",
            "Oils",
            "Barrier repairing ingredients"
        );

    }


    if(results.q6 === "Rough" ||
       results.q6 === "Uneven"){

        ingredients.push(
            "Lactic Acid",
            "Glycolic Acid",
            "Gentle exfoliating ingredients"
        );

    }



    if(results.q9 === "Very Sensitive"){

        ingredients.push(
            "Aloe Vera",
            "Centella Asiatica",
            "Oat Extract"
        );

    }



    ingredients = [...new Set(ingredients)];



    addList(
        "ingredients",
        ingredients
    );





    /*
    ==========================
    INGREDIENTS TO LIMIT
    ==========================
    */


    let avoid=[];



    if(results.q9==="Very Sensitive" ||
       results.q19==="Sensitive" ||
       results.q22==="Sensitive Skin"){

        avoid.push(

            "Strong fragrance",
            "Harsh exfoliants",
            "Drying alcohols"

        );

    }


    if(results.q5==="AHA BHA" ||
       results.q12==="Several Times"){

        avoid.push(

            "Over exfoliating",
            "Using too many active ingredients together"

        );

    }


    if(results.q8==="Frequently"){

        avoid.push(

            "Heavy pore-clogging products"

        );

    }



    if(avoid.length===0){

        avoid.push(

            "Products that do not match your skin needs",
            "Skipping sunscreen"

        );

    }



    addList(
        "avoid",
        avoid
    );


    /*
    ==========================
    EXFOLIATION PLAN
    ==========================
    */


    let exfoliation="";


    if(results.q5==="Weekly"){

        exfoliation =
        "Use a gentle exfoliant once weekly.";

    }


    if(results.q5==="Hydrating"){

        exfoliation =
        "Focus on gentle hydration and exfoliate 1-2 times weekly.";

    }


    if(results.q5==="BHA"){

        exfoliation =
        "BHA exfoliation may help with pores and breakouts 2-3 times weekly.";

    }


    if(results.q5==="AHA BHA"){

        exfoliation =
        "Alternate AHAs and BHAs carefully to avoid irritation.";

    }



    setText(
        "exfoliation",
        exfoliation
    );

    /*
    ==========================
    FRAGRANCE PROFILE
    ==========================
    */


    let fragrance="";


    if(results.q18==="Scented"){

        fragrance =
        "You enjoy scented skincare. Floral, fruity, and relaxing scents may fit your preferences.";

    }


    if(results.q18==="Light Scent"){

        fragrance =
        "Light natural scents are recommended.";

    }


    if(results.q18==="Fragrance Free"){

        fragrance =
        "Fragrance-free skincare is the best match for your preferences.";

    }



    if(results.q19==="Sensitive" ||
       results.q19==="Only Fragrance Free"){

        fragrance =
        "Your skin may benefit from fragrance-free products.";

    }



    setText(
        "fragrance",
        fragrance
    );

    /*
    ==========================
    PRODUCT RECOMMENDATIONS
    ==========================
    */


    let products=[];



    if(results.q14==="Under25"){

        products.push(

            "Affordable gentle cleanser",
            "Drugstore moisturizer",
            "Budget-friendly SPF"

        );

    }



    if(results.q14==="25-50"){

        products.push(

            "Quality cleanser",
            "Targeted treatment serum",
            "Daily moisturizer",
            "SPF protection"

        );

    }



    if(results.q14==="50-100" ||
       results.q14==="100+"){

        products.push(

            "Advanced treatment serum",
            "Premium moisturizer",
            "Specialized skincare treatments"

        );

    }



    if(results.q11==="Often"){

        products.push(

            "Makeup remover",
            "Double cleansing routine"

        );

    }



    if(results.q15==="Bodycare"){

        products.push(

            "Body exfoliating scrub",
            "Hydrating body cream"

        );

    }



    addList(
        "products",
        products
    );


    /*
    ==========================
    CLIMATE ADVICE
    ==========================
    */


    let climateAdvice=[];



    if(results.q13==="Hot Humid"){

        climateAdvice=[

            "Choose lightweight moisturizers",
            "Use non-greasy sunscreen",
            "Look for oil-control ingredients"

        ];

    }



    if(results.q13==="Hot Dry"){

        climateAdvice=[

            "Use richer moisturizers",
            "Add hydration layers",
            "Protect skin barrier"

        ];

    }



    if(results.q13==="Cold"){

        climateAdvice=[

            "Use thick barrier creams",
            "Avoid over cleansing",
            "Protect dry areas"

        ];

    }



    if(results.q13==="Moderate"){

        climateAdvice=[

            "Maintain balanced hydration",
            "Continue daily SPF"

        ];

    }



    addList(
        "climate",
        climateAdvice
    );

    /*
    ==========================
    BODY CARE RECOMMENDATIONS
    ==========================
    */


    let bodyCare = [];


    if(results.q25 === "2-3 Weekly"){

        bodyCare.push(
            "Use a body scrub 2-3 times weekly",
            "Follow exfoliation with body cream"
        );

    }


    if(results.q25 === "Weekly"){

        bodyCare.push(
            "Use a gentle body scrub once weekly",
            "Apply moisturizer after showering"
        );

    }


    if(results.q25 === "Occasionally"){

        bodyCare.push(
            "Exfoliate when skin feels rough",
            "Focus on elbows, knees, and heels"
        );

    }


    if(results.q25 === "Never"){

        bodyCare.push(
            "Start with a gentle body exfoliation once weekly",
            "Avoid harsh scrubbing"
        );

    }




    if(results.q26 === "Soft Skin"){

        bodyCare.push(
            "Sugar scrub",
            "Moisturizing body butter"
        );

    }


    if(results.q26 === "Dry Skin"){

        bodyCare.push(
            "Hydrating body scrub",
            "Rich cream with shea butter or oils"
        );

    }


    if(results.q26 === "Rough Areas"){

        bodyCare.push(
            "Deep exfoliating scrub",
            "Extra moisturizer for elbows and heels"
        );

    }


    if(results.q26 === "Texture"){

        bodyCare.push(
            "Gentle chemical exfoliation",
            "Smoothing body lotion"
        );

    }



    if(results.q30 === "Rich Cream" ||
       results.q32 === "Deep Moisture"){

        bodyCare.push(
            "Thick body cream for overnight moisture"
        );

    }



    if(results.q30 === "Light Lotion" ||
       results.q32 === "Light"){

        bodyCare.push(
            "Lightweight lotion for daily use"
        );

    }



    if(results.q30 === "Calming" ||
       results.q32 === "Sensitive"){

        bodyCare.push(
            "Soothing body cream with calming ingredients"
        );

    }



    if(results.q30 === "No Fragrance" ||
       results.q32 === "Fragrance Free"){

        bodyCare.push(
            "Fragrance-free body moisturizer"
        );

    }



    if(results.q35 === "Butters"){

        bodyCare.push(
            "Shea butter and cocoa butter formulas"
        );

    }


    if(results.q35 === "Hydration"){

        bodyCare.push(
            "Hyaluronic acid and glycerin formulas"
        );

    }


    if(results.q35 === "Aloe"){

        bodyCare.push(
            "Aloe vera soothing formulas"
        );

    }



    if(results.q35 === "Fragrance Free"){

        bodyCare.push(
            "Simple fragrance-free ingredients"
        );

    }



    bodyCare = [...new Set(bodyCare)];



    addList(
        "bodycare",
        bodyCare
    );


    /*
    ==========================
    LIFESTYLE TIPS
    ==========================
    */


    let tips=[

        "Wear sunscreen every day",

        "Keep your skin hydrated",

        "Clean makeup brushes regularly",

        "Avoid picking at breakouts"

    ];



    if(results.q10==="Low Water"){

        tips.push(
            "Increase daily water intake"
        );

    }


    if(results.q11==="Often"){

        tips.push(
            "Always remove makeup before sleeping"
        );

    }


    if(results.q7==="Minimal"){

        tips.push(
            "Choose a simple routine you can maintain consistently"
        );

    }


    if(results.q7==="Advanced"){

        tips.push(
            "Introduce new treatments slowly"
        );

    }



    addList(
        "tips",
        tips
    );







    /*
    ==========================
    BEAUTY SCORE
    ==========================
    */


    let score = 75;



    if(results.q2){

        score += 5;

    }


    if(concerns.length >= 3){

        score += 5;

    }


    if(results.q10==="High Water"){

        score += 5;

    }


    if(results.q16==="Balanced" ||
       results.q16==="Advanced"){

        score += 5;

    }


    if(results.q17){

        score += 3;

    }


    if(results.q9==="Very Sensitive"){

        score -= 3;

    }



    if(score > 100){

        score = 100;

    }


    if(score < 0){

        score = 0;

    }




    let scoreBar = document.getElementById(
        "scoreBar"
    );


    if(scoreBar){

        scoreBar.style.width =
            score + "%";

        scoreBar.textContent =
            score + "%";

    }



    setText(
        "scoreText",
        "Your personalized beauty match is " +
        score +
        "%. Keep building healthy skincare habits!"
    );






    /*
    ==========================
    FINAL MESSAGE
    ==========================
    */


    let message =
        "Your assessment shows a " +
        skinProfile +
        " profile. Your routine should focus on " +
        results.q2 +
        " while supporting your personal preferences.";



    setText(
        "finalMessage",
        message
    );



});