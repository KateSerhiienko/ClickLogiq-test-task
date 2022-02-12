const form = document.querySelector("#form");

// let formData = new FormData(form);

// console.log(form.value);

// const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
// emailRegexp.test(this.email) ? this.emailValid = true : this.emailValid = false;

function showData(e) {
  e.preventDefault();
  const formData = {};
  for (let i = 0; i < e.target.length; i++)
    formData[e.target[i].name] = e.target[i].value;
  console.log(formData);
}

form.addEventListener('submit', showData);