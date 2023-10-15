const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email || !password) {
    alert('Усі поля повинні бути заповнені!');
    return;
  }

  const userData = {
    email,
    password
  };

  console.log(userData);

  form.reset();
});