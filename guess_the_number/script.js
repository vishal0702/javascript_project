let generated_number;

const generateNumber = () => {
  let n1 = Math.random();
  let n2 = n1 * 10;
  n2 = Math.trunc(n2);
  n2 = (n2 % 6) + 1;
  generated_number = n2;
  console.log(generated_number);
};

const generate_number_btn_click = () => {
  document.querySelector("#section1").style.display = "none";
  document.querySelector("#section2").style.display = "none";
  document.querySelector("#section3").style.display = "block";

  setTimeout(() => {
    generateNumber();

    document.querySelector("#field").value = "";
    document.querySelector("#section1").style.display = "none";
    document.querySelector("#section2").style.display = "block";
    document.querySelector("#section3").style.display = "none";
  }, 3000);
};

//Check number
const check_number = () => {
  let guessed_number = document.querySelector("#field").value;
  if (guessed_number == generated_number) {
    alert("Congrats! You won the game.");
  } else {
    alert("Oops! You lost the game.");
  }
  generate_number_btn_click();
};
