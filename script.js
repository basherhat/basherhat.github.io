// URL to redirect to
const targetURL = "https://mealman.paradox-bd.com";

// Function to redirect after 5 seconds
setTimeout(() => {
  window.location.href = targetURL;
}, 5000);

// Manual redirection on button click
document.getElementById('redirect-button').addEventListener('click', () => {
  window.location.href = targetURL;
});
