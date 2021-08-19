import StarIcon from "mdi-react/StarIcon";
import StarOutlineIcon from "mdi-react/StarOutlineIcon";

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
    <div className="rating-holder">
      <div className="rating-bar">
        {Array(starCount)
          .fill(null)
          .map((el, index) => (
            <div
              className={`rating-icon ${
                selectedRating >= index + 1 || hoverRating >= index + 1
                  ? "rotate"
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
