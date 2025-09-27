// toggle.js
function toggleHeart(button) {
  const icon = button.querySelector("i");
  icon.classList.toggle("far");
  icon.classList.toggle("fas");
  icon.classList.toggle("text-danger");
}
window.toggleHeart = toggleHeart; // make it globally visible
