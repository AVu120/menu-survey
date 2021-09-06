import styles from "./SurveyForm.module.scss";
import StarRatingScale from "../starRatingScale/StarRatingScale";
import { MouseEventHandler } from "react";
interface ISurveyFormProps {
  item: string;
  hoverRating: number;
  selectedRating: number;
  changeRating: (rating: number) => void;
  hoverOverRating: (rating: number) => void;
  hoverOffRating: (rating: number) => void;
  changeIsFeedbackSubmitted: MouseEventHandler<HTMLButtonElement>;
  returnToMenu: MouseEventHandler<HTMLButtonElement>;
}
const SurveyForm = ({
  item,
  hoverRating,
  selectedRating,
  changeRating,
  hoverOverRating,
  hoverOffRating,
  changeIsFeedbackSubmitted,
  returnToMenu,
}: ISurveyFormProps) => {
  return (
    <form className={styles.review_form}>
      <div className={styles.rate_meal_label}>How was the {item}?</div>
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
          <div style={{ display: "flex" }}>
            <button
              type="button"
              className={styles.button_after_rating}
              onClick={returnToMenu}
            >
              Return to menu
            </button>
            <button
              type="button"
              className={styles.button_after_rating}
              onClick={changeIsFeedbackSubmitted}
            >
              Submit feedback
            </button>
          </div>
        </div>
      )}
      {selectedRating === 0 && (
        <button
          type="button"
          className={styles.button_before_rating}
          onClick={returnToMenu}
        >
          Return to menu
        </button>
      )}
    </form>
  );
};

export default SurveyForm;
