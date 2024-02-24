import * as React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import colors from '../colors';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Book {
  id: string;
  name: string;
  shortDescription: string;
  coverImage: string;
  authors: string;
  ISBN: string;
  Edition: string;
  price: string;
  contactEmail: string;
}

type Props = NativeStackScreenProps<RootStackParamList, 'ViewBook'>;

const ViewBookScreen: React.FC<Props> = ({ route, navigation }) => {
  const { book, previousScreen } = route.params;

  // Check if the previous screen is 'MyBookScreen'
  const isFromMyBooksScreen = previousScreen === 'MyBookScreen';

  // Function to handle delete action
  const handleDelete = (id: string) => {
    Alert.alert(
      'Confirm Action',
      'Are you sure you want to Delete?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancelled'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            navigation.replace('MyBooks');
          },
        },
      ],
      { cancelable: true },
    );
  };

  // Function to handle edit action
  const handleEdit = () => {
    // navigation.replace('EditBook');
    navigation.navigate('EditBook', {
      bookName: book.name,
      ISBN: book.ISBN,
      contactEmail: book.contactEmail,
      price: book.price,
    } as any);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={book.coverImage} resizeMode="cover" />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{book.name}</Text>
        <Text style={styles.author}>By {book.authors}</Text>
        <View style={styles.separator} />
        <Text style={styles.description}>Description: </Text>
        <Text style={styles.description}>{book.shortDescription}</Text>
        <View style={styles.separator} />
        <Text style={styles.author}>ISBN: {book.ISBN}</Text>
        <View style={styles.separator} />
        <Text style={styles.author}>Edition: {book.Edition}</Text>
        <View style={styles.separator} />

        <Text style={styles.priceText}>Price : ${book.price}</Text>
        <View style={styles.separator} />

        <TouchableOpacity style={styles.button}>
          <Icon name="envelope" size={20} color="#FFFFFF" style={styles.icon} />
          <Text style={styles.emailText}>{book.contactEmail}</Text>
        </TouchableOpacity>
      </View>

      {isFromMyBooksScreen && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(book.id)}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default ViewBookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'rgba(173, 216, 230, 0.5)',
    borderRadius: 15,
  },
  image: {
    width: 100,
    height: 150,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: 'rgba(173, 216, 230, 0.5)',
    borderRadius: 15,
    marginTop: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
  },
  priceText: {
    color: colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 90,
  },
  separator: {
    height: 2,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    marginBottom: 10,
    marginTop: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    backgroundColor: 'rgba(173, 216, 230, 0.5)',
    borderRadius: 15,
  },
  deleteButton: {
    width: 125,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'rgba(238, 75, 43, 0.5)',
    margin: 10,
  },
  editButton: {
    width: 125,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'rgba(80, 200, 120, 0.5)',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  //email buttoon
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498db', // Button background color
    padding: 10,
    borderRadius: 5,
  },
  icon: {
    marginRight: 20,
  },
  emailText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
