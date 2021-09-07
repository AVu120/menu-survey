import { doesItemGroupContainSearchQuery } from "../../../utils/search/Filter";
import ItemGroup from "../../../components/menu/itemGroup/ItemGroup";
import { IItemGroup } from "../../../types/restaurant";
import { IMap } from "../../../types/common";
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
  return (
    <div className={styles.ItemGroupList}>
      {(restaurantData[restaurant] || restaurantData["restaurant1"]).map(
        ({ title, items }: IItemGroup) => {
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
        }
      )}
    </div>
  );
};

export default ItemGroupList;
