import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: true, headerTransparent: true, title: '' }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: true, headerTransparent: true, title: '' }} />
      {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: true, headerTransparent: true, title: '' }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="Connect" component={Connect} options={{ headerShown: true, headerTransparent: true, title: '' }} />
      <Stack.Screen name="Experience" component={Experience} options={{ headerShown: true, headerTransparent: true, title: '' }} />
      <Stack.Screen name="Interests" component={Interests} options={{ headerShown: true, headerTransparent: true, title: '' }} />
      <Stack.Screen name="Groups" component={Groups} options={{ headerShown: true, headerTransparent: true, title: '' }} />
      <Stack.Screen name="GroupChats" component={GroupChats} options={{ headerShown: true, headerTransparent: true, title: '' }} /> */}
    </Stack.Navigator>
  );
}

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isAuthenticationReady: false,
//       isAuthenticated: false,
//     };

//     // Initialize firebase...
//     if (!firebase.apps.length) {
//       firebase.initializeApp(ApiKeys.FirebaseConfig);
//     }
//   }

//   render() {
//     return (
//       
//     );
//   }
// }

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
