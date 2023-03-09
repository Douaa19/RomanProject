const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slideWidth = slides[0].offsetWidth;
const slideMargin = 10;
const visibleSlides = 5;
const sliderWidth = `100%`;

let currentIndex = 0;
const maxIndex = slides.length - visibleSlides;
const minIndex = 0;

const goToSlide = (index) => {
  slider.style.transform = `translateX(-${
    (slideWidth + slideMargin * 0) * index
  }px)`;

  // hide all slides first
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // show the current slide and the next 4 slides
  for (let i = index; i < index + visibleSlides; i++) {
    slides[i].style.display = "block";
  }

  currentIndex = index;
};

prevBtn.addEventListener("click", () => {
  if (currentIndex > minIndex) {
    goToSlide(currentIndex - 1);
  } else {
    goToSlide(maxIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(minIndex);
  }
});

// initially hide all slides except the first 5
for (let i = 5; i < slides.length; i++) {
  slides[i].style.display = "none";
}

// set initial slide to 0
goToSlide(0);

// show the first 5 slides
for (let i = 0; i < visibleSlides; i++) {
  slides[i].style.display = "block";
}
