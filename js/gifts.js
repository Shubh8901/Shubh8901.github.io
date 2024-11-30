document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const popup = document.getElementById("popup");
    const cornerLogo = document.getElementById("corner-logo");
    const closeBtn = document.getElementById("close-btn");
    const logo = document.getElementById("logo");

    // Automatically shrink intro after 3 seconds
    setTimeout(() => {
        intro.classList.add("shrunk");
        setTimeout(() => {
            intro.classList.add("hidden");
            cornerLogo.classList.remove("hidden");
        }, 1500); // Matches CSS transition duration
    }, 3000);

    // Click on logo to open popup
    logo.addEventListener("click", () => {
        popup.classList.remove("hidden");
    });

    // Close button to hide popup
    closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const hugContainer = document.getElementById("hugContainer");

    // Show countdown after the hug fades out
    setTimeout(() => {
        hugContainer.style.display = "none";
        countdownContainer.style.display = "block";
    }, 15000); // 15 seconds for the fade-out animation
});
// Get current year and calculate the 25th of the month
const targetDate = new Date();
targetDate.setDate(25);
if (new Date() > targetDate) {
  targetDate.setMonth(targetDate.getMonth() + 1);
}

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const messageEl = document.getElementById("message");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").classList.add("hidden");
    messageEl.classList.remove("hidden");
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();
