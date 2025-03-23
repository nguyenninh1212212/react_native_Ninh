import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import SuccessScreen from './components/Success'
import PaymentScreen from './components/Payment';

// Tạo Stack Navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Payment') {
          iconName = 'card-outline'; 
        } else if (route.name === 'Success') {
          iconName = 'checkmark-circle-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#FF5733',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Payment" component={PaymentScreen} />
    <Tab.Screen name="Success" component={SuccessScreen} />
  </Tab.Navigator>
);


// Navigation chính
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return <Navigation />;
}
