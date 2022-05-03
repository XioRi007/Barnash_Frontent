
import './index.scss'
import Slider from './pages/components/slider';
console.log("Hello world");
let container = document.getElementsByClassName('slider__content')[0];
console.log(container);
let slider = new Slider('slider__content',["./assets/images/photo_img1.jpg", "./assets/images/photo_img2.jpg", "./assets/images/photo_img3.jpg", 
"./assets/images/photo_img4.jpg", "./assets/images/photo_img5.jpg", "./assets/images/photo_img6.jpg",
"./assets/images/photo_img7.jpg", "./assets/images/photo_img8.jpg", "./assets/images/photo_img9.jpg", 
"./assets/images/photo_img10.jpg"], 3, 1);
container.innerHTML = slider.createSlider();
slider.setListeners();