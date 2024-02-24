import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import HomeScreen from './src/components/HomeScreen';
import LoginScreen from './src/components/LoginScreen';
import CreateAccountScreen from './src/components/CreateAccountScreen';
import MyBooksScreen from './src/components/MyBooksScreen';
import NewBookScreen from './src/components/NewBookScreen';
import NewBookConfirmation from './src/components/NewBookConfirmation';
import ViewBookScreen from './src/components/ViewBookScreen';
import EditBookScreen from './src/components/EditBookScreen';
import EditBookConfirmation from './src/components/EditBookConfirmation';
import MenuScreen from './src/components/MenuScreen';
import WelcomeScreen from './src/components/WelcomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MenuIconButton } from './src/components/MenuIconButton';
import { getIsLoggedIn } from './src/utils/auth';

import { Book } from './src/types';

import colors from './src/colors';

export type RootStackParamList = {
  HomeTabs: undefined;
  Home: undefined;
  Login: undefined;
  CreateAccount: undefined;
  MyBooks: undefined;
  NewBook: undefined;
  NewBookConfirmation: undefined;
  EditBook: undefined;
  EditBookConfirmation: undefined;
  ViewBook: { book: Book; previousScreen: String };
  Menu: undefined;
  Welcome: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
                   ? 'home'
                   : 'home-outline';
        } else if (route.name === 'Menu') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        } else if (route.name === 'MyBooks') {
          iconName = focused ? 'book' : 'book-outline';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.darkText,
    })}>
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Listed Books', headerLeft: () => <MenuIconButton /> }}
      />
      <RootStack.Screen name="MyBooks" component={MyBooksScreen} options={{ title: 'My Books' }} />
      <RootStack.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean | undefined>(false);
  const [hasCheckedAuth, setHasCheckedAuth] = React.useState<boolean>(false);

  async function setAuthStatus() {
    const isAuthenticated = await getIsLoggedIn();
    setIsLoggedIn(isAuthenticated);
    setHasCheckedAuth(true)
  }

  React.useEffect(() => {
    setAuthStatus();
  }, []);

  if(!hasCheckedAuth) {
    return
  }

  const initialRoute = isLoggedIn ? 'HomeTabs' : 'Welcome'

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={initialRoute}
      >
        <RootStack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
        <RootStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <RootStack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ title: 'Create Account' }}
        />
        <RootStack.Screen
          name="MyBooks"
          component={MyBooksScreen}
          options={{ title: 'My Books' }}
        />
        <RootStack.Screen
          name="NewBook"
          component={NewBookScreen}
          options={{ title: 'New Books' }}
        />
        <RootStack.Screen
          name="NewBookConfirmation"
          component={NewBookConfirmation}
          options={{ title: 'New Books Confirmation' }}
        />
        <RootStack.Screen
          name="ViewBook"
          component={ViewBookScreen}
          options={{ title: 'View Books' }}
        />
        <RootStack.Screen
          name="EditBook"
          component={EditBookScreen}
          options={{ title: 'Edit Book Details Screen' }}
        />
        <RootStack.Screen
          name="EditBookConfirmation"
          component={EditBookConfirmation}
          options={{ title: 'Edit BookConfirmation' }}
        />
        <RootStack.Screen name="Menu" component={MenuScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);
