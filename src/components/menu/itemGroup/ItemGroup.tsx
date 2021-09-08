import { IItemGroup } from "../../../types/restaurant";
import { doesItemContainSearchQuery } from "../../../utils/search/Filter";
import Item from "../item/Item";
import styles from "./ItemGroup.module.scss";
import MeasuredSection from "./measuredSection/MeasuredSection";

interface IItemGroupProps extends IItemGroup {
  searchQuery: string;
  handleSectionLayout: Function;
  index: number;
}
const ItemGroup = ({
  title,
  items,
  searchQuery,
  handleSectionLayout,
  index,
}: IItemGroupProps) => {
  return (
    <MeasuredSection {...{ index, handleSectionLayout }}>
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
    </MeasuredSection>
  );
};

export default ItemGroup;
