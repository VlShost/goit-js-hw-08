import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};

const formValue = {};

populateInputs();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formValue);
};

function onFormInput(e) {
  formValue[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
};

function populateInputs() {
  const savedMessage = localStorage.getItem('feedback-form-state');
  const values = JSON.parse(savedMessage);

  if (values) {
    refs.input.value = values.email || '';
    refs.textarea.value = values.message || '';
    console.log(values)
  }
};


