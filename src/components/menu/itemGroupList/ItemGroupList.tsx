import ItemGroup from "../../../components/menu/itemGroup/ItemGroup";
import NoMatchesFound from "../noMatchesFound/NoMatchesFound";
import { IItemGroup } from "../../../types/restaurant";
import { doesItemGroupContainSearchQuery } from "../../../utils/search/Filter";
import styles from "./ItemGroupList.module.scss";

interface IItemGroupListProps {
  restaurantData: IItemGroup[];
  searchQuery: string;
  handleSectionLayout: Function;
}

const ItemGroupList = ({
  restaurantData,
  searchQuery,
  handleSectionLayout,
}: IItemGroupListProps) => {
  const itemGroupsToDisplay = restaurantData.map(
    ({ title, items }: IItemGroup, i: number) => {
      return (
        doesItemGroupContainSearchQuery({
          searchQuery,
          title,
          items,
        }) && (
          <ItemGroup
            {...{ title, items, handleSectionLayout }}
            searchQuery={searchQuery}
            key={`${title}_item_group`}
            index={i}
          />
        )
      );
    }
  );
  return (
    <div className={styles.ItemGroupList}>
      {itemGroupsToDisplay.some((itemGroup) => itemGroup) ? (
        itemGroupsToDisplay
      ) : (
        <NoMatchesFound />
      )}
    </div>
  );
};

export default ItemGroupList;
