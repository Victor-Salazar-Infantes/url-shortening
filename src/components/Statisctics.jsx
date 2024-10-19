import { useState, useEffect } from "react";
import StatisticsCard from "./StatisticsCard";
import "../styles/statisctics.css";
import data from "../data.json";

// Importar todas las imágenes de forma dinámica
const images = import.meta.glob("../assets/images/*.svg");

function Statisctics() {
  const [resolvedImages, setResolvedImages] = useState({});

  // Cargar todas las imágenes
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = {};
      for (const path in images) {
        const module = await images[path]();
        loadedImages[path.split("/").pop()] = module.default; // Extraer el nombre del archivo
      }
      setResolvedImages(loadedImages);
    };
    loadImages();
  }, []);

  // Función para obtener la imagen por su nombre
  const getImageByName = (imageName) => resolvedImages[imageName];

  return (
    <section>
      <div className="statisctics-container">
        <div className="results-container" /*  style={{display: "none"}} */>
          <p>
            https://www.youtube.com/watch?v=h92PvyyThxI&list=RDh92PvyyThxI&start_radio=1
          </p>
          <div className="shorted-container">
            <p>v=v07db2Hw_o4&t=377s</p>
            <button>Copy</button>
          </div>
        </div>
        <div className="results-container" /*  style={{display: "none"}} */>
          <p>
            https://www.youtube.com/watch?v=h92PvyyThxI&list=RDh92PvyyThxI&start_radio=1
          </p>
          <div className="shorted-container">
            <p>v=v07db2Hw_o4&t=377s</p>
            <button>Copy</button>
          </div>
        </div>
        <div className="results-container" /*  style={{display: "none"}} */>
          <p>
            https://www.youtube.com/watch?v=h92PvyyThxI&list=RDh92PvyyThxI&start_radio=1
          </p>
          <div className="shorted-container">
            <p>v=v07db2Hw_o4&t=377s</p>
            <button>Copy</button>
          </div>
        </div>
        <div className="text-container">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>
        <div className="cards-container">
          <div className="line"></div>
          {data.map((item, index) => (
            <StatisticsCard
              key={index}
              img={getImageByName(item.img)}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statisctics;
