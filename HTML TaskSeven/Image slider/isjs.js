let images = [];
let currentIndex = 0;
let sliderInterval;
let speed = 6000;

const apiUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos';

const sliderContainer = document.getElementById('slider-container');
const slider = document.getElementById('slider');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

playBtn.addEventListener('click', playSlider);
stopBtn.addEventListener('click', stopSlider);
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function fetchData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', apiUrl, true);

  xhr.onload = function() 
  {
    if (xhr.status === 200) {
      const responseData = JSON.parse(xhr.responseText);
      images = responseData.slice(0, 5);
      renderSlider();
    }
  };

  xhr.send();
}

function renderSlider() 
{
  slider.innerHTML = '';

  images.forEach((image, index) => {
    const slide = document.createElement('div');
    slide.classList.add('slider-image');
    slide.style.backgroundImage = `url(${image.url})`;

    const caption = document.createElement('div');
    caption.classList.add('slider-caption');
    caption.textContent = image.title;

    slide.appendChild(caption);
    slider.appendChild(slide);
  });

  showSlide(currentIndex);
}

function showSlide(index) 
{
  slider.style.transform = `translateX(${-index * 100}%)`;
}

function playSlider() 
{
  stopSlider();
  sliderInterval = setInterval(nextSlide, speed);
}

function stopSlider() 
{
  clearInterval(sliderInterval);
}

function nextSlide() 
{
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

function prevSlide() 
{
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}

function changeSpeed(newSpeed)
{
  speed = newSpeed;
  playSlider();
}

fetchData();
