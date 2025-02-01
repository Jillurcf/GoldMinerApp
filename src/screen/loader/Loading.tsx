import {View, Image} from 'react-native';
import React from 'react';
import tw from '../../lib/tailwind';

const Loading = () => {
  return (
    <View style={tw`h-full justify-center items-center bg-white`}>
      <Image source={require('../../assets/images/logo.png')}/>
    </View>
  );
};

export default Loading;
