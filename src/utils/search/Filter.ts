import { IItemGroup } from "../../types/restaurant";

interface IDoesItemGroupContainSearchQueryParams extends IItemGroup {
  searchQuery: string;
}
/**
 * @description Determine whether item group contains search query. Item group contains search query if it's title, or the title or description of one of it's items includes the search query.
 * @param title Title of item group.
 * @param items Items in item group.
 * @returns boolean
 */
export const doesItemGroupContainSearchQuery = ({
  searchQuery,
  title,
  items,
}: IDoesItemGroupContainSearchQueryParams): boolean => {
  const lowerCaseSearchQuery = searchQuery.toLocaleLowerCase();
  return (
    title.toLowerCase().includes(lowerCaseSearchQuery) ||
    items.some(
      (item) =>
        item.title.toLowerCase().includes(lowerCaseSearchQuery) ||
        item.description.toLowerCase().includes(lowerCaseSearchQuery)
    )
  );
};

interface IItemContainsSearchQueryParams {
  searchQuery: string;
  groupTitle: string;
  itemTitle: string;
  description: string;
}

/**
 * @description Determine whether item contains search query. Item contains the search query if it's title or description includes the search query.
 * @param groupTitle Title of item group containing item
 * @param itemTitle Title of item
 * @param description Description of item
 * @returns boolean
 */
export const doesItemContainSearchQuery = ({
  searchQuery,
  groupTitle,
  itemTitle,
  description,
}: IItemContainsSearchQueryParams): boolean => {
  const lowerCaseSearchQuery = searchQuery.toLocaleLowerCase();
  return (
    groupTitle.toLowerCase().includes(lowerCaseSearchQuery) ||
    itemTitle.toLowerCase().includes(lowerCaseSearchQuery) ||
    description.toLowerCase().includes(lowerCaseSearchQuery)
  );
};
