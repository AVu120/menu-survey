import styles from "./Emoticon.module.css";
interface IEmoticonProps {
  selectedEmoticon: string;
}

const Emoticon = ({ selectedEmoticon }: IEmoticonProps) => {
  return (
    <div className={styles.face}>
      <div className={styles.eye} />
      <div className={styles.mouth}>
        <div className={styles[selectedEmoticon]} />
      </div>
      <div className={styles.eye} />
    </div>
  );
};

export default Emoticon;
