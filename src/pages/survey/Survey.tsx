import { useState } from "react";
import Emoticon from "./Emoticon";
import StarRatingScale from "./StarRatingScale";
import { IMap } from "../../types/interfaces";
import styles from "./Survey.module.css";

const Survey = () => {
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleOnClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleOnMouseOver = (rating: number) => {
    setHoverRating(rating);
  };

  const handleOnMouseLeave = (rating: number) => {
    setHoverRating(rating);
  };

  const ratingToBackgroundMap: IMap = {
    1: "shock",
    2: "sad",
    3: "flat",
    4: "smile",
    5: "happy",
  };

  return (
    <div
      className={styles[ratingToBackgroundMap[selectedRating] || "smile"]}
      style={{ height: "100%" }}
    >
      <Emoticon
        selectedEmoticon={ratingToBackgroundMap[selectedRating] || "smile"}
      />

      <div className={styles.label}>Rate your meal</div>
      <StarRatingScale
        starCount={5}
        hoverRating={hoverRating}
        selectedRating={selectedRating}
        handleOnClick={handleOnClick}
        handleOnMouseOver={handleOnMouseOver}
        handleOnMouseLeave={handleOnMouseLeave}
      />
    </div>
  );
};

export default Survey;
