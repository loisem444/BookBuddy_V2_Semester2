import React, { useEffect, useRef } from 'react';
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Spacing from '../Spacing';
import FontSize from '../FontSize';
import Colors from '../colors';
import Font from '../Font';
import LottieView from 'lottie-react-native';

const { height } = Dimensions.get('window');

type Props = NativeStackScreenProps<RootStackParamList, 'EditBookConfirmation'>;

const EditBookConfirmation: React.FC<Props> = ({ navigation: { navigate } }) => {
  // const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('Home');
    }, 4000);

    // Lottie
    // animationRef.current?.play();
    // animationRef.current?.play(30, 120);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View>
        <ImageBackground
          style={{
            height: height / 2.5,
          }}
          resizeMode="contain"
          source={require('../../assets/editbook-confirm.png')}
        />
        {/* <LottieView
            style={{
                height: height / 2.5,
            }}
            autoPlay
            source={require("../../assets/editbook-confirmation.json")}
        /> */}
        <View
          style={{
            paddingHorizontal: Spacing * 4,
            paddingTop: Spacing * 2,
          }}>
          <Text
            style={{
              fontSize: FontSize.xxLarge,
              color: Colors.primary,
              textAlign: 'center',
            }}>
            Successfully Modified Book!
          </Text>

          <Text
            style={{
              fontSize: FontSize.small,
              color: Colors.text,
              textAlign: 'center',
              marginTop: Spacing * 3,
            }}>
            Immerse yourself in the evolved literary exploration shaped by this modified edition
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditBookConfirmation;

const styles = StyleSheet.create({});
