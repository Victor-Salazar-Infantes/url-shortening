import heroImg from "../../public/images/illustration-working.svg"
import "../styles/hero.css";

function Hero() {
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