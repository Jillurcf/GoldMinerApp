import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SvgXml} from 'react-native-svg';
import tw from '../lib/tailwind';
import Home from '../screen/home/Home';

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
        tabBarStyle: tw`h-14 bg-white`,
        tabBarItemStyle: {
          marginVertical: 10,
        },
        tabBarLabelStyle: {
          display: 'none',
        },
        tabBarActiveTintColor: '#929299', // You can adjust this to the color you want for active label
        tabBarButton: props => <TouchableOpacity {...props} />,
        // tabBarIcon: ({focused}) => {
        //   let icon;
        //   let iconBackground = focused ? 'primary' : 'transparent'; // Red background for active tab

        //   switch (route.name) {
        //     case 'Home':
        //       icon = focused ? IconHomeLight : IconHomeDark;
        //       break;

        //     case 'Categories':
        //       icon = focused ? IconCategoryLight : IconCategoryDark;
        //       break;
        //     case 'Product':
        //       icon = focused ? IconProductLight : IconProductDark;
        //       break;
        //     case 'Profile':
        //       icon = focused ? IconUserLight : IconUserDark;
        //       break;

        //     default:
        //       icon = focused ? IconUserDark : IconUserDark;
        //       break;
        //   }

        //   return (
        //     <View style={tw`rounded-2xl bg-${iconBackground} py-2 px-4`}>
        //       <SvgXml xml={icon} />
        //     </View>
        //   );
        // },
      })}>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Product" component={AddProducts} />
      <Tab.Screen name="Profile" component={Profile} /> */}
    </Tab.Navigator>
  );
}

export default BottomRoutes;
