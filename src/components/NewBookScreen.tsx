import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  ScrollView,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from '../../App';
import colors from '../colors';
import Spacing from '../Spacing';
import FontSize from '../FontSize';
import Font from '../Font';
import AppTextInput from './FormTextInput';

type Props = NativeStackScreenProps<RootStackParamList, 'NewBook'>;

const NewBookScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView>
        <View
          style={{
            padding: Spacing * 2,
            backgroundColor: colors.white,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: FontSize.xLarge,
                color: colors.primary,
                // fontFamily: Font["poppins-bold"],
                marginVertical: Spacing * 3,
              }}>
              New Book
            </Text>
            <Text
              style={{
                // fontFamily: Font["poppins-semiBold"],
                fontSize: FontSize.large,
                maxWidth: '60%',
                textAlign: 'center',
                paddingTop: 0,
              }}>
              Craft your book's profile!
            </Text>
          </View>
          <View
            style={{
              marginVertical: Spacing * 3,
            }}>
            <AppTextInput placeholder="Book Name" />
            <AppTextInput placeholder="ISBN" />
            <AppTextInput placeholder="Contact Email" />
            <AppTextInput placeholder="Price" />
          </View>

          <TouchableOpacity
            style={{
              padding: Spacing * 2,
              backgroundColor: colors.primary,
              marginVertical: Spacing * 3,
              borderRadius: Spacing,
              shadowColor: colors.primary,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
            }}
            onPress={() => navigation.replace('NewBookConfirmation')}>
            <Text
              style={{
                // fontFamily: Font["poppins-bold"],
                color: colors.onPrimary,
                textAlign: 'center',
                fontSize: FontSize.large,
              }}>
              Create New Book
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewBookScreen;

const styles = StyleSheet.create({});
