import Joi from "joi";

const form = document.querySelector(".main-form");

const validateUser = (data) => {
  const schema = Joi.object({
    firstname: Joi.string().alphanum().min(4).max(20).required(),
    lastname: Joi.string().alphanum().min(2).max(10).required(),
  }).with("firstname", "lastname");
  return schema.validate(data);
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  let data = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
  };

  let isValidated = validateUser(data);
  console.log(isValidated);
});
