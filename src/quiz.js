
window.onload = function () {
    show(0);  // automatically display first question when window load
}

var arr = [-1, -1, -1, -1, -1]; // for storing the options selected for each question

var res = [3, 2, 0, 0, 0]; // storing right answers (0=> ist option, 1=> 2nd option and so on)


function submitform(e) {
    e.preventDefault();  // to prevent default reloading on submitting form
    let name = document.forms["welcome_form"]["username"].value;

    // storing candidate name
    sessionStorage.setItem("user_name_is", name);

    // go to quizquespage 
    location.href = "quizquespage.html";
}

let point = 0; // for denoting the score
let index = 0; // index of a question


// Submit the quiz
function submit() {
    clearInterval(mytime);
    location.href = "quizfinalpage.html"; // going to final page

    //calculating the total points achieved
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == res[i]) {
            point++;
        }
    }
    // store total points
    sessionStorage.setItem("point", point);
}

// for going to next question
function next() {
    index++;
    show(index);

}



function show(index) {

    let ques = document.getElementById("questions");

    ques.innerHTML = `<h2>Q${index + 1}. ${questions[index].question}</h2>
    <ul class = "option_group ">
        <li class="option">${questions[index].options[0]}</li>
        <li class="option">${questions[index].options[1]}</li>
        <li class="option">${questions[index].options[2]}</li>
        <li class="option">${questions[index].options[3]}</li>
    </ul>`;

    // for showing  previously selected option for current question (if any)
    if (arr[index] != -1) {
        option = document.querySelectorAll("li.option");

        for (let j = 0; j < option.length; j++) {
            if (j == arr[index]) {
                option[j].classList.add("active");
            }
        }
    }

    toggleActive();

    if (index == questions.length - 1) { // disable next button if we are at last question
        let ele = document.querySelector(".btn_next").setAttribute("disabled", "disabled");
    }
    else {   // otherwise keep the button enabled
        let ele = document.querySelector(".btn_next").removeAttribute("disabled", "disabled");
    }

    if (index == 0) {  // disable prev button if we are at first question
        let ele = document.querySelector(".btn_prev").setAttribute("disabled", "disabled");
    }
    else {  // otherwise keep the prev button enabled
        let ele = document.querySelector(".btn_prev").removeAttribute("disabled");
    }
}


// for adding onclick event on each option of current question
// and memorizing the option which we select using click
function toggleActive() {

    let option = document.querySelectorAll("li.option");

    //adding onclick event for each option
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {

            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {

                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
            arr[index] = i; // memorizing selected option for a questioin
        }
    }
}


//for going to previous question
function prev() {
    index = index - 1;
    show(index);
}

