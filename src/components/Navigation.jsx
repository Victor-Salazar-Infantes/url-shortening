/* import Logo from "../assets/images/logo.svg";
import HamburgerMenu from "../assets/images/more.png" */
import { useState, useEffect } from 'react';
import "../styles/navigation.css"

// Importar todas las imágenes de forma dinámica usando import.meta.glob
const images = import.meta.glob('../assets/images/*.{svg,png}');

function Header() {

   const [logo, setLogo] = useState('');
  const [hamburgerMenu, setHamburgerMenu] = useState('');

  useEffect(() => {
    // Cargar las imágenes de manera asíncrona
    async function loadImages() {
      const logoModule = await images['../assets/images/logo.svg']();
      const hamburgerMenuModule = await images['../assets/images/more.png']();
      setLogo(logoModule.default);
      setHamburgerMenu(hamburgerMenuModule.default);
    }

    loadImages();
  }, []);

  return (
    <nav>
      <a href=""><img src={logo} alt="logo"/></a>
      <img src={hamburgerMenu} id="icon-menu" alt="hamburger-menu"/>
      <div className="nav-left">
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
        <div className="nav-right">
          <button className="login">Login</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
      {/* <img src="/src/assets/images/more.png" id="icon-menu" alt="hamburger-menu"/> */}
    </nav>
  )
}

export default Header