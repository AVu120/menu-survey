interface Map {
  [key: string]: string;
}

/**
 * Object mapping s3 object names (keys) to how it's displayed to
 * users in the UI (values).
 */
export const itemNameToDisplayName: Map = {
  "fried-rice": "Fried Rice",
  noodles: "Noodles",
  pancakes: "Pancakes",
};
