// import heroImg from "../assets/images/illustration-working.svg"
import { useState, useEffect } from 'react';
import "../styles/hero.css";

// Importar todas las imágenes de forma dinámica usando import.meta.glob
const images = import.meta.glob('../assets/images/*.svg');

function Hero() {
   const [heroImg, setHeroImg] = useState('');

  useEffect(() => {
    // Cargar la imagen de manera asíncrona
    async function loadImage() {
      const heroImgModule = await images['../assets/images/illustration-working.svg']();
      setHeroImg(heroImgModule.default);
    }

    loadImage();
  }, []);

  return (
    <main className="hero">
      <div className="hero-description">
        <h1>More than just shorter links</h1>
        <p>Build your brand´s recognition and get detailed insights on how your links are performing.</p>
        <button className="get-started">Get Started</button>
      </div>
      <img src={heroImg} alt="hero-img" id="hero-img"/>
    </main>
  )
}

export default Hero