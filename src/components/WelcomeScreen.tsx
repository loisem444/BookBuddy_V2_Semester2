import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.welcome}>
        <Image source={require('../../assets/applogo.png')} style={styles.logo} />
        <Text style={styles.appName}>Welcome to BookBuddy</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.signUpText}>
            Don't have an account? <Text style={styles.signUp}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1f5fe',
  },
  welcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#3E4E5E', // Darker text for contrast
  },
  input: {
    height: 50,
    width: '90%',
    borderColor: '#3E4E5E',
    borderWidth: 1,
    marginBottom: 15,
    padding: 15,
    borderRadius: 5,
    backgroundColor: 'white', // White input background
    fontSize: 16,
  },
  button: {
    width: '90%',
    backgroundColor: '#1E88E5', // A shade of blue for the button
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#000', // Adding shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 20,
    fontSize: 16,
    color: '#3E4E5E',
  },
  signUp: {
    color: '#1E88E5',
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;
