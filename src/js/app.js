import Joi from 'joi';

const form = document.querySelector('.main-form');

const validateUser = (data) => {
  const schema = Joi.object({
    firstname: Joi.string().alphanum().min(4).max(20).required(),
    lastname: Joi.string().alphanum().min(2).max(10).required(),
  }).with('firstname', 'lastname');
  return schema.validate(data);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const data = {
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
  };

  const {value, error} = validateUser(data);

  if(error) {
    console.error(error);
  }

  console.log(value);
});
