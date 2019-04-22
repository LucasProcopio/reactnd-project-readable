export const fetchCategories = () =>
  fetch("https://lu-readable-backend.herokuapp.com/categories", {
    headers: { Authorization: "whatever-you-want" }
  })
    .then(data => data.json())
    .then(data => data.categories);
