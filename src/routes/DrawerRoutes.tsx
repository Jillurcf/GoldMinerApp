import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomRoutes from './BottomRoutes';
import {ActivityIndicator, Image, Text, TouchableOpacity, View} from 'react-native';
import tw from '../lib/tailwind';
import {Switch} from 'react-native-ui-lib';
import {SvgXml} from 'react-native-svg';
// import {IconLogout} from '../assets/icons/Icons';
// import NormalModal from '../components/NormalModal';

import NormalModal from '../component/NormalModal';
import Button from '../component/Button';

function DrawerContent({navigation}: any) {
  const [vacationMode, setVacationMode] = useState(true);
  const [logoutConfirmationModalVisible, setLogoutConfirmationModalVisible] =
    useState(false);
  
  const handleVacationMode = () => {
    setVacationMode(!vacationMode);
  };

//   const handleLogout = async () => {
//     try {
//       const token = getStorageToken();
//           console.log("token", token)
//       // Trigger your logout API call
//       const response = await postLogOut(token);
//       console.log('Logout API Response:', response);
//       removeStorageToken()
//       // Sign out the user using GoogleSignin
//       // await GoogleSignin.signOut();
//       console.log('Google Signout Successful');
      
//       // Log success message
//       console.log('User signed out successfully');
  
//       // Navigate to the Login screen
//       navigation?.replace('LoadingSplash');
    
//       // Close the logout confirmation modal
//       setLogoutConfirmationModalVisible(false);
//     } catch (error) {
//       // Handle errors
//       console.error('Error signing out:', error);
//     }
//   };
//   if (isLoading) {
//     return (
//       <View style={tw`flex-1 justify-center items-center`}>
//         <ActivityIndicator size="large" color="#064145" />
//         <Text style={tw`text-primary mt-2`}>Loading products...</Text>
//       </View>
//     );
//   }

 

  return (
    <View style={tw`px-4 py-8 h-full justify-between`}>
      <View>
        <View style={tw`flex-row items-center justify-center`}>
          <Image
            source={require('../assets/images/logo.png')}
            style={tw`h-22 w-22`}
          />
        </View>
        <View style={tw`mt-4 gap-y-5`}>
          <TouchableOpacity
            // onPress={() =>
            //   navigation?.navigate('MyOrder', {
            //     // products: [...Array(10)],
            //     title: 'I miei ordini',
            //     from: 'myOrders',
            //   })
            // }
            >
            <Text style={tw`text-title text-sm font-PoppinsMedium`}>
              I miei ordini
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() =>
            //   navigation?.navigate('SellOrder', {
            //     // products: [...Array(10)],
            //     title: 'Vendi ordini',
            //     from: 'sellOrders',
            //   })
            // }
            >
            <Text style={tw`text-title text-sm font-PoppinsMedium`}>
              Vendi ordini
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() =>
            //   navigation?.navigate('WishList', {
            //     // products: [...Array(10)],
            //     title: 'Lista dei desideri',
            //     from: 'wishList',
            //   })
            // }
            >
            <Text style={tw`text-title text-sm font-PoppinsMedium`}>
            Lista dei desideri
            </Text>
          </TouchableOpacity>
          {/* <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`text-title text-sm font-PoppinsMedium`}>
              Modalità vacanza
            </Text>
            <Switch
              value={vacationMode}
              onValueChange={handleVacationMode}
              thumbSize={15}
              height={18}
              width={35}
              offColor={'#D9D9D9'}
              onColor={'#064145'}
            />
          </View> */}
          {/* <TouchableOpacity onPress={() => navigation?.navigate('Faq')}>
            <Text style={tw`text-title text-sm font-PoppinsMedium`}>
              Domande frequenti
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation?.navigate('TermsCondition')}>
            <Text style={tw`text-title text-sm font-PoppinsMedium`}>
              Termini e condizioni
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation?.navigate('LegalNotes')}>
            <Text style={tw`text-title text-sm font-PoppinsMedium`}>
              Note legali
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation?.navigate('OurPlatform')}>
            <Text style={tw`text-title text-sm font-PoppinsMedium`}>
              La nostra piattaforma
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation?.navigate('HelpSupport')}>
            <Text style={tw`text-title text-sm font-PoppinsMedium`}>
              Centro assistenza
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>

      <TouchableOpacity
        style={tw`flex-row items-center justify-between`}
        onPress={() => setLogoutConfirmationModalVisible(true)}>
        <Text style={tw`text-title text-sm font-PoppinsMedium`}>Esci</Text>
        {/* <SvgXml xml={IconLogout} /> */}
      </TouchableOpacity>
      <NormalModal
        layerContainerStyle={tw`flex-1 justify-center items-center mx-5`}
        containerStyle={tw`rounded-xl bg-white p-5`}
        visible={logoutConfirmationModalVisible}
        setVisible={setLogoutConfirmationModalVisible}>
        <View>
          <Text style={tw`text-title text-2xl text-center font-PoppinsBold mb-2`}>
            Sei sicuro di voler {'\n'}uscire?
          </Text>

          <View style={tw`mt-2 gap-y-2 flex-row items-center gap-2`}>
            <Button
              title="Esci"
              containerStyle={tw`flex-1`}
            //   onPress={handleLogout}
              // onPress={() => {
              //   navigation?.navigate('Login');
              //   setLogoutConfirmationModalVisible(false);
              // }}
            />
            <Button
              title="Cancellare"
              containerStyle={tw`bg-transparent border border-primary flex-1`}
              style={tw`text-primary`}
              onPress={() => {
                setLogoutConfirmationModalVisible(false);
              }}
            />
          </View>
        </View>
      </NormalModal>
    </View>
  );
}

function DrawerRoute() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerType: 'front',
        drawerStyle: tw`w-[70%] bg-white`,
      }}
      drawerContent={DrawerContent}>
      <Drawer.Screen name="BottomRoutes" component={BottomRoutes} />
    </Drawer.Navigator>
  );
}

export default DrawerRoute;
