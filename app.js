//Cashing the DOM!
let number_of_guesses = document.querySelector("#num-guesses-input");
let number_of_guesses_t = document.querySelector(".num-guesses-label");
let user_guess = document.querySelector("#game-input");
let submit_button = document.querySelector(".submit-btn");
let reset_button = document.querySelector(".reset-btn");
let is_correct = document.querySelector(".correct-text");
let guess_number_text = document.querySelector(".num-guesses");
let end_result = document.querySelector(".end-result");
let game_label = document.querySelector(".game-label");
let min_number = document.querySelector("#min-input");
let max_number = document.querySelector("#max-input");
let big_brain_text = document.querySelector(".bb-text");
let header_text = document.querySelector(".header-text");
let header_text_two = document.querySelector(".header-text-2");
let min_label = document.querySelector(".min-label");
let max_label = document.querySelector(".max-label");
let good_luck = document.querySelector(".good-luck-p");
let header_div = document.querySelector(".header-div");
let header_text_two_pg = document.querySelector(".header-text-2-pg");
let parameters = document.querySelector(".user-parameters");
let bb_hidden = document.querySelector(".bb-hidden-text");
let game_input = document.querySelector("#game-input");
let main_content = document.querySelector(".main-div");
let main_header = document.querySelector(".main-header");
let winning_container = document.querySelector(".winning-div");
let congrats = document.querySelector(".congrats");
let body_element = document.querySelector(".body-el");
let play_again_button = document.querySelector(".play-again");
let winning_text = document.querySelector(".winning-text");
let text_content =
  "Hello! my name is BB, short for Big Brain! Lets play a fun little game. Your goal is to guess the number that I am thinking of. In fact, I will let you choose all the parameters! Just enter your lowest number, your highest number, and the number of guesses that you would like to have.";
let good_luck_text = "Good Luck!";
let header_text_array = [];
let random_number = null;
let min_number_value = null;
let max_number_value = null;
let num_guesses_value = null;
let good_luck_flag = 0;
let input_flag = false;
let first_submit = true;
let input_string = "";
let user_guess_value = null;
let user_guess_flag = 1;
let quick_text_flag = 0;
let delete_timeout = null;
let prompt_timeout = null;
let initial_number_of_guesses = null;
let user_submit_flag = null;
//generates a random number between a min number and a max number
function get_random_int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let rng = Math.floor(Math.random() * (max - min + 1) + min);
  return rng;
}
//This function will hide certain elements from being shown in the UI, until needed later.
function hide_content() {
  game_label.style.display = "none";
  user_guess.style.display = "none";
  reset_button.style.display = "none";
  header_text_two.style.display = "none";
  header_text_two_pg.style.display = "none";
  bb_hidden.style.display = "none";
  winning_container.style.display = "none";
  congrats.style.display = "none";
  play_again_button.style.display = "none";
  winning_text.style.display = "none";
  
}
document.onload = hide_content();

