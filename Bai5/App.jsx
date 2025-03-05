import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./(Home)/Home";
import Phone from "./(Home)/Phone";

const Stack = createNativeStackNavigator()

 const App= ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Phone">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Phone" component={Phone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App