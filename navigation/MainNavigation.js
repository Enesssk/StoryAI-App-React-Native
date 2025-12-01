import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import Welcome from '../screens/Welcome/Welcome';
import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Welcome} component={Welcome} />
    </Stack.Navigator>
  );
}

export default MainNavigation;