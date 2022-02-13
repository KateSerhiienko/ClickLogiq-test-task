const form = document.querySelector('.form');
const fields = form.querySelectorAll('input:not(.submit)');
const submit = form.querySelector(".submit");

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const invalidFields = form.querySelectorAll('.invalid');

  unhighlightField(invalidFields);

  areEmptyFields();

  checkValidation();

  return (isFormValid());
})

function highlightField(field) {
  field.classList.add("invalid");
}

function unhighlightField(invalidFields) {
  if (invalidFields) {
    for (var i = 0; i < invalidFields.length; i++) {
      invalidFields[i].classList.remove("invalid");
    }
  }
}

function areEmptyFields() {
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      highlightField(fields[i]);
    }
  }
}

function checkValidation() {
  if (form.firstName.value.length < 2) highlightField(form.firstName);

  if (form.lastName.value.length < 2) highlightField(form.lastName);

  const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!emailRegexp.test(form.email.value)) highlightField(form.email);

  if (typeof form.phoneNumber.value != Number && form.phoneNumber.value.length < 6 || form.phoneNumber.value.length > 12) highlightField(form.phoneNumber);
}

function isFormValid() {
  return document.querySelectorAll(".invalid").length === 0;
}

submit.addEventListener("click", function () {
  console.group("Form data");
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].name === 'agree') {
      fields[i].checked ? fields[i].value = true : fields[i].value = false;
    }
    console.log(`${fields[i].name} -> ${fields[i].value}`);
  }
  console.groupEnd()
})