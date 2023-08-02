function addNewWEField() {
  // console.log("Adding new field");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Work Experience");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  // console.log("Adding new field");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Academic Qualification");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

// Generating Resume
function generateResume() {
  let nameField = document.getElementById("nameField").value;

  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;

  document.getElementById("nameT2").innerHTML = nameField;

  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;
  document.getElementById("emailT").innerHTML =
    document.getElementById("emailField").value;
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  // document.getElementById("linkT").innerHTML =
  //   document.getElementById("linkedField").value;
  // document.getElementById("gitT").innerHTML =
    // document.getElementById("gitField").value;

  document.getElementById("linkT").href = document.getElementById("linkedField").value;
  document.getElementById("gitT").href = document.getElementById("gitField").value;

  

  // document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
  // document.getElementById("weT").innerHTML = document.getElementById("weField").value;
  // document.getElementById("aqT").innerHTML = document.getElementById("aqField").value;

  //Work Exp.
  let weArray = document.getElementsByClassName("weField");
  let str1 = "";
  for (let e of weArray) {
    str1 = str1 + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str1;

  //Academic Qualification
  let aqArray = document.getElementsByClassName("aqField");
  let str2 = "";
  for (let e of aqArray) {
    str2 = str2 + `<li> ${e.value} </li>`;
  }
  document.getElementById("aqT").innerHTML = str2;

  //uploading image
  let file = document.getElementById("imgField").files[0];
  console.log(file);

  let reader = new FileReader();
  reader.readAsDataURL(file);

  //set the img to template
  reader.onloadend = function () {
    document.getElementById("imgT").src = reader.result;
  };

  document.getElementById("resume-form").style.display = "none";
  document.getElementById("resume-template").style.display = "block";
}

// printing resume
function printResume() {
  window.print();
}
