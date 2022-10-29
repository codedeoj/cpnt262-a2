const background = document.querySelector("body");
const form  = document.querySelector("form");
const output = document.querySelector("#output");

form.addEventListener("submit", chooseColor);

// TODO: Add animations to the background
function chooseColor (e) {
  e.preventDefault();
  
  const backgroundColor = form.gradients.value;
  output.textContent = `HEX Values: ${backgroundColor}`;

  if (backgroundColor === "#dd5e89 → #f7bb97") {
    background.style.backgroundImage = "linear-gradient(#dd5e89, #f7bb97)";
  } 
  else if (backgroundColor === "#56ab2f → #a8e063") {
    background.style.backgroundImage = "linear-gradient(#56ab2f, #a8e063)";
  } 
  else if (backgroundColor === "#36d1dc → #5b86e5") {
    background.style.backgroundImage = "linear-gradient(#36d1dc, #5b86e5)";
  } 
  else if (backgroundColor === "#ffd89b → #19547b") {
    background.style.backgroundImage = "linear-gradient(#ffd89b, #19547b)";
  } 
  else if (backgroundColor === "#ff512f → #dd2476") {
    background.style.backgroundImage = "linear-gradient(#ff512f, #dd2476)";
  } 
  else if (backgroundColor === "#614385 → #516395") {
    background.style.backgroundImage = "linear-gradient(#614385, #516395)";
  } 
  else if (backgroundColor === "#02aab0 → #00cdac") {
    background.style.backgroundImage = "linear-gradient(#02aab0, #00cdac)";
  } 
  else if (backgroundColor === "#141e30 → #243b55") {
    background.style.backgroundImage = "linear-gradient(#141e30, #243b55)";
  } 
  else if (backgroundColor === "#eacda3 → #d6ae7b") {
    background.style.backgroundImage = "linear-gradient(#eacda3, #d6ae7b)";
  } 
  else if (backgroundColor === "#000428 → #004e92") {
    background.style.backgroundImage = "linear-gradient(#000428, #004e92)";
  } 
}

