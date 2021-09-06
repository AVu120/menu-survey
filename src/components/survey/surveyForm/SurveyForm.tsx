import styles from "./SurveyForm.module.scss";
import StarRatingScale from "../starRatingScale/StarRatingScale";

interface ISurveyFormProps {
  item: string;
  hoverRating: number;
  selectedRating: number;
  changeRating: any;
  hoverOverRating: any;
  hoverOffRating: any;
  changeIsFeedbackSubmitted: any;
}
const SurveyForm = ({
  item,
  hoverRating,
  selectedRating,
  changeRating,
  hoverOverRating,
  hoverOffRating,
  changeIsFeedbackSubmitted,
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
  );
};

export default SurveyForm;
