import styles from "./SubmitSuccessMessage.module.css";
import { restaurantNameToDisplayName } from "../../../utils/dataMappings/restaurantNameToDisplayName";
import { MouseEventHandler } from "react";

interface ISubmitSuccessMessageProps {
  restaurant: string;
  returnToMenu: MouseEventHandler<HTMLButtonElement>;
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
        Your review has been sent to {restaurantNameToDisplayName[restaurant]}.
      </div>
      <button type="button" className={styles.button} onClick={returnToMenu}>
        Return to menu
      </button>
    </>
  );
};

export default SubmitSuccessMessage;
