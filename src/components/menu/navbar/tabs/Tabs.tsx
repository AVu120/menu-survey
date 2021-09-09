import { IItemGroup } from "../../../../types/restaurant";
import styles from "./Tabs.module.scss";

interface ITabsProps {
  handleTabClick: (index: number) => void;
  restaurantData: IItemGroup[];
}

const Tabs = ({ handleTabClick, restaurantData }: ITabsProps) => {
  return (
    <div className={styles.Tabs}>
      {restaurantData.map(({ title }: { title: string }, i: number) => (
        <div
          key={title}
          onClick={() => handleTabClick(i)}
          className={styles.Tab}
        >
          {title}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
