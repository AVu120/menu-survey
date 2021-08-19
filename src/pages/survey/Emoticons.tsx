import { IMap } from "../../../src/types/interfaces";
import styles from "./Emoticons.module.css";
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
    <div className={styles.face}>
      <div className={styles.eye} />
      <div className={styles.mouth}>
        <div className={styles[ratingToFace[`${selectedRating}`]]} />
      </div>
      <div className={styles.eye} />
    </div>
  );
};

export default Emoticons;
