import { useHistory } from "react-router-dom";
import styles from "./Item.module.scss";
import { IItem } from "../../../types/restaurant";
import { useContext } from "react";
import { MenuContext } from "../../../pages/menu/Menu";

const Item = ({ title, description, image }: IItem) => {
  const history = useHistory();
  const { restaurant }: { restaurant: string } = useContext(MenuContext);

  const reviewItem = () => {
    history.push(`/${restaurant}/${title}`);
  };
  return (
    <div
      className={image ? styles.Item_with_image : styles.Item}
      onClick={reviewItem}
    >
      <div className={styles.textContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      {image && <img className={styles.img} src={image} alt={title} />}
    </div>
  );
};

export default Item;
