let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const carousel = document.querySelector(".carousel");

function moveToNextSlide() {
    currentIndex++;
    
  
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    
    if (currentIndex === totalSlides - 1) {
        setTimeout(() => {
           
            carousel.style.transition = "none"; 
            currentIndex = 0;
            carousel.style.transform = `translateX(0)`;

           
            setTimeout(() => {
                carousel.style.transition = "transform 1s ease";
            }, 50);
        }, 1000); 
    }
}

setInterval(moveToNextSlide, 4000);