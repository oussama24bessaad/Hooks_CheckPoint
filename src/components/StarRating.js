import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
const StarRating = ({ rating, setrating = () => {} }) => {
  const [ratehover, setratehover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((_, i) => {
        const rateValue = i + 1;
        return (
          <FaStar
            key={i}
            onClick={() => setrating(rateValue)}
            onMouseEnter={() => setratehover(rateValue)}
            onMouseLeave={() => setratehover(null)}
            color={rateValue <= (ratehover || rating) ? "yellow" : "#eee"}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
