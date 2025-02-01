import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoaderScreen } from 'react-native-ui-lib';
import Login from '../screen/Auth/Login';
import Signup from '../screen/Auth/SignUp';
import VerifyOtp from '../screen/Auth/VerifyOtp';
import ForgetPassword from '../screen/Auth/ForgetPass';
import CreateNewPassword from '../screen/Auth/CreateNewPass';

const Stack = createNativeStackNavigator();
const Routes = ()=> {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Signup' component={Signup} />
      <Stack.Screen name='VerifyOtp' component={VerifyOtp} />
      <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
      <Stack.Screen name='CreateNewPassword' component={CreateNewPassword} />
    </Stack.Navigator>
  )
}

export default Routes