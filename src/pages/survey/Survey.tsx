import { useState } from "react";
import Emoticon from "../../components/survey/emoticon/Emoticon";
import StarRatingScale from "../../components/survey/starRatingScale/StarRatingScale";
import { IMap } from "../../types/interfaces";
import styles from "./Survey.module.css";
import { useHistory } from "react-router";

const Survey = () => {
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);
  const history = useHistory();

  const changeRating = (rating: number) => {
    setSelectedRating(rating);
  };

  const hoverOverRating = (rating: number) => {
    setHoverRating(rating);
  };

  const hoverOffRating = (rating: number) => {
    setHoverRating(rating);
  };

  const changeIsFeedbackSubmitted = (): void =>
    setIsFeedbackSubmitted(!isFeedbackSubmitted);

  const returnToMenu = (): void => history.push("/");

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

      {!isFeedbackSubmitted ? (
        <form className={styles.review_form}>
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
            <div className={styles.submit_form}>
              <div className={styles.comment_input_label}>
                Leave a comment (optional)?
              </div>
              <textarea rows={4} cols={50} className={styles.comment_input} />
              <button
                type="button"
                className={styles.button}
                onClick={changeIsFeedbackSubmitted}
              >
                Submit feedback
              </button>
            </div>
          )}
        </form>
      ) : (
        <>
          <div className={styles.survey_submitted_label}>
            Thank you!
            <br />
            <br />
            Your feedback has been submitted.
          </div>
          <button
            type="button"
            className={styles.button}
            onClick={returnToMenu}
          >
            Return to menu
          </button>
        </>
      )}
    </div>
  );
};

export default Survey;
