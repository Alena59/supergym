function validateForm(form) {

  let result = true;

  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('error-validation')) {
      parent.querySelector('.error-message').remove();
      parent.classList.remove('error-validation');
    }
  }

  function createError(input, text) {
    const parent = input.parentNode;
    const errorSpan = document.createElement('span');

    errorSpan.classList.add('error-message');
    errorSpan.textContent = text;

    parent.classList.add('error-validation');

    parent.append(errorSpan);
  }

  const allInputs = form.querySelectorAll('input');

  for (const input of allInputs) {

    removeError(input);

    if (input.dataset.validateType === 'phone') {
      if (validatePhone(input)) {
        removeError(input);
        createError(input, 'Неккоректный номер - только цифры!');
        result = false;
      }
    }

    if (input.dataset.required === 'true') {
      if (input.value === '') {
        removeError(input);
        createError(input, 'Поле не заполнено!');
        result = false;
      }
    }
  }

  function validatePhone(input) {
    return !/^[0-9]+$/.test(input.value);
  }

  return result;
}

export {validateForm};
