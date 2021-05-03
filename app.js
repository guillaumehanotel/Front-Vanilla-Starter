import * as Validator from 'validatorjs'

const form = document.querySelector(".main-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    let data = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname')
    };

    let rules = {
        lastname: 'required',
        firstname: 'required'
    };

    let validation = new Validator(data, rules);

    console.log(validation.passes())

});
