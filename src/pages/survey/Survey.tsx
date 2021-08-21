import { useState } from "react";
import Emoticon from "../../components/survey/emoticon/Emoticon";
import StarRatingScale from "../../components/survey/starRatingScale/StarRatingScale";
import { IMap } from "../../types/interfaces";
import styles from "./Survey.module.css";

const Survey = () => {
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const changeRating = (rating: number) => {
    setSelectedRating(rating);
  };

  const hoverOverRating = (rating: number) => {
    setHoverRating(rating);
  };

  const hoverOffRating = (rating: number) => {
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
      className={`${styles.Survey} ${
        styles[ratingToBackgroundMap[selectedRating] || "smile"]
      }`}
    >
      <Emoticon
        selectedEmoticon={ratingToBackgroundMap[selectedRating] || "smile"}
      />

      <div className={styles.rate_meal_label}>Rate your meal</div>
      <StarRatingScale
        starCount={5}
        hoverRating={hoverRating}
        selectedRating={selectedRating}
        onClick={changeRating}
        onMouseOver={hoverOverRating}
        onMouseLeave={hoverOffRating}
      />
      {selectedRating > 0 && (
        <>
          <div className={styles.comment_input_label}>
            Leave a comment (optional)?
          </div>
          <textarea rows={4} cols={50} className={styles.comment_input} />
          <button type="button" className={styles.submit_button}>
            Submit feedback
          </button>
        </>
      )}
    </div>
  );
};

export default Survey;
