import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, totalStars = 5 }) => {
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (rating >= i + 1) {
      // Full star
      stars.push(<FaStar key={i} className="text-prim" />);
    } else if (rating >= i + 0.5) {
      // Half star
      stars.push(<FaStarHalfAlt key={i} className="text-prim" />);
    } else {
      // Empty star
      stars.push(<FaRegStar key={i} className="text-prim" />);
    }
  }

  return <div className="flex space-x-1">{stars}</div>;
};

export default StarRating;
