import { useParams } from "react-router";
import { IItemGroup } from "../../types/restaurant";
import ItemGroup from "../../components/menu/itemGroup/ItemGroup";
import { restaurantData } from "../../utils/mockData/restaurants";
import { ChangeEvent, createContext, useState } from "react";
import NavBar from "../../components/menu/navbar/NavBar";

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
            const lowerCaseSearchQuery = searchQuery.toLocaleLowerCase();
            const shouldDisplayItemGroup =
              title.toLowerCase().includes(lowerCaseSearchQuery) ||
              items.some((item) =>
                item.title.toLowerCase().includes(lowerCaseSearchQuery)
              ) ||
              items.some((item) =>
                item.description.toLowerCase().includes(lowerCaseSearchQuery)
              );
            return (
              shouldDisplayItemGroup && (
                <ItemGroup
                  {...{ title, items }}
                  searchQuery={lowerCaseSearchQuery}
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
