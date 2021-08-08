import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import EmojiRating from "react-emoji-rating";

const Survey = () => {
  const [rating, setRating] = useState("");
  const [isRatingSubmitted, setIsRatingSubmitted] = useState(false);
  const { item }: { item: string } = useParams();
  const history = useHistory();
  const changeRating = (e: any) => setRating(e);

  return (
    <div>
      {!isRatingSubmitted ? (
        <>
          <h2>How was the {item}?</h2>
          <EmojiRating variant="funky" onChange={changeRating} />
          {rating && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2>Would you like to leave a comment?</h2>
              <textarea rows={4} cols={60} />
              <button
                type="button"
                style={{
                  marginTop: "20px",
                  padding: "5px 10px",
                  width: "fit-content",
                }}
                onClick={() => setIsRatingSubmitted(!isRatingSubmitted)}
              >
                Submit
              </button>
            </div>
          )}
        </>
      ) : (
        <div>
          <h2>Thank you for your review! </h2>{" "}
          <button
            type="button"
            style={{
              marginTop: "20px",
              padding: "5px 10px",
              width: "fit-content",
            }}
            onClick={() => history.push("/")}
          >
            Review something else
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default Survey;
