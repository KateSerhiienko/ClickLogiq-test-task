const form = document.querySelector("#form");

function showData(e) {
  e.preventDefault();

  const formData = {};

  for (let i = 0; i < e.target.length; i++) {

    if (e.target[i].name === 'submit') continue;
    if (e.target[i].name === 'agree') {
      e.target[i].checked ? e.target[i].value = true : e.target[i].value = false;
    }
    formData[e.target[i].name] = e.target[i].value;


    if (validateForm(formData)) {
      console.log(e.target[i].name + "->" + e.target[i].value);
    }
  }
}

function validateForm(formData) {
  let isformValid = true;

  if (firstName.length < 2) {
    isformValid = false;
    highlightField(firstName);
  } else {
    unhighlightField(firstName)
  }

  if (lastName.length < 2) {
    isformValid = false;
    highlightField(lastName);
  } else {
    unhighlightField(lastName)
  }

  const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (emailRegexp.test(email)) {
    isformValid = false;
    highlightField(email);
  } else {
    unhighlightField(email)
  }

  if (typeof phoneNumber != Number && phoneNumber.length < 6 || phoneNumber.length > 12) {
    isformValid = false;
    highlightField(phoneNumber);
  } else {
    unhighlightField(phoneNumber)
  }

  return isformValid;
}

function highlightField(field) {
  field.classList.add("invalid");
}
function unhighlightField(field) {
  field.classList.remove("invalid");
}

form.addEventListener('submit', showData);

form.addEventListener('keydown', function (event) {
  if (event.keyCode == 13) {
    event.preventDefault();
  }
}); // disable submit by enter button