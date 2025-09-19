// App.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MenuScreen from './screens/MenuScreen';
import FoodDetailScreen from './screens/FoodDetailScreen'; // Renamed from food.js
import YourOrderScreen from './screens/YourOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import OrderSummary from './screens/OrderSummary';
import PaymentScreen from './screens/PaymentScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUp';
import SignInScreen from './screens/SignIn';
import StartPage from './screens/StartPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartPage" component = {StartPage}/>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="SignUp" component = {SignUpScreen}/>
        <Stack.Screen name= "HomeScreen" component = {HomeScreen}/>
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="FoodDetailScreen" component={FoodDetailScreen} />
        <Stack.Screen name="YourOrderScreen" component={YourOrderScreen} />
        <Stack.Screen name= "DeliveryScreen" component={DeliveryScreen}/>
        <Stack.Screen name= "OrderSummary" component = {OrderSummary}/>
        <Stack.Screen name="PaymentScreen" component = {PaymentScreen}/>
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
