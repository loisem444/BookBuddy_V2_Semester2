import { ImageSourcePropType } from 'react-native';

export type Book = {
  id: string;
  name: string;
  shortDescription: string;
  coverImage: ImageSourcePropType;
  authors: string;
  ISBN: string;
  Edition: string;
  price: string;
  contactEmail: string;
};
