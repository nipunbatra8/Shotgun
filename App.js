import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ApiKeys from './constants/ApiKeys';
import firebase from 'firebase';

import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Explore from './screens/Explore';
import Explore2 from './screens/Explore2';
import FindARide from './screens/FindARide';
import FindARide2 from './screens/FindARide2';
import HostARide from './screens/HostARide';
import HostARide2 from './screens/HostARide2';
import Options from './screens/Options';
import Profile from './screens/Profile';
import TripCalculator from './screens/TripCalculator';
import TripCalculator2 from './screens/TripCalculator2';
import TripCalculator3 from './screens/TripCalculator3';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />

      <Stack.Screen name="Explore" component={Explore} options={{ headerShown: true, headerTransparent: true, title: '' }} />

      <Stack.Screen name="FindARide" component={FindARide} options={{ headerShown: true, headerTransparent: true, title: '' }} />

      <Stack.Screen name="HostARide" component={HostARide} options={{ headerShown: true, headerTransparent: true, title: '' }} />

      <Stack.Screen name="Options" component={Options} options={{ headerShown: false }} />

      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

      <Stack.Screen name="TripCalculator" component={TripCalculator} options={{ headerShown: true, headerTransparent: true, title: '' }} />

      <Stack.Screen name="TripCalculator2" component={TripCalculator2} options={{ headerShown: true, headerTransparent: true, title: '' }} />

      <Stack.Screen name="TripCalculator3" component={TripCalculator3} options={{ headerShown: false }} />

      <Stack.Screen name="HostARide2" component={HostARide2} options={{ headerShown: false }} />

      <Stack.Screen name="FindARide2" component={FindARide2} options={{ headerShown: false }} />

      <Stack.Screen name="Explore2" component={Explore2} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Initialize firebase...
if (!firebase.apps.length) {
  firebase.initializeApp(ApiKeys.FirebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
