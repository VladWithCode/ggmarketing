document.addEventListener('DOMContentLoaded', async () => {
  /* Add password form */
  const addPassForm = document.forms['addPassForm'];

  addPassForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const user = {};
    const passField = this.elements['pass'];
    const confirmPassField = this.elements['confirmPass'];

    for (let el of this.elements) {
      if (!el.value) continue;
      user[el.name] = el.value;
    }

    if (!passwordTester(user.pass)) {
      passField.classList.add('invalid');
      passField.nextElementSibling.textContent =
        'La contraseña debe contener al menos un número, una mayúscula y ser 8 carácteres de largo.';
    }

    if (user.pass !== user.confirmPass) {
      passField.classList.add('invalid');
      this.elements['confirmPass'].classList.add('invalid');
      this.elements['confirmPass'].nextElementSibling.textContent =
        'Las contraseñas deben coincidir.';
    }

    passField.oninput = passFieldsInputHandler;
    confirmPassField.oninput = passFieldsInputHandler;

    try {
      const svRes = await (
        await fetch('/api/users/add-password', {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'post',
          body: JSON.stringify(user),
        })
      ).json();

      if (svRes.err) throw { ...svRes.err, msg: svRes.msg };
    } catch (err) {
      console.log(err);
      err.msg && alert(err.msg);
      return;
    }

    document.querySelector('.apwContent__notice').classList.add('d-none');
    this.classList.add('d-none');

    document.querySelector('.apwContent__success').classList.remove('d-none');
  });

  const passwordTester = (pw) => {
    const testRegex = new RegExp(
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'g'
    );
    return testRegex.test(pw);
  };

  const passFieldsInputHandler = function (e) {
    let passField = addPassForm.elements['pass'],
      confirmPassField = addPassForm.elements['confirmPass'];

    if (passField.value === confirmPassField.value) {
      passField.classList.remove('invalid');
      passField.nextElementSibling.textContent = '';
      confirmPassField.classList.remove('invalid');
      confirmPassField.nextElementSibling.textContent = '';
    }
  };
});
