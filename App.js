import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./stack_screens/Home";
import SignIn from "./stack_screens/Signin";
import SignUp from "./stack_screens/SignUp";
import About from "./stack_screens/about";
// import Loc from "./stack_screens/Location";
import Api from "./stack_screens/Api";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UI"
        screenOptions={{
          headerStyle: { backgroundColor: "blue" },
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Sign In" component={SignIn}></Stack.Screen>
        <Stack.Screen name="Sign up" component={SignUp}></Stack.Screen>
        <Stack.Screen name="My Profile" component={About}></Stack.Screen>
        <Stack.Screen name="Welcome to Home" component={Home}></Stack.Screen>
        {/* <Stack.Screen name="Location" component={Loc}></Stack.Screen> */}
        <Stack.Screen name="Namaz" component={Api}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
