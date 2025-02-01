import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {SafeAreaView} from 'react-native-safe-area-context';
import Routes from './Routes';

// import { Provider } from 'react-redux';
// import store from '../redux/store';

const AppRoutes = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <Routes />
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default AppRoutes;
