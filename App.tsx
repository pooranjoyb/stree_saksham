import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      // initialRouteName="Get Started"
      // initialRouteName="Home"
      >
        <Stack.Screen name="Get started" component={Landing} options={{
          title: 'Welcome',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          }
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          title: 'Login',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          }
        }}/>
        <Stack.Screen name="Signup" component={Signup} options={{
          title: 'Signup',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          }
        }}/>
        <Stack.Screen name="Home" component={Home} options={{
          title: 'Home',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          }
        }}/>

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
