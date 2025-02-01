import {StatusBar, StyleSheet, View} from 'react-native';
// import {getSocket, initiateSocket} from '../../redux/services/socket';

import React from 'react';
import FastImage from 'react-native-fast-image';
// import {NavigProps} from '../../interfaces/NaviProps';
import tw from '../../lib/tailwind';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCheckTokenMutation, useLazyGetCheckTokenQuery } from '../../redux/api/apiSlice/apiSlice';
import { getStorageToken } from '../../utils/Utils';
// import {getStorageToken} from '../../utils/utils';

const LoadingSplash = ({navigation}) => {
  // const token = AsyncStorage.getItem('token');
  const [triggerCheckToken, { data, error, isLoading }] = useLazyGetCheckTokenQuery()
 const token = getStorageToken()
 console.log("17", token)
  // const token = AsyncStorage.getItem('token');
//   const socket = getSocket();
  const [checkToken] = useCheckTokenMutation({});
  // console.log(token);
  const handleCheckValidToken = async () => {
    try {
      const res = await triggerCheckToken(token).unwrap();
      // const res = await checkToken(token).unwrap();
      console.log("loading token++++++++++++++++++++++", res)
      if (res.token_status) {
        (navigation as any)?.replace('Drawer');
      } else {
        (navigation as any)?.replace('Login');
      }
    } catch (error) {
      console.log("28", error);
      (navigation as any)?.replace('Login');
    }
  };
  React.useEffect(() => {
    if (token) {
    //   if (!socket) {
    //     initiateSocket();
    //   }
      handleCheckValidToken();
    } else {
      (navigation as any)?.replace('Login');
    }
  }, []);

  return (
    <View style={tw`flex-1 w-full bg-primary justify-center items-center`}>
      <FastImage
        style={tw`w-28 h-28 flex-1 `}
        resizeMode={FastImage.resizeMode.contain}
        source={require('../../assets/images/logo.png')}
      />
      <StatusBar barStyle="light-content" backgroundColor={'#4964C6'} />
    </View>
  );
};

export default LoadingSplash;

const styles = StyleSheet.create({});
