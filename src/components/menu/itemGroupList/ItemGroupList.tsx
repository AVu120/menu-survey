import ItemGroup from "../../../components/menu/itemGroup/ItemGroup";
import NoMatchesFound from "../noMatchesFound/NoMatchesFound";
import { IMap } from "../../../types/common";
import { IItemGroup } from "../../../types/restaurant";
import { doesItemGroupContainSearchQuery } from "../../../utils/search/Filter";
import styles from "./ItemGroupList.module.scss";

interface IItemGroupListProps {
  restaurantData: IMap<IItemGroup[]>;
  restaurant: string;
  searchQuery: string;
}

const ItemGroupList = ({
  restaurantData,
  restaurant,
  searchQuery,
}: IItemGroupListProps) => {
  const itemGroupsToDisplay = (
    restaurantData[restaurant] || restaurantData["restaurant1"]
  ).map(({ title, items }: IItemGroup) => {
    return (
      doesItemGroupContainSearchQuery({
        searchQuery,
        title,
        items,
      }) && (
        <ItemGroup
          {...{ title, items }}
          searchQuery={searchQuery}
          key={`${title}_item_group`}
        />
      )
    );
  });
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
