import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setIsLoggedIn(isLoggedIn: boolean) {
  const loggedIn = isLoggedIn ? 'true' : 'false';

  try {
    await AsyncStorage.setItem('is-logged-in', loggedIn);
  } catch (e) {
    // saving error
  }
}

export const getIsLoggedIn = async () => {
  try {
    const value = await AsyncStorage.getItem('is-logged-in');

    if (value === 'true') {
      return true;
    }

    return false;
  } catch (e) {
    // error reading value
  }
};
