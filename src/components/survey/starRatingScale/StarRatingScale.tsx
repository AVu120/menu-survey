import StarIcon from "mdi-react/StarIcon";
import StarOutlineIcon from "mdi-react/StarOutlineIcon";
import styles from "./StarRatingScale.module.css";
interface IStarRatingScaleProps {
  selectedRating: number;
  starCount: number;
  hoverRating: number;
  onClick: any;
  onMouseOver: any;
  onMouseLeave: any;
}
const StarRatingScale = ({
  selectedRating,
  starCount,
  hoverRating,
  onClick,
  onMouseOver,
  onMouseLeave,
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
              onClick={() => onClick(index + 1)}
              onMouseOver={() => onMouseOver(index + 1)}
              onMouseLeave={onMouseLeave}
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
