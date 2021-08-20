import StarIcon from "mdi-react/StarIcon";
import StarOutlineIcon from "mdi-react/StarOutlineIcon";
import styles from "./StarRatingScale.module.css";
interface IStarRatingScaleProps {
  selectedRating: number;
  starCount: number;
  hoverRating: number;
  handleOnClick: any;
  handleOnMouseOver: any;
  handleOnMouseLeave: any;
}
const StarRatingScale = ({
  selectedRating,
  starCount,
  hoverRating,
  handleOnClick,
  handleOnMouseOver,
  handleOnMouseLeave,
}: IStarRatingScaleProps) => {
  return (
    <div className={styles.rating_holder}>
      <div className={styles.rating_bar}>
        {Array(starCount)
          .fill(null)
          .map((el, index) => (
            <div
              className={`${styles.rating_icon} ${
                selectedRating >= index + 1 || hoverRating >= index + 1
                  ? `${styles.rotate}`
                  : ""
              }`}
              key={index + 1}
              onClick={() => handleOnClick(index + 1)}
              onMouseOver={() => handleOnMouseOver(index + 1)}
              onMouseLeave={handleOnMouseLeave}
            >
              {selectedRating >= index + 1 || hoverRating >= index + 1 ? (
                <StarIcon />
              ) : (
                <StarOutlineIcon />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default StarRatingScale;
