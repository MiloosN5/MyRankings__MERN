import LightBackground from '../assets/pattern__seamless__light.png'
import DarkBackground from '../assets/pattern__seamless__dark.png'

const preloadImages = () => {
    const images = [
      LightBackground,
      DarkBackground
    ];
  
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  };
  
 export default preloadImages;
  