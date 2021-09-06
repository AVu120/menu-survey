export interface IItem {
  title: string;
  description: string;
  image: string;
}

export interface IItemGroup {
  title: string;
  items: IItem[];
}
