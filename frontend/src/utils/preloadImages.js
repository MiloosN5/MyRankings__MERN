const preloadImages = () => {
    const images = [
      '../assets/Djokovic__01__edit.jpg',
      '../assets/Djokovic__01.jpg',
      '../assets/Swiatek__01__edit.jpg',
      '../assets/Swiatek__01.jpg',
      '../assets/pattern__seamless__light.png',
      '../assets/pattern__seamless__dark.png'
    ];
  
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  };
  
 export default preloadImages;
  