const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = '▐ ▌'; 
        audioPlayer.pause();
        playPauseBtn.textContent = '▶';
    }
});

let movingText = document.getElementById('movingText');
let direction = 1;
let maxOffset = 300; // Maximum offset value

function animateText() {
    let currentLeft = parseInt(window.getComputedStyle(movingText).left, 10) || 0;
    let newLeft = currentLeft + (5 * direction); // Move 5 pixels per frame
    
    if (newLeft >= maxOffset || newLeft <= 0) {
        direction *= -1; // Reverse direction when hitting bounds
    }
    
    movingText.style.left = newLeft + 'px';
}

setInterval(animateText, 50);