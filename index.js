const myFood = document.querySelectorAll('.clickable');

const selectOnClick = myFood.forEach((dish) => {
  dish.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
  });
});







