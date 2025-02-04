import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import tw from '../../lib/tailwind';
import Swiper from 'react-native-swiper';
import InputText from '../../component/InputText';
import Header from '../../component/Header';
import DropdownComponent from '../../component/DropDown';

const CubonLink = ({navigation}) => {
  const [searchItem, setSearchItem] = useState('');

  const Data = {
    banners: [
      {id: 1, image: require('../../assets/images/banner1.png')},
      {id: 2, image: require('../../assets/images/banner2.png')},
    ],
    recommendedProducts: [
      {
        id: 1,
        title: 'Solid cubon link 7MM to 16MM 14k',
        images: require('../../assets/images/image1.png'),
        price: 'From $56.42 USD',
      },
      {
        id: 2,
        title: 'Solid cubon link 7MM to 16MM 14k',
        images: require('../../assets/images/image2.png'),
        price: 'From $56.42 USD',
      },
      {
        id: 3,
        title: 'Solid cubon link 7MM to 16MM 14k',
        images: require('../../assets/images/image1.png'),
        price: 'From $56.42 USD',
      },
      {
        id: 4,
        title: 'Solid cubon link 7MM to 16MM 14k',
        images: require('../../assets/images/image2.png'),
        price: 'From $56.42 USD',
      },
      {
        id: 5,
        title: 'Solid cubon link 7MM to 16MM 14k',
        images: require('../../assets/images/image1.png'),
        price: 'From $56.42 USD',
      },
      {
        id: 6,
        title: 'Solid cubon link 7MM to 16MM 14k',
        images: require('../../assets/images/image2.png'),
        price: 'From $56.42 USD',
      },
    ],
    sellerProducts: [
      {
        id: 1,
        title: 'Solid cubon link 7MM to 16MM 14k',
        images: require('../../assets/images/image3.png'),
        price: 'From $56.42 USD',
      },
      {
        id: 2,
        title: 'Solid cubon link 7MM to 16MM 14k',
        images: require('../../assets/images/image4.png'),
        condition: 'Used',
        price: 'From $56.42 USD',
        price_with_buyer_protection_fee: 17.99,
      },
    ],
  };

  const handleProductDetails = id => {
    navigation.navigate('ProductDetails', {id});
  };

  const handleSellerProductDetails = id => {
    navigation.navigate('SellerProductDetails', {id});
  };

  return (
    <View style={tw`h-full bg-white px-[4%] pb-4`}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always">
        {/* <View style={tw`mt-3`}>
          <InputText
            value={searchItem}
            onChangeText={value => setSearchItem(value)}
            placeholder="Search"
          />
        </View> */}
        <Header />
        {/* Banner Section */}
        {/* <View style={tw`h-40 rounded-xl overflow-hidden mt-4`}>
          <Swiper autoplay loop paginationStyle={tw`bottom-2`}>
            {Data.banners.map(banner => (
              <View key={banner.id} style={tw`justify-center items-center`}>
                <Image
                  source={banner.image}
                  style={tw`w-full h-40`}
                  resizeMode="cover"
                />
              </View>
            ))}
          </Swiper>
        </View> */}

        {/* CubonLink Products */}
        <DropdownComponent />
        <View>
          <View style={tw`flex-row  justify-between`}>
            <Text style={tw`text-title text-base font-bold mt-4`}>
              Cubon link Products
            </Text>
          </View>
          <View style={tw`flex-row flex-wrap justify-between`}>
            {Data?.recommendedProducts.map(product => (
              <TouchableOpacity
                key={product.id}
                style={tw`w-[48%] rounded-xl bg-gray-200 p-2 mt-2`}
                onPress={() => handleProductDetails(product.id)}>
                <Image
                  source={product.images}
                  style={tw`h-38 w-full rounded-xl`}
                />
                <Text style={tw`text-title text-sm font-bold mt-1`}>
                  {product.title}
                </Text>

                <Text style={tw`text-gray-700 text-xs`}>€{product.price}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

   
      </ScrollView>
      <StatusBar translucent={false} />
    </View>
  );
};

export default CubonLink;

const styles = StyleSheet.create({});
