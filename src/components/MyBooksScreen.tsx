import * as React from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, StatusBar } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../App';

import { BookListItem } from './BookListItem';

import { myBooks } from '../mockBooks';
import { Book } from '../types';
import colors from '../colors';

type Props = NativeStackScreenProps<RootStackParamList, 'MyBooks'>;

const MyBooksScreen: React.FC<Props> = ({ navigation }) => {
    const onPressItem = (item: Book) => {
        // TODO: Navigate to ViewMyBook
        navigation.navigate('ViewBook', { book: item, previousScreen: 'MyBookScreen' });
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
        data={myBooks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
            </SafeAreaView>
    );
};

export default MyBooksScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
    },
    separator: {
        height: 16,
    },
});
