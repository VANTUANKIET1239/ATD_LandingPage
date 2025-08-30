    // Countdown Timer for Livestream
const countdownElement = document.getElementById('countdown-timer');
const eventDate = new Date('2024-07-01T19:00:00'); // Set your livestream date/time here

function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;
    if (diff <= 0) {
        countdownElement.textContent = 'Đã bắt đầu!';
        return;
    }
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    countdownElement.textContent = `${hours} giờ ${minutes} phút ${seconds} giây`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Follow Button Animation
const followBtn = document.querySelector('.follow-btn');
if (followBtn) {
    followBtn.addEventListener('click', function() {
        followBtn.textContent = 'Đã theo dõi!';
        followBtn.style.background = 'linear-gradient(90deg, #12ad77 60%, #ff7b00 100%)';
        setTimeout(() => {
            followBtn.textContent = 'Theo dõi';
            followBtn.style.background = '';
        }, 2000);
    });
}
