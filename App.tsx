import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import SOS from './pages/SOS';
import Jobs from './pages/Jobs';
import Community from './pages/Community/Community';
import CommunityPosts from './pages/Community/CommunityPost';
import ViewPost from './pages/Community/ViewPost';
import Therapy from './pages/Therapy';
import LegalReforms from './pages/LegalReforms';
import PersonalGuide from './pages/PersonalGuide';
import Skill from './pages/Skill';
import FinancialGuidance from './pages/FinancialGuidance';

const Stack = createStackNavigator();

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginRight: 10 }}>
      <Pressable onPress={() => navigation.navigate("SOS" as never)}>
        <Image source={require('./assets/images/sos.png')} style={styles.image} />
      </Pressable>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Get Started"
        // initialRouteName="FinancialGuidance"
      >
        <Stack.Screen name="Get started" component={Landing} options={{
          title: 'Welcome',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          },
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          title: 'Login',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          }
        }} />
        <Stack.Screen name="Signup" component={Signup} options={{
          title: 'Signup',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          }
        }} />
        <Stack.Screen name="Home" component={Home} options={{
          title: 'Home',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          },
          headerRight: () => <Profile />,
        }} />
        <Stack.Screen name="SOS" component={SOS} options={{
          title: 'SOS',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          },
          headerRight: () => <Profile />,
        }} />
        <Stack.Screen name="Jobs" component={Jobs} options={{
          title: 'Jobs',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          },
          headerRight: () => <Profile />,
        }} />
        <Stack.Screen name="Community" component={Community} options={{
          title: 'Community',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          },
          headerRight: () => <Profile />,
        }} />
        <Stack.Screen name="CommunityPosts" component={CommunityPosts} options={{
          title: 'Community Post',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          },
          headerRight: () => <Profile />,
        }} />
        <Stack.Screen
          name="ViewPost"
          options={{
            title: 'View Post',
            headerTintColor: '#590D22',
            headerStyle: {
              backgroundColor: '#FFB3C1'
            },
            headerRight: () => <Profile />,
          }}
        >
          {(props: any) => <ViewPost {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Therapy" component={Therapy} options={{
          title: 'Therapy',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          },
          headerRight: () => <Profile />,
        }} />
        <Stack.Screen name="LegalReforms" component={LegalReforms} options={{
          title: 'Legal Reforms',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          },
          headerRight: () => <Profile />,
        }} />
        <Stack.Screen name="PersonalGuide" component={PersonalGuide} options={{
          title: 'Personal Guide',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          },
          headerRight: () => <Profile />,
        }} />

        <Stack.Screen name="Skill" component={Skill} options={{
          title: 'Skill',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          },
          headerRight: () => <Profile />,
        }} />

        <Stack.Screen name="FinancialGuidance" component={FinancialGuidance} options={{
          title: 'Financial Guide',
          headerTintColor: '#590D22',
          headerStyle: {
            backgroundColor: '#FFB3C1'
          },
          headerRight: () => <Profile />,
        }} />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  image: {
    height: 45,
    width: 45,
  }
})