//This function animates the text so it looks like the pc is typing on its own. It needs some work...
function animate_luck_text(str) {
  let text_array = str.split("");
  let n = text_array.length;
  let i = 0;
  function f() {
    good_luck.textContent += text_array[i];
    i++;
    if (
      i < n &&
      (text_array[i - 1] == "!" ||
        text_array[i - 1] == "." ||
        text_array[i - 1] == "?")
    ) {
      setTimeout(f, 300);
    } else if (i < n && text_array[i - 1] == ",") {
      setTimeout(f, 150);
    } else if (i < n) {
      setTimeout(f, 40);
    }
  }
  setTimeout(f, 400);
}
function animate_header_text() {
  header_text_array = text_content.split("");
  let n = header_text_array.length;
  let i = 0;
  function f() {
    header_text.textContent += header_text_array[i];
    i++;
    if (
      i < n &&
      (header_text_array[i - 1] == "!" ||
        header_text_array[i - 1] == "." ||
        header_text_array[i - 1] == "?")
    ) {
      setTimeout(f, 300);
    } else if (i < n && header_text_array[i - 1] == ",") {
      setTimeout(f, 150);
    } else if (i < n) {
      setTimeout(f, 40);
    } else {
      animate_luck_text(good_luck_text);
    }
  }
  f();
}
function animate_text(str) {
  let text_array = str.split("");
  let n = text_array.length;
  let i = 0;
  big_brain_text.textContent = "";
  function f() {
    big_brain_text.textContent += text_array[i];
    i++;
    if (
      i < n &&
      (text_array[i - 1] == "!" ||
        text_array[i - 1] == "." ||
        text_array[i - 1] == "?")
    ) {
      setTimeout(f, 300);
    } else if (i < n && text_array[i - 1] == ",") {
      setTimeout(f, 150);
    } else if (i < n) {
      setTimeout(f, 25);
    }
  }
  f();
}
function animate_text_v2(str) {
  let text_array = str.split("");
  let n = text_array.length;
  let i = 0;
  big_brain_text.textContent = "";
  function f() {
    if (quick_text_flag == 1) {
      let insert_text = `I am thinking of an inclusive number between ${min_number_value} and ${max_number_value}. You will have ${num_guesses_value}  chances to guess correctly!`;
      big_brain_text.textContent = insert_text;
      return;
    }
    big_brain_text.textContent += text_array[i];
    i++;
    if (
      i < n &&
      (text_array[i - 1] == "!" ||
        text_array[i - 1] == "." ||
        text_array[i - 1] == "?")
    ) {
      setTimeout(f, 300);
    } else if (i < n && text_array[i - 1] == ",") {
      setTimeout(f, 150);
    } else if (i < n) {
      setTimeout(f, 45);
    }
  }
  f();
}
function animate_text_v3(str) {
  let text_array = str.split("");
  let n = text_array.length;
  let i = 0;
  let f_flag = 1;
  is_correct.textContent = "";
  function f() {
    is_correct.textContent += text_array[i];
    i++;
    if (
      i < n &&
      (text_array[i - 1] == "!" ||
        text_array[i - 1] == "." ||
        text_array[i - 1] == "?")
    ) {
      setTimeout(f, 300);
    } else if (i < n && text_array[i - 1] == ",") {
      setTimeout(f, 150);
    } else if (i < n) {
      setTimeout(f, 45);
    }
  }
  f();
}
function animate_text_v4(str) {
    let text_array = str.split("");
    let n = text_array.length;
    let i = 0;
    let f_flag = 1;
    guess_number_text.textContent = "";
    function f() {
      guess_number_text.textContent += text_array[i];
      i++;
      if (
        i < n &&
        (text_array[i - 1] == "!" ||
          text_array[i - 1] == "." ||
          text_array[i - 1] == "?")
      ) {
        setTimeout(f, 300);
      } else if (i < n && text_array[i - 1] == ",") {
        setTimeout(f, 150);
      } else if (i < n) {
        setTimeout(f, 45);
      }
    }
    f();
  }
function delete_text() {
  let text_array = "everything looks great!";
  let n = text_array.length;
  let i = n;

  function f() {
    if (quick_text_flag == 1) {
      let insert_text = `I am thinking of an inclusive number between ${min_number_value} and ${max_number_value}. You will have ${num_guesses_value}  chances to guess correctly!`;
      big_brain_text.textContent = insert_text;
      return;
    }
    text_array = text_array.split("");
    text_array[i] = " ";
    text_array = text_array.join("");
    big_brain_text.textContent = text_array;
    i--;
    if (i >= 0) {
      setTimeout(f, 40);
    }
  }
  f();
}
setTimeout(animate_header_text, 1000);
//This function quickly displays the text if the reader wants to skip the animated text
function quick_text() {
  good_luck.style.display = "none";
  header_text.style.display = "none";
  header_text_two.style.display = "block";
  header_text_two_pg.style.display = "block";
}
//This function should cause the text to animate quicker, but it needs work.
function quick_text_v2() {
  if (quick_text_flag == 0) {
    quick_text_flag = 1;
    /*clearTimeout(delete_timeout);
    clearTimeout(prompt_timeout); */
    let insert_text = `I am thinking of an inclusive number between ${min_number_value} and ${max_number_value}. You will have ${num_guesses_value}  chances to guess correctly!`;
    big_brain_text.textContent = insert_text;
  }
}

