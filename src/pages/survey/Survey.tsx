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
    1: "shock-face",
    2: "sad-face",
    3: "flat-face",
    4: "smile-face",
    5: "happy-face",
  };

  return (
    <div
      className={styles[ratingToBackgroundMap[selectedRating] || "smile-face"]}
      style={{ height: "100%" }}
    >
      <Emoticon
        selectedEmoticon={ratingToBackgroundMap[selectedRating] || "smile-face"}
      />

      <div className="label">Rate your experience</div>
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
