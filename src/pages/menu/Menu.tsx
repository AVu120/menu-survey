import { useParams } from "react-router";
import { IItemGroup } from "../../types/restaurant";
import ItemGroup from "../../components/menu/itemGroup/ItemGroup";
import { restaurantData } from "../../utils/mockData/restaurants";
import { ChangeEvent, createContext, useState } from "react";
import NavBar from "../../components/menu/navbar/NavBar";
import { doesItemGroupContainSearchQuery } from "../../utils/search/Search";
export const RestaurantContext = createContext("restaurant1");

const Menu = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { restaurant }: { restaurant: string } = useParams();

  const changeSearchQuery = (e: ChangeEvent<HTMLInputElement>): void =>
    setSearchQuery(e.target.value);

  return (
    <RestaurantContext.Provider
      value={restaurantData[restaurant] ? restaurant : "restaurant1"}
    >
      <NavBar
        {...{
          isSearching,
          setIsSearching,
          searchQuery,
          changeSearchQuery,
          setSearchQuery,
        }}
      />
      <div style={{ marginTop: "40px" }}>
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
                  searchQuery={searchQuery.toLowerCase()}
                  key={`${title}_item_group`}
                />
              )
            );
          }
        )}
      </div>
    </RestaurantContext.Provider>
  );
};

export default Menu;
