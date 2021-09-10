import { IItemGroup } from "../../../types/restaurant";
import { doesItemContainSearchQuery } from "../../../utils/search/Filter";
import Item from "../item/Item";
import styles from "./ItemGroup.module.scss";
import ItemGroupContainer from "./itemGropContainer/ItemGroupContainer";

interface IItemGroupProps extends IItemGroup {
  searchQuery: string;
  handleLayout: Function;
  index: number;
}
const ItemGroup = ({
  title,
  items,
  searchQuery,
  handleLayout,
  index,
}: IItemGroupProps) => {
  return (
    <ItemGroupContainer {...{ index, handleLayout }}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.grid}>
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
    </ItemGroupContainer>
  );
};

export default ItemGroup;
