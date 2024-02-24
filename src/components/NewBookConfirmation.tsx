import React, { useEffect } from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Spacing from '../Spacing';
import FontSize from '../FontSize';
import Colors from '../colors';
import Font from '../Font';

const { height } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'NewBookConfirmation'>;

const NewBookConfirmation: React.FC<Props> = ({ navigation: { navigate } }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('Home');
    }, 4000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView>
        <View>
          <ImageBackground
            style={{
              height: height / 2.5,
            }}
            resizeMode="contain"
            source={require('../../assets/newbook-confirm-img.png')}
          />
          <View
            style={{
              paddingHorizontal: Spacing * 4,
              paddingTop: Spacing * 4,
            }}>
            <Text
              style={{
                fontSize: FontSize.xxLarge,
                color: Colors.primary,
                textAlign: 'center',
              }}>
              Successfully Added Book to Library!
            </Text>

            <Text
              style={{
                fontSize: FontSize.small,
                color: Colors.text,
                textAlign: 'center',
                marginTop: Spacing * 2,
              }}>
              Dive into the literary journey you've just expanded with this new addition
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewBookConfirmation;

const styles = StyleSheet.create({});
