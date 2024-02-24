import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { RootStackParamList } from '../../App';

import colors from '../colors';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const MenuIconButton: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
      <View style={styles.container}>
        <Icon name="menu" size={32} color={colors.black} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
