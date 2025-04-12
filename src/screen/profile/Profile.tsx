import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import tw from '../../lib/tailwind';
import {SvgXml} from 'react-native-svg';
import {IconEdit, IconMail, IconMap} from '../../assets/icon/icon';
import Header from '../../component/Header';

// import CardInformation from './component/CardInformation';

const Profile = ({navigation}: any) => {
  const [selected, setSelected] = useState(1);

  // if (isError) {
  //   return (
  //     <View style={tw`flex-1 justify-center items-center`}>
  //       <Text style={tw`text-red-500 text-lg`}>Failed to load products.</Text>
  //       <TouchableOpacity
  //         style={tw`mt-4 p-2 bg-[#064145] rounded-lg`}
  //         onPress={() => navigation?.goBack()}>
  //         <Text style={tw`text-white`}>Go Back</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }
  const handleProductDetails = id => {
    navigation.navigate('ProductDetails', {id, from: 'myCart'});
  };
  return (
    <View style={tw`bg-white px-[4%] h-full pb-2`}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <Header />

        <View style={tw`mt-4`}>
          <View style={tw`items-end`}>
            <TouchableOpacity
              style={tw`bg-primary px-2 py-1 rounded-lg flex-row items-center gap-1`}
              onPress={() => {
                navigation?.navigate('EditProfile');
              }}>
              <SvgXml xml={IconEdit} />
              <Text style={tw`text-white text-[10px] font-PoppinsRegular`}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>

          <View style={tw`items-center`}>
            {/* { data?.data?.avatar && */}
            <Image
              source={require('../../assets/images/avatar.png')}
              style={tw`h-18 w-18 rounded-full`}
            />
            {/* } */}
            <Text style={tw`text-title text-lg font-PoppinsBold mt-2`}>
              {/* {data?.data?.name} */}
            </Text>
            <Text style={tw`text-subT text-xs font-PoppinsRegular`}>
              Personal Information
            </Text>
            <View style={tw`flex-row items-center gap-2 mt-2`}>
              <SvgXml xml={IconMap} />
              <Text style={tw`text-title text-xs font-PoppinsRegular`}>
            Elena Gomez
              </Text>
            </View>
            <View style={tw`flex-row items-center gap-2 mt-2`}>
              <SvgXml xml={IconMap} />
              <Text style={tw`text-title text-xs font-PoppinsRegular`}>
            Rankin street
              </Text>
            </View>
            <View style={tw`flex-row items-center gap-2 mt-2`}>
              <SvgXml xml={IconMail} />
              <Text style={tw`text-title text-xs font-PoppinsRegular`}>
               elena@gmail.com
              </Text>
            </View>
          </View>
        </View>

        <View style={tw`mt-4`}>
          <Text style={tw`font-PoppinsBold `}>My Product</Text>
          <View style={tw`flex-row flex-wrap justify-between`}>
            {[1, 2, 3, 4, 5, 6].map(product => (
              <TouchableOpacity
                key={product}
                style={tw`w-[48%] rounded-xl bg-gray-200 p-2 mt-2`}
                // onPress={() => handleProductDetails(product.id)}
                >
                <Image
                  source={require('../../assets/images/image1.png')}
                  style={tw`h-38 w-full rounded-xl`}
                />
                <Text style={tw`text-title text-sm font-bold mt-1`}>
               Brecelet
                </Text>

                <Text style={tw`text-gray-700 text-xs`}>
                $2000
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
