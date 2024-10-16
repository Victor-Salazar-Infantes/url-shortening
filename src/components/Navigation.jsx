import Logo from "../../public/images/logo.svg"
import "../styles/navigation.css"

function Header() {
  return (
    <nav>
      <a href=""><img src={Logo} alt="logo"/></a>
      <img src="./images/more.png" id="icon-menu" alt="hamburger-menu"/>
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