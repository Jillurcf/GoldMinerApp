import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
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

const VerifyOtp = ({navigation, route}) => {
  const [otp, setOtp] = useState<string>('');
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputs = useRef<Array<TextInput | null>>([]);
  const {from} = route?.params || {};
  console.log(from)
  const email = route?.params?.email
  const allFilled =
    otp.length === 6 && otp.split('').every(item => item !== '');
  const closeCustomAlert = () => {
    // setAlertVisible(false);
  };
  const handleChangeText = (text: string, index: number) => {
    if (text.length > 1) {
      text = text.slice(-1);
    }

    const newOtp = otp.split('');
    newOtp[index] = text;
    setOtp(newOtp.join(''));

    if (text !== '' && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = ({nativeEvent}: any, index: number) => {
    if (nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };
  const handleSendOtp = async () => {
    console.log('click');
    try {
      // if (response) {
      console.log('OTP Verified Successfully!');
      if (from === 'signup') {
        navigation.navigate('Login'); // Navigate to Login if from signup
      } else {
        navigation.navigate('CreateNewPassword', {email}); // Otherwise, go to CreateNewPass
      }
      // } else {
      //   console.error("OTP verification failed:", );
      // }
    } catch (err) {
      // Log error details for debugging
      console.error('Error verifying OTP:', err);
    }
  };
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

            <View style={tw` gap-y-6 `}>
              <View
                style={tw`flex-row justify-between items-center gap-2 bg-gray-500/20 opacity-80 rounded-xl p-4 w-full z-10`}>
                {Array.from({length: 6}).map((_, index) => (
                  <TextInput
                    key={index}
                    ref={ref => (inputs.current[index] = ref)}
                    value={otp[index] || ''}
                    onChangeText={text => handleChangeText(text, index)}
                    onKeyPress={e => handleKeyPress(e, index)}
                    onFocus={() => setFocusedIndex(index)}
                    onBlur={() => setFocusedIndex(null)}
                    style={tw`${
                      focusedIndex === index ? 'border-primary' : 'border-title'
                    } border-[1px] rounded-2xl flex-1 h-16 font-extrabold text-center text-4xl font-RoboBold text-primary`}
                    keyboardType="numeric"
                    selectionColor={'#064145'}
                    placeholderTextColor={'#949494'}
                    placeholder="0"
                    maxLength={1}
                    autoFocus={index === 0}
                  />
                ))}
              </View>
              <TouchableOpacity>
                <Text style={tw`text-white font-PoppinsRegular`}>
                  Rsend otp
                </Text>
              </TouchableOpacity>

              <Button
                disabled={!allFilled}
                title={'Submit'}
                containerStyle={tw`${
                  !allFilled ? 'opacity-70' : ''
                } mt-4 font-PoppinsRegular`}
                onPress={handleSendOtp}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar translucent={false} />
    </View>
  );
};

export default VerifyOtp;
