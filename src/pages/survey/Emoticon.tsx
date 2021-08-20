import styles from "./Emoticon.module.css";
interface IEmoticonProps {
  selectedEmoticon: string;
}

const Emoticon = ({ selectedEmoticon }: IEmoticonProps) => {
  return (
    <div className={styles.face}>
      <div className={styles.left_eye} />
      <div className={styles.mouth}>
        <div className={styles[selectedEmoticon]} />
      </div>
      <div className={styles.right_eye} />
    </div>
  );
};

export default Emoticon;
