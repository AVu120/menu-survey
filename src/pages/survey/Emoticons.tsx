import { IMap } from "../../../src/types/interfaces";

interface IEmoticonsProps {
  selectedRating: number;
}

const Emoticons = ({ selectedRating }: IEmoticonsProps) => {
  const ratingToFace: IMap = {
    1: "shock",
    2: "sad",
    3: "flat",
    4: "smile",
    5: "happy",
  };

  return (
    <div className="face">
      <div className="eye" />
      <div className="mouth">
        <div className={ratingToFace[`${selectedRating}`]} />
      </div>
      <div className="eye" />
    </div>
  );
};

export default Emoticons;
