import { PropTypes } from "prop-types";
import "../styles/statisctics-card.css";

function StatisticsCard({ img, title, description }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default StatisticsCard;

StatisticsCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
