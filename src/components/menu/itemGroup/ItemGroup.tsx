import { IItemGroupProps } from "../../../types/restaurant";
import Item from "../item/Item";
import styles from "./ItemGroup.module.scss";
import { doesItemContainSearchQuery } from "../../../utils/search/Filter";

const ItemGroup = ({ title, items, searchQuery }: IItemGroupProps) => {
  return (
    <div className={styles.ItemGroup}>
      <h2 className={styles.title}>{title}</h2>
      {items.map((item) => {
        return (
          doesItemContainSearchQuery({
            searchQuery,
            groupTitle: title,
            itemTitle: item.title,
            description: item.description,
          }) && (
            <Item
              title={item.title}
              description={item.description}
              image={item.image}
              key={`${title}_${item.title}_item`}
            />
          )
        );
      })}
    </div>
  );
};

export default ItemGroup;
