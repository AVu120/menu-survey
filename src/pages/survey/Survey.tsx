import { useState } from "react";
import { useHistory, useParams } from "react-router";
import Emoticon from "../../components/survey/emoticon/Emoticon";
import SubmitSuccessMessage from "../../components/survey/submitSuccessMessage/SubmitSuccessMessage";
import SurveyForm from "../../components/survey/surveyForm/SurveyForm";
import { IMap } from "../../types/common";
import styles from "./Survey.module.scss";

interface ISurveyParams {
  restaurant: string;
  item: string;
}
const Survey = () => {
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);
  const history = useHistory();
  const { restaurant, item }: ISurveyParams = useParams();

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

  const returnToMenu = (): void => history.push(`/${restaurant}`);

  const ratingToBackgroundMap: IMap<string> = {
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
        <SurveyForm
          {...{
            hoverRating,
            selectedRating,
            changeRating,
            hoverOverRating,
            hoverOffRating,
            changeIsFeedbackSubmitted,
            returnToMenu,
          }}
          item={item}
        />
      ) : (
        <SubmitSuccessMessage {...{ restaurant, returnToMenu }} />
      )}
    </div>
  );
};

export default Survey;
