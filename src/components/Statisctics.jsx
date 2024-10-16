import StatisticsCard from "./StatisticsCard";
import "../styles/statisctics.css";
import data from "../data.json";

function Statisctics() {
  return (
    <section>
      <div className="statisctics-container">
        <div className="results-container"/*  style={{display: "none"}} */>
          <p>https://www.youtube.com/watch?v=h92PvyyThxI&list=RDh92PvyyThxI&start_radio=1</p>
          <div className="shorted-container">
            <p>v=v07db2Hw_o4&t=377s</p>
            <button>Copy</button>
          </div>
        </div>
        <div className="results-container"/*  style={{display: "none"}} */>
          <p>https://www.youtube.com/watch?v=h92PvyyThxI&list=RDh92PvyyThxI&start_radio=1</p>
          <div className="shorted-container">
            <p>v=v07db2Hw_o4&t=377s</p>
            <button>Copy</button>
          </div>
        </div>
        <div className="results-container"/*  style={{display: "none"}} */>
          <p>https://www.youtube.com/watch?v=h92PvyyThxI&list=RDh92PvyyThxI&start_radio=1</p>
          <div className="shorted-container">
            <p>v=v07db2Hw_o4&t=377s</p>
            <button>Copy</button>
          </div>
        </div>
        <div className="text-container">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced statistics dashboard
          </p>
        </div>
        <div className="cards-container">
          <div className="line"></div>
          {data.map((item, index) => (
            <StatisticsCard
              key={index}
              img={`${import.meta.env.BASE_URL}images/${item.img}`}
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
