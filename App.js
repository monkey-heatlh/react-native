import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./src";
import SignUp from "./src/signup";
import SignUp2 from "./src/signup2";
import Login from "./src/login";
import Main from "./src/main";
import "./App.css";
import Exercise from "./src/exercise";
import Detail from "./src/detail";
import CameraScreen from "./src/camera";
import MakeRoutine from "./src/makeRoutine";
import CalendarScreen from "./src/calender";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="calender"
          component={CalendarScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="makeRoutine"
          component={MakeRoutine}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="camera"
          component={CameraScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="detail"
          component={Detail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="exercise"
          component={Exercise}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="main"
          component={Main}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <Stack.Screen
        name="signup2"
        component={SignUp2}
        options={{ headerShown: false }}
      />
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
    </NavigationContainer>
  );
}
