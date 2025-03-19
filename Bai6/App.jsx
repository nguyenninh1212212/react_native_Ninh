import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './components/Home';
import LoginScreen from './components/Login';
import { AuthProvider } from './components/AuthProvider';
import SignScreen from './components/Signout';

// Tạo Stack Navigator cho màn hình Login
const Stack = createStackNavigator();
const AuthStack = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

// Tạo Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'Signout') {
          iconName = 'log-out-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#FF5733',
      tabBarInactiveTintColor: 'gray',
      headerShown: false, // Ẩn header trên các tab
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Signout" component={SignScreen} />
  </Tab.Navigator>
);

// Navigation chính
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
