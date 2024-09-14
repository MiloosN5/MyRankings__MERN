import Djokovic__01__edit from '../assets/Djokovic__01__edit.jpg'
import Djokovic__01 from '../assets/Djokovic__01.jpg'
import Swiatek__01__edit from '../assets/Swiatek__01__edit.jpg'
import Swiatek__01 from '../assets/Swiatek__01.jpg'
import LightBackground from '../assets/pattern__seamless__light.png'
import DarkBackground from '../assets/pattern__seamless__dark.png'

const preloadImages = () => {
    const images = [
      Djokovic__01__edit,
      Djokovic__01,
      Swiatek__01__edit,
      Swiatek__01,
      LightBackground,
      DarkBackground
    ];
  
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  };
  
 export default preloadImages;
  