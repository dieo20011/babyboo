// Ngày bắt đầu yêu nhau
const startDate = new Date('2024-05-01T00:00:00');

function updateCounter() {
    const now = new Date();
    const diffTime = Math.abs(now - startDate);

    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = diffDays;
    document.getElementById('hours').textContent = diffHours;
    document.getElementById('minutes').textContent = diffMinutes;
    document.getElementById('seconds').textContent = diffSeconds;
}
const audio = document.getElementById('myAudio');
    const playBtn = document.getElementById('playBtn');
    const playIcon = '<i class="fas fa-play"></i>';
    const pauseIcon = '<i class="fas fa-pause"></i>';

    playBtn.addEventListener('click', () => {
      if (audio.paused) {
        audio.play();
        playBtn.innerHTML = pauseIcon;
      } else {
        audio.pause();
        playBtn.innerHTML = playIcon;
      }
    });


let slideIndex = 0;
showSlides();
document.addEventListener('DOMContentLoaded', () => {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
      heart.style.setProperty('--i', index);
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
      heart.style.left = `${Math.random() * 100}vw`;
    });
  });

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Thay đổi hình ảnh mỗi 3 giây
}

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    if (audio) {
        audio.play();
    }
});

updateCounter();
setInterval(updateCounter, 1000); // Cập nhật số ngày mỗi giây
