// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Contoh: Update dinamis untuk slug bar
  const slug3 = document.getElementById('slug3');
  const slug3Value = document.getElementById('slug3-value');

  // Simulasi perubahan progress
  setTimeout(() => {
      const newValue = 85; // Contoh nilai baru
      slug3.style.width = `${newValue}%`;
      slug3Value.textContent = `${newValue}%`;
  }, 2000);
});

  
  // script.js
document.addEventListener('DOMContentLoaded', () => {
    const endDate = new Date("2024-12-31T23:59:59").getTime();
  
    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = endDate - now;
  
      if (timeLeft <= 0) {
        document.querySelector('.countdown').innerHTML = '<h3>Promo Berakhir</h3>';
        clearInterval(timerInterval);
        return;
      }
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      document.getElementById('days').textContent = days.toString().padStart(2, '0');
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
  
    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call
  });
  