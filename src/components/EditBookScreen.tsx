import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../App';
import colors from '../colors';
import Spacing from '../Spacing';
import FontSize from '../FontSize';
import AppTextInput from './FormTextInput';

type Props = NativeStackScreenProps<RootStackParamList, 'EditBook'>;

const EditBookScreen: React.FC<Props> = ({ route, navigation }) => {
  // Retrieve parameters from route.params
  const { bookName, ISBN, contactEmail, price } = route.params as any;

  // State to store updated values
  const [updatedBookName, setUpdatedBookName] = useState(bookName);
  const [updatedISBN, setUpdatedISBN] = useState(ISBN);
  const [updatedContactEmail, setUpdatedContactEmail] = useState(contactEmail);
  const [updatedPrice, setUpdatedPrice] = useState(price);

  // Function to handle book modification
  const handleModifyBook = () => {
    navigation.replace('EditBookConfirmation');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Edit Book</Text>
            <Text style={styles.subHeaderText}>Remaster your book!</Text>
          </View>
          <View style={styles.formContainer}>
            <AppTextInput
              placeholder="Book Name"
              value={updatedBookName}
              onChangeText={(text) => setUpdatedBookName(text)}
            />
            <AppTextInput
              placeholder="ISBN"
              value={updatedISBN}
              onChangeText={(text) => setUpdatedISBN(text)}
            />
            <AppTextInput
              placeholder="Contact Email"
              value={updatedContactEmail}
              onChangeText={(text) => setUpdatedContactEmail(text)}
            />
            <AppTextInput
              placeholder="Price"
              value={updatedPrice}
              onChangeText={(text) => setUpdatedPrice(text)}
            />
          </View>

          <TouchableOpacity style={styles.modifyButton} onPress={handleModifyBook}>
            <Text style={styles.buttonText}>Modify Book</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: Spacing * 2,
  },
  header: {
    alignItems: 'center',
    marginVertical: Spacing * 3,
  },
  headerText: {
    fontSize: FontSize.xLarge,
    color: colors.primary,
    marginVertical: Spacing * 3,
  },
  subHeaderText: {
    fontSize: FontSize.large,
    maxWidth: '60%',
    textAlign: 'center',
    paddingTop: 0,
  },
  formContainer: {
    marginVertical: Spacing * 3,
  },
  modifyButton: {
    padding: Spacing * 2,
    backgroundColor: colors.primary,
    marginVertical: Spacing * 3,
    borderRadius: Spacing,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.onPrimary,
    fontSize: FontSize.large,
  },
});

export default EditBookScreen;
