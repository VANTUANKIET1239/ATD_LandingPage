const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPause');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeControl = document.getElementById('volumeControl');
const back10 = document.getElementById('back10');
const forward10 = document.getElementById('forward10');

// Format time helper
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// Play/Pause toggle
playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = '⏸'; // Pause icon
  } else {
    audio.pause();
    playPauseBtn.textContent = '▶'; // Play icon
  }
});

// Update progress bar and current time
audio.addEventListener('timeupdate', () => {
  progressBar.value = (audio.currentTime / audio.duration) * 100;
  currentTimeEl.textContent = formatTime(audio.currentTime);
});

// Seek audio
progressBar.addEventListener('input', () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Update duration once audio is loaded
audio.addEventListener('loadedmetadata', () => {
  durationEl.textContent = formatTime(audio.duration);
});

// Volume control
volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value / 100;
});

// Skip back 10s
back10.addEventListener('click', () => {
  audio.currentTime = Math.max(0, audio.currentTime - 10);
});

// Skip forward 10s
forward10.addEventListener('click', () => {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
});
