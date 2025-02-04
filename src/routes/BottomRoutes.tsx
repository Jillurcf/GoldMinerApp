import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SvgXml} from 'react-native-svg';
import tw from '../lib/tailwind';
import Home from '../screen/home/Home';
import { IconCubonLink, IconCubonLinkFocus, IconCustomDesign, IconCustomDesignFocus, IconHomeDark, IconHomeLight, IconProfile, IconProfileFocus, IconUserDark, IconUserLight } from '../assets/icon/icon';
import Profile from '../screen/profile/Profile';
import CubonLink from '../screen/cubonLink/CubonLink';
import CustomDesign from '../screen/customDesign/CustomDesign';


// import {
//   IconCategoryDark,
//   IconCategoryLight,
//   IconHomeDark,
//   IconHomeLight,
//   IconProductDark,
//   IconProductLight,
//   IconUserDark,
//   IconUserLight,
// } from '../assets/icons/Icons';
// import Categories from '../screens/cateogries/Categories';
// import AddProducts from '../screens/addProducts/AddProducts';
// import Profile from '../screens/profile/Profile';

const Tab = createBottomTabNavigator();

function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: tw`h-18    bg-white`,
        tabBarItemStyle: {
          marginVertical: 10,
        },
        tabBarLabelStyle: {
          // display: 'none',
          fontSize: 12,
          marginBottom: 12
        },
        tabBarActiveTintColor: '#E8A934', // You can adjust this to the color you want for active label
        tabBarButton: props => <TouchableOpacity {...props} />,
        tabBarIcon: ({focused}) => {
          let icon;
          let iconBackground = focused ? 'primary' : 'transparent'; 
          switch (route.name) {
            case 'Home':
              icon = focused ? IconHomeLight : IconHomeDark;
              break;

              case 'CubonLink':
                icon = focused ? IconCubonLinkFocus : IconCubonLink;
                break;
            case 'CustomDesign':
              icon = focused ? IconCustomDesignFocus : IconCustomDesign;
              break;
            case 'Profile':
              icon = focused ? IconProfileFocus : IconProfile;
              break;

            // default:
            //   icon = focused ? IconUserDark : IconUserDark;
            //   break;
          }

          return (
            <View style={tw`rounded-2xl py-2 px-4`}>
              <SvgXml xml={icon} />
            </View>
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CubonLink" component={CubonLink} />
     
      <Tab.Screen name="CustomDesign" component={CustomDesign} /> 
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomRoutes;