//Checks to make sure the user has inputted the parameters correctly.
function check_inputs() {
  if (
    min_number.value == "" &&
    max_number.value == "" &&
    number_of_guesses.value == ""
  ) {
    input_flag = true;
    input_string = "ERROR! You are missing ALL of your values!";
    animate_text(input_string);
  } else if (min_number.value == "" && max_number.value == "") {
    input_flag = true;
    input_string =
      " ERROR! You are missing two parameters! Enter a MIN number and a MAX number!";
    animate_text(input_string);
  } else if (min_number.value == "" && number_of_guesses.value == "") {
    min_input_flag = true;
    input_string =
      "ERROR! You are missing two parameters! Enter a MIN number and the NUMBER OF GUESSES!";
    animate_text(input_string);
  } else if (max_number.value == "" && number_of_guesses.value == "") {
    input_flag = true;
    input_string =
      "ERROR! You are missing two parameters! Enter a MAX number and the NUMBER OF GUESSES!";
    animate_text(input_string);
  } else if (min_number.value == "") {
    input_flag = true;
    input_string = "ERROR! Enter a MIN number!";
    animate_text(input_string);
  } else if (max_number.value == "") {
    input_flag = true;
    input_string = "ERROR! Enter a MAX number!";
    animate_text(input_string);
  } else if (number_of_guesses.value == "") {
    input_flag = true;
    input_string = "ERROR! Enter the NUMBER OF GUESSES!";
    animate_text(input_string);
  } else if (min_number_value < 0) {
    input_flag = true;
    input_string = "Error! the MIN number must be GREATER than zero!";
    animate_text(input_string);
  } else if (Number(max_number.value) <= Number(min_number.value)) {
    input_flag = true;
    input_string = "ERROR! The MAX number must be BIGGER than the MIN number!";
    animate_text(input_string);
  } else if (max_number.value - min_number.value <= 1) {
    input_flag = true;
    input_string = "ERROR! The MIN and MAX numbers are too close!";
    animate_text(input_string);
  } else {
    input_flag = false;
    input_string = "everything looks great!";
    big_brain_text.style.fontSize = "2rem";
    animate_text(input_string);
  }
}

//Store the min, max and number of guesses inputted by the user.
function get_min_value() {
  min_number_value = Number(min_number.value);
}
function get_max_value() {
  max_number_value = Number(max_number.value);
}
function get_num_guesses() {
  num_guesses_value = Number(number_of_guesses.value);
  initial_number_of_guesses = num_guesses_value;
}
function get_user_guess() {
  user_guess_value = Number(user_guess.value);
}

//check user guess for the correct input
function check_user_guess() {
  if (user_guess.value == "") {
    user_guess_flag = 1;
    game_label.textContent = "Please Enter a Guess!";
  } else if (user_guess.value < min_number_value) {
    user_guess_flag = 1;
    user_guess.value = "";
    game_label.textContent = "That guess is too low!";
  } else if (user_guess.value > max_number_value) {
    user_guess_flag = 1;
    user_guess.value = "";
    game_label.textContent = "That guess is too high!";
  } else {
    get_user_guess();
    user_submit_flag = 0;
  }
}
//This function changes the display of the UI on submit
function change_display() {
  reset_button.style.display = "block";
  number_of_guesses_t.style.display = "none";
  max_number.style.display = "none";
  min_number.style.display = "none";
  min_label.style.display = "none";
  max_label.style.display = "none";
  header_text.style.display = "none";
  header_text_two.style.display = "none";
  header_text_two_pg.style.display = "none";
  good_luck.style.display = "none";
  header_div.style.display = "none";
  parameters.style.display = "none";
  game_label.style.display = "block";
  user_guess.style.display = "block";
}

