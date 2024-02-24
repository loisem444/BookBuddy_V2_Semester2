import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';

import { Book } from '../types';
import colors from '../colors';

type Props = {
  item: Book;
  onPress: () => void;
};

export const BookListItem = ({ item, onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.coverImage} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.authorText}>By: {item.authors}</Text>
        <Text style={styles.priceText}>${item.price}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16,
  },
  nameText: {
    color: colors.black,
    fontSize: 16,
    paddingBottom: 8,
  },
  priceText: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  authorText: {
    color: colors.darkText,
    fontSize: 16,
    paddingBottom: 8,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.gray,
    marginRight: 16,
  },
  image: {
    width: 100,
    height: 150,
  },
});
