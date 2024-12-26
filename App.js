import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./src";
import SignUp from "./src/signup";
import SignUp2 from "./src/signup2";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup2"
          component={SignUp2}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
