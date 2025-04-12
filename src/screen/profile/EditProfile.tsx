//

import {View, Text, ScrollView, TouchableOpacity, Image, StatusBar} from 'react-native';
import React, {useState} from 'react';
import tw from '../../lib/tailwind';

import {SvgXml} from 'react-native-svg';

import {launchImageLibrary} from 'react-native-image-picker';
import {
  IconBack,
  IconCloseEye,
  IconEdit,
  IconKey,
  IconOpenEye,
  IconTik,
} from '../../assets/icon/icon';
import InputText from '../../component/InputText';
import Button from '../../component/Button';
import NormalModal from '../../component/NormalModal';

const EditProfile = ({navigation}: any) => {
  // State declarations
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isShowOldPassword, setIsShowOldPassword] = useState(false);
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [imageUri, setImageUri] = useState<any>(null);
  const [saveChangesModalVisible, setSaveChangesModalVisible] = useState(false);
  console.log('38', imageUri);
  // API hooks

  // Log profile data for debugging
  console.log('ProfileData', oldPassword, newPassword, confirmPassword);

  // Form data
  const data = {
    name: username,
    address: location,
    image: imageUri,
  };

  // console.log('Form Data:', data);

  // Handle image picker
  const handleAccessGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled gallery picker');
        } else if (response.errorCode) {
          console.error('Gallery Error:', response.errorMessage);
        } else if (response.assets) {
          const uri = response.assets.map(asset => asset.uri);
          setImageUri(uri);
        }
      },
    );
  };

  // console.log('Selected Image URI:', imageUri);

  // Handle save profile
  //   const handleSaveProfile = async () => {
  //     try {
  //       const formData = new FormData();

  //       // Add name and address to FormData
  //       formData.append('name', username || profileData?.data?.name);
  //       formData.append('address', location || profileData?.data?.address);

  //       // Add image to FormData (if available)
  //       if (imageUri && imageUri.length > 0) {
  //         const fileUri = imageUri[0]; // Assuming single image
  //         const fileName = fileUri.split('/').pop();
  //         const fileType = `image/${fileName?.split('.').pop()}`;
  //         formData.append('image', {
  //           uri: fileUri,
  //           name: fileName,
  //           type: fileType,
  //         });
  //       }

  //       console.log('Form Data:', formData);

  //       const response = await postEditProfile(formData).unwrap();
  //       console.log('Profile Updated Successfully:', response);

  //       if (response) {
  //         setSaveChangesModalVisible(true);
  //       }
  //     } catch (error) {
  //       console.error('Failed to save profile:', error);
  //     }
  //   };

  // handle password
  const handleChangePassword = async () => {
    console.log('click');

    // Prepare the payload
    const payload = {
      current_password: oldPassword,
      new_password: newPassword,
      c_password: confirmPassword,
    };

    console.log('updatePassword', payload);

    // try {
    //   // Call the mutation directly with the payload
    //   const response = await postChangePassword(payload).unwrap();

    //   console.log("change password", response);

    //   // Show success modal
    //   setSaveChangesModalVisible(true);
    // } catch (error) {
    //   // Handle errors
    //   console.log("Error changing password:", error);

    //   if (error?.data?.message) {
    //     console.error("Validation errors:", error.data.message);
    //   }
    // }
  };

  return (
    <View style={tw`bg-white px-[4%] h-full pb-2`}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={tw`flex-row items-center py-2`}>
          <TouchableOpacity
            style={tw`flex-row items-center gap-2`}
            onPress={() => navigation.goBack()}>
            <SvgXml xml={IconBack} />
            <Text style={tw`text-title text-base font-PoppinsMedium`}>
              Profilo
            </Text>
          </TouchableOpacity>
        </View>

        {/* Profile Picture */}
        <View style={tw`mt-4 items-center`}>
          <View>
            <Image
              source={require('../../assets/images/avatar.png')}
                source={{uri: imageUri?.length ? imageUri[0] : require('../../assets/images/avatar.png')}}
              style={tw`h-18 w-18 rounded-full`}
            />
            <TouchableOpacity
              style={tw`absolute bottom-2 right-[-2] bg-primary w-7 h-7 rounded-full flex-row items-center justify-center gap-1`}
              onPress={handleAccessGallery}>
              <SvgXml xml={IconEdit} height={16} width={16} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Inputs */}
        <View style={tw`mt-4`}>
          <InputText
            containerStyle={tw`border border-gray-200 rounded-xl`}
            placeholder={'Enter your name'}
            placeholderColor={'#949494'}
            label={'Your name'}
            labelStyle={tw`text-black font-PoppinsBold`}
            onChangeText={text => setUsername(text)}
          />
          <InputText
            containerStyle={tw`border border-gray-200 rounded-xl`}
            placeholder={'Enter your position'}
            placeholderColor={'#949494'}
            label={'Position'}
            labelStyle={tw`text-black font-PoppinsBold`}
            onChangeText={text => setLocation(text)}
          />
          <Button
            title="Save modification"
            containerStyle={tw`flex-1`}
            // onPress={handleSaveProfile}
          />

          {/* Password Update Section */}
          <Text
            style={tw`text-center text-title text-2xl font-PoppinsBold my-4`}>
            Update your password
          </Text>
          <InputText
          containerStyle={tw`border border-gray-200 px-0 rounded-xl`}
            placeholder={'Enter your old password'}
            placeholderColor={'#949494'}
            label={'Old password'}
            iconLeft={IconKey}
            iconRight={isShowOldPassword ? IconOpenEye : IconCloseEye}
            isShowPassword={!isShowOldPassword}
            rightIconPress={() => setIsShowOldPassword(!isShowOldPassword)}
            onChangeText={text => setOldPassword(text)}
          />
          <InputText
          containerStyle={tw`border border-gray-200  px-0 rounded-xl`}
            placeholder={'Enter your new password'}
            placeholderColor={'#949494'}
            label={'New password'}
            iconLeft={IconKey}
            iconRight={isShowNewPassword ? IconOpenEye : IconCloseEye}
            isShowPassword={!isShowNewPassword}
            rightIconPress={() => setIsShowNewPassword(!isShowNewPassword)}
            onChangeText={text => setNewPassword(text)}
          />
          <InputText
          containerStyle={tw`border border-gray-200  px-0 rounded-xl`}
            placeholder={'Enter confirm password'}
            placeholderColor={'#949494'}
            label={'Confirm password'}
            iconLeft={IconKey}
            iconRight={isShowConfirmPassword ? IconOpenEye : IconCloseEye}
            isShowPassword={!isShowConfirmPassword}
            rightIconPress={() =>
              setIsShowConfirmPassword(!isShowConfirmPassword)
            }
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>

        {/* Save Button */}
        <View style={tw`mt-4 gap-y-4`}>
          <Button
            title="Save modification"
            containerStyle={tw``}
            onPress={handleChangePassword}
            // onPress={() => setSaveChangesModalVisible(true)}
          />
        </View>

        {/* Save Changes Modal */}
        <NormalModal
          layerContainerStyle={tw`flex-1 justify-center items-center mx-5`}
          containerStyle={tw`rounded-xl bg-white p-5`}
          visible={saveChangesModalVisible}
          setVisible={setSaveChangesModalVisible}>
          <View>
            <View style={tw`items-center mb-2`}>
              <SvgXml xml={IconTik} height={60} width={60} />
            </View>
            <Text
              style={tw`text-center text-title text-2xl font-PoppinsBold mb-2`}>
              Your profile has been {'\n'}updated
            </Text>
            <Button
              title="Done"
              onPress={() => {
                setSaveChangesModalVisible(false);
                navigation.goBack();
              }}
            />
          </View>
        </NormalModal>
      </ScrollView>
      <StatusBar translucent={false}/>
    </View>
  );
};

export default EditProfile;
