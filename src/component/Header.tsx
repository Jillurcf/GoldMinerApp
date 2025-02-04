import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, { useEffect } from 'react';
import {SvgXml} from 'react-native-svg';
import {IconBell, IconCurt, IconHamBurger} from '../assets/icon/icon';
import tw from '../lib/tailwind';
import InputText from './InputText';
import {NavigProps} from '../interface/NaviProps';
import {DrawerActions, useNavigation} from '@react-navigation/native';



interface HeadrePops extends NavigProps<null> {}

const Header = () => {
  const navigation = useNavigation()
  // const {data, isLoading, isError} = useGetProfileQuery({})
  // const {data:notifiaction, refetch} = useGetNotificationsQuery([]);
  // const unreadNotifications = notifiaction?.data?.filter(item => item?.read_at === null);

// Count unread notifications
// const unreadCount = unreadNotifications?.length || "";

//   // console.log("data", unreadCount)
//   useEffect(() => {
//     // Fetch notifications every 5 seconds
//     const interval = setInterval(() => {
//       refetch();
//     }, 5000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);
 
  return (
    <View style={tw`py-2`}>
      <View style={tw`flex-row items-center justify-between`}>
        <View style={tw`flex-row items-center gap-4`}>
          {/* <TouchableOpacity
            onPress={() => navigation?.dispatch(DrawerActions.openDrawer())}>
            <SvgXml width={30} height={30} xml={IconHamBurger} />
          </TouchableOpacity> */}

          <View>
            <Text style={tw`text-title text-base font-PoppinsBold`}>
           Welcome to Luna
            </Text>
            <Text style={tw`text-subT text-xs font-PoppinsRegular`}>
            251 ms road, California, USA
            </Text>
          </View>
        </View>
        <View style={tw`flex-row items-center gap-2`}>
          <TouchableOpacity
            style={tw``}
            onPress={() => navigation?.navigate('MyCart')}>
            <SvgXml
             xml={IconCurt} />
            {/* <Text style={tw`absolute -top-1 left-5 font-bold z-1 text-red-600`}> {unreadCount}</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-offWhite overflow-hidden w-10 h-10 flex-row items-center justify-center rounded-full`}
            onPress={() => navigation?.navigate('Notifications')}>
           <Image source={require('../assets/images/avatar.png')}/>
            {/* <Text style={tw`absolute -top-1 left-5 font-bold z-1 text-red-600`}> {unreadCount}</Text> */}
          </TouchableOpacity>
          {/* <View
            style={tw`bg-offWhite w-9 h-9 flex-row items-center justify-center rounded-full `}>
            <Image
              style={tw`w-full h-full rounded-full`}
              source={require('../assets/images/avatar.jpg')}
            />
          </View> */}
        </View>
      </View>

    </View>
  );
};

export default Header;
