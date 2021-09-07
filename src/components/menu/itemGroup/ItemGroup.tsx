import { IItemGroup } from "../../../types/restaurant";
import Item from "../item/Item";
import styles from "./ItemGroup.module.scss";

interface IItemGroupProps extends IItemGroup {
  searchQuery: string;
}

const ItemGroup = ({ title, items, searchQuery }: IItemGroupProps) => {
  return (
    <div className={styles.ItemGroup}>
      <h2 className={styles.title}>{title}</h2>
      {items.map((item) => (
        <Item
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default ItemGroup;
