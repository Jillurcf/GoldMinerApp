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

const Signup = ({navigation}) => {
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
                  Sign up
                </Text>
                <Text
                  style={tw`text-desc text-sm font-PoppinsRegular text-left`}>
                  You have to fill some information to sign in
                </Text>
              </View>

              {/* Input Fields */}
              <InputText
                containerStyle={tw`border border-white rounded-2xl h-12 w-full`}
                placeholder={'ex@gmail.com'}
                placeholderColor={'white'}
                labelStyle={tw`text-white font-PoppinsRegular`}
                label={'E-mail'}
                iconLeft={IconEnvelope}
                onChangeText={(text: any) => setEmail(text)}
              />
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
                placeholder={'Write your Location'}
                placeholderColor={'white'}
                label={'Address'}
                labelStyle={tw`text-white font-PoppinsRegular`}
                iconLeft={IconLocaiton}
              
                onChangeText={(text: any) => setPassword(text)}
            
              />

              {/* Forgot Password */}
              <View style={tw`flex-row justify-between mt-2`}>
                <TouchableOpacity onPress={() => setIsCheck(!isCheck)}>
                  {/* Optional Checkbox */}
                  <Checkbox 
                  value={isCheck} 
                  onValueChange={setIsCheck} 
                  color={'white'} // Change color as needed
                  style={tw`mr-1 `}/>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={tw`text-xs text-white font-PoppinsRegular `}>
                   By creating account you agree with 
                   <Text>
                    Terms and condition
                   </Text>
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Sign In Button */}
              <Button
              onPress={()=>navigation.navigate('VerifyOtp', {email, from: 'signup'})}
                containerStyle={tw`mt-6 bg-[#E8A934]`}
                title={'Sign up'}
              />

              {/* OR Divider */}
              <View style={tw`my-6 flex-row items-center`}>
                <View style={tw`bg-white100 h-[1px] flex-1`} />
                <Text style={tw`text-subT text-xs font-PoppinsBold mx-2`}>
                  O
                </Text>
                <View style={tw`bg-white100 h-[1px] flex-1`} />
              </View>

              {/* Google Sign In */}
              <TouchableOpacity
                style={tw`mb-2 border border-border rounded-lg p-2 flex-row items-center justify-center gap-2`}>
                <SvgXml xml={IconGoogle} />
                <Text style={tw`text-white font-PoppinsBold`}>
                  Continue with Google
                </Text>
              </TouchableOpacity>
            </View>

            {/* Sign Up Link */}
            <View style={tw`flex-row justify-center mt-4`}>
              <Text style={tw`text-xs text-white font-PoppinsRegular`}>
                Have an account?
              </Text>
              <TouchableOpacity
               onPress={()=> navigation.navigate('Login')}
              >
               
                <Text
                  style={tw`text-xs text-primary border-b border-b-white font-PoppinsRegular ml-1`}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar translucent={false} />
    </View>
  );
};

export default Signup;