function prompt_user() {
  let insert_text = `I am thinking of an inclusive number between ${min_number_value} and ${max_number_value}. You will have ${num_guesses_value}  chances to guess correctly!`;
  animate_text_v2(insert_text);
}
function play_game_again() {
  play_again_button.style.display = "block";
}

function is_guess_correct() {
  num_guesses_value--;
  if (num_guesses_value == 0) {
    main_content.style.display = "none";
    main_header.style.display = "none";
    winning_container.style.display = "flex";
    congrats.style.display = "block";
    congrats.textContent = "You Lose!"
    body_element.style.height = "75vh";
    winning_text.style.display = "block";
    winning_text.textContent = `The correct number was ${random_number}!`;
    setTimeout(play_game_again, 2000);
  } else if (random_number == user_guess_value) {
    main_content.style.display = "none";
    main_header.style.display = "none";
    winning_container.style.display = "flex";
    congrats.style.display = "block";
    body_element.style.height = "75vh";
    winning_text.style.display = "block";
    winning_text.textContent = `You guessed the correct number ${user_guess_value}!`;
    setTimeout(play_game_again, 2000);
    return;
  } else if (user_guess_value > random_number) {
    let incorrect_text = `Incorrect! The number ${user_guess_value} is too High!`;
    let guesses_left_text = '';
    if (num_guesses_value == 1) {
        guesses_left_text = `${num_guesses_value} guess left!`;
        setTimeout(function() {animate_text_v4(guesses_left_text)}, 3000);
    }
    else {
        guesses_left_text = `${num_guesses_value} guesses left!`;
        setTimeout(function() {animate_text_v4(guesses_left_text)}, 3000);
    }
    setTimeout(function () {
      animate_text_v3(incorrect_text);
    }, 250);
  } else if (user_guess_value < random_number) {
    let incorrect_text = "Incorrect! Your number is too Low!";
    let guesses_left_text = '';
    if (num_guesses_value == 1) {
        guesses_left_text = `${num_guesses_value} guess left!`;
        setTimeout(function() {animate_text_v4(guesses_left_text)}, 3000);
    }
    else {
        guesses_left_text = `${num_guesses_value} guesses left!`;
        setTimeout(function() {animate_text_v4(guesses_left_text)}, 3000);
    }
    setTimeout(function () {
      animate_text_v3(incorrect_text);
    }, 250);
  }
}
//This function makes sure all functions are processed when the submit button is clicked.
function submit_results() {
  if (first_submit) {
    check_inputs();
    if (input_flag) {
    } else {
      get_min_value();
      get_max_value();
      get_num_guesses();
      first_submit = false;
      random_number = get_random_int(min_number_value, max_number_value);
      change_display();
      delete_timeout = setTimeout(delete_text, 2000);
      prompt_timeout = setTimeout(prompt_user, 4000);
    }
  } else if (!first_submit && user_guess_flag) {
    check_user_guess();
    if (user_submit_flag == 0) {
      is_guess_correct();
    }
  }
}

//This function resets all values and functions when the reset button is clicked.
function reset_results() {
  location.reload();
}

//These are all of my event listeners
submit_button.addEventListener("click", submit_results);
reset_button.addEventListener("click", reset_results);
min_number.addEventListener("focus", quick_text);
max_number.addEventListener("focus", quick_text);
number_of_guesses.addEventListener("focus", quick_text);
game_input.addEventListener("focus", quick_text_v2);
play_again_button.addEventListener("click", reset_results);
