import * as React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, StatusBar } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../App';

import { BookListItem } from './BookListItem';

import { books } from '../mockBooks';
import { Book } from '../types';
import colors from '../colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const onPressItem = (item: Book) => {
    navigation.navigate('ViewBook', { book: item, previousScreen: 'HomeScreen' });
  };

  const renderItem = ({ item }: { item: Book }) => {
    return <BookListItem item={item} onPress={() => onPressItem(item)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
            <StatusBar
        animated={true}
            />
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 16,
  },
  itemText: {
    color: colors.black,
    fontSize: 20,
    alignSelf: 'center',
    flex: 1,
  },
  bookCoverImage: {
    width: 50,
    height: 70,
    marginRight: 16,
  },
  separator: {
    height: 16,
  },
});
