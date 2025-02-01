import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import tw from '../../lib/tailwind';
import Button from '../../component/Button';
import InputText from '../../component/InputText';
import {
  IconCloseEye,
  IconEnvelope,
  IconGoogle,
  IconKey,
  IconLocaiton,
  IconOpenEye,
} from '../../assets/icon/icon';
import {SvgXml} from 'react-native-svg';
import { Checkbox } from 'react-native-ui-lib';

const CreateNewPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  return (
    <View style={tw`flex-1 bg-black w-[100%]`}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View style={tw`flex-1 items-center justify-center p-4 w-full`}>
          <View style={tw``}>
            {/* Logo */}
            <View style={tw`items-center mb-4 m-12`}>
              <Image source={require('../../assets/images/logo.png')} />
            </View>

            <View style={tw` bg-gray-500/20 opacity-80 rounded-xl p-4 w-full z-10`}>
              {/* Heading */}
              <View style={tw`py-6`}>
                <Text
                  style={tw`text-white font-PoppinsBold text-2xl text-left z-30`}>
                 Resset Password
                </Text>
                <Text
                  style={tw`text-desc text-sm font-PoppinsRegular text-left`}>
                  You have to fill some information to sign in
                </Text>
              </View>

              {/* Input Fields */}
             
              <InputText
                containerStyle={tw`border border-white rounded-2xl h-12`}
                placeholder={'Enter your password'}
                placeholderColor={'white'}
                label={'Password'}
                labelStyle={tw`text-white font-PoppinsRegular`}
                iconLeft={IconKey}
                iconRight={isShowPassword ? IconOpenEye : IconCloseEye}
                onChangeText={(text: any) => setPassword(text)}
                isShowPassword={!isShowPassword}
                rightIconPress={() => setIsShowPassword(!isShowPassword)}
              />
              <InputText
                containerStyle={tw`border border-white rounded-2xl h-12`}
                placeholder={'Re enter password'}
                placeholderColor={'white'}
                label={'Confirm Password'}
                labelStyle={tw`text-white font-PoppinsRegular`}
                iconLeft={IconKey}
                iconRight={isShowPassword ? IconOpenEye : IconCloseEye}
                onChangeText={(text: any) => setPassword(text)}
                isShowPassword={!isShowPassword}
                rightIconPress={() => setIsShowPassword(!isShowPassword)}
              />
              

          

              {/* Sign In Button */}
              <Button
              onPress={()=>navigation.navigate('Login')}
                containerStyle={tw`mt-6 bg-[#E8A934]`}
                title={'Done'}
              />

              

              
            </View>

       
           
          </View>
        </View>
      </ScrollView>
      <StatusBar translucent={false} />
    </View>
  );
};

export default CreateNewPassword;
