import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoaderScreen } from 'react-native-ui-lib';
import Login from '../screen/Auth/Login';
import Signup from '../screen/Auth/SignUp';
import VerifyOtp from '../screen/Auth/VerifyOtp';
import ForgetPassword from '../screen/Auth/ForgetPass';
import CreateNewPassword from '../screen/Auth/CreateNewPass';
import BottomRoutes from './BottomRoutes';
import DrawerRoute from './DrawerRoutes';
import ProductDetails from '../screen/productDetails/ProductDetails';
import Payment from '../screen/payment/Payment';
import MyCart from '../screen/myCart/MyCart';
import EditProfile from '../screen/profile/EditProfile';

const Stack = createNativeStackNavigator();
const Routes = ()=> {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}
    >
         <Stack.Screen name="Drawer" component={DrawerRoute} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='VerifyOtp' component={VerifyOtp} />
      <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
      <Stack.Screen name='CreateNewPassword' component={CreateNewPassword} />
      <Stack.Screen name='ProductDetails' component={ProductDetails} />
      <Stack.Screen name='Payment' component={Payment} />
      <Stack.Screen name='MyCart' component={MyCart} />
      <Stack.Screen name='EditProfile' component={EditProfile} />
   
    </Stack.Navigator>
  )
}

export default Routes