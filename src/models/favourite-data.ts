export enum AllowedDataTypes {
  Image = 'Image',
  Joke = 'Joke',
}

export type FavouriteData = {
  data: string;
  type: AllowedDataTypes;
};
