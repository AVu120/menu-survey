import styles from "./SubmitSuccessMessage.module.css";

interface ISubmitSuccessMessageProps {
  restaurant: string;
  returnToMenu: any;
}
const SubmitSuccessMessage = ({
  restaurant,
  returnToMenu,
}: ISubmitSuccessMessageProps) => {
  return (
    <>
      <div className={styles.survey_submitted_label}>
        Thank you!
        <br />
        <br />
        Your feedback has been submitted to {restaurant}.
      </div>
      <button type="button" className={styles.button} onClick={returnToMenu}>
        Return to menu
      </button>
    </>
  );
};

export default SubmitSuccessMessage;
