import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../App';
import Spacing from '../Spacing';
import FontSize from '../FontSize';
import colors from '../colors';
import { setIsLoggedIn } from '../utils/auth';

type Props = NativeStackScreenProps<RootStackParamList, 'Menu'>;
type RouteName = 'MyBooks' | 'NewBook' | 'Welcome';

const MenuScreen: React.FC<Props> = ({ navigation }) => {
  const onPressItem = async (routeName: RouteName) => {
    if (routeName === 'Welcome') {
      await setIsLoggedIn(false);
      navigation.replace('Welcome');
      return;
    }
    navigation.navigate(routeName);
  };

  return (
    <SafeAreaView style={styles.container}>
            <StatusBar
        animated={true}
            />
      <ScrollView>
        <TouchableOpacity onPress={() => onPressItem('MyBooks')}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>My Books</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onPressItem('NewBook')}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>List new book</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onPressItem('Welcome')}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Sign out</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  itemContainer: {
    padding: Spacing * 2,
    marginRight: 16,
    marginLeft: 16,
    backgroundColor: colors.primary,
    marginVertical: Spacing,
    borderRadius: Spacing,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: colors.onPrimary,
    fontSize: FontSize.large,
  },
});
