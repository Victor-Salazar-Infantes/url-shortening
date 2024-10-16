import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ShorterLinks from "./components/ShorterLinks";
import Statisctics from "./components/Statisctics";
import GetStarted from "./components/GetStarted";
import "./styles/main-styles.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container" style={{"padding": "2rem 0 0", "maxWidth": "100%"}}>
      <Navigation />
      <Hero />
      <ShorterLinks />
      <Statisctics />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
