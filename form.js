export class Form {
  constructor(registerForm) {
    this.form = document.getElementById(registerForm);
  }

  getValues() {
   const formData = new FormData(this.form);
   const formValues = Object.fromEntries(formData);

   return formValues;
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }

}