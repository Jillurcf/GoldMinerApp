import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from '../../lib/tailwind';
import {SvgXml} from 'react-native-svg';
import Button from '../../component/Button';
import NormalModal from '../../component/NormalModal';
import InputText from '../../component/InputText';
import {IconBack} from '../../assets/icon/icon';

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
const ProductDetails = ({navigation, route}: any) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isPriceModalVisible, setIsPriceModalVisible] = useState(false);
  const [acceptOfferModalVisible, setAcceptOfferModalVisible] = useState(false);
  const [openProductEditModal, setOpenProductEditModal] = useState(false);
  const [offerValue, setOfferValue] = useState();
  // console.log('112', offerValue);
  const {from} = route?.params || {};
  console.log('from', from);
  console.log('Checking: ', route.params);
  // const data = route?.params?.recomend
  // const { id } = from; // Access the 'id' from params
  const {id} = route?.params;
  // console.log('115', id);

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const sizes = ['7 mm', '8 mm', '9 mm', '10 mm', '11 mm', '12 mm', '13 mm'];

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleProductDetails = async id => {
    // console.log(id);

    navigation?.navigate('ProductDetails', {id, from: 'similar_product'});
  };

  const handleSendOffer = async () => {
    // console.log("click");
    setIsPriceModalVisible(false);

    //   try {
    //     // Create and populate formData
    //     const formData = new FormData();
    //     // console.log('Initial formData', formData);

    //     // Append necessary fields
    //     formData.append('seller_id', data?.data?.user_id || '');
    //     formData.append('product_id', data?.data?.id || '');
    //     formData.append('asking_price', offerValue || '');

    //     // console.log('Populated formData', formData);

    //     // Send the offer

    //   } catch (error) {
    //     console.log('Error', error);
    //   }
  };

  const handleFavorite = async () => {
    if (!id) {
      console.error('Product ID is undefined');
      return;
    }

    const formData = new FormData();
    formData.append('product_id', id);
    console.log(formData);

    //   refetch();

    //   try {
    //     const res = await postWishlist(formData); // Mutation call
    //     console.log('add wish', res);
    //   } catch (error) {
    //     console.error('Error in mutation call:', error);
    //   }
  };
  // if (isLoading) {
  //   return (
  //     <View style={tw`flex-1 justify-center items-center`}>
  //       <ActivityIndicator size="large" color="#064145" />
  //       <Text style={tw`text-primary mt-2`}>Loading ...</Text>
  //     </View>
  //   );
  // }
  return (
    <View style={tw`h-full bg-white px-[4%]`}>
      <TouchableOpacity
        style={tw`mt-4 flex-row items-center gap-2 pb-2`}
        onPress={() => navigation?.goBack()}>
        <SvgXml xml={IconBack} />
        <Text style={tw`text-title text-base font-PoppinsMedium`}>
          {'Go back'}
        </Text>
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={tw`pb-4`}>
        <View>
          <View style={tw`bg-primary100 p-3 rounded-xl mt-4`}>
            {/* {Data?.recommendedProducts?.images && ( */}
            <Image
              source={require('../../assets/images/banner1.png')}
              style={tw`w-full rounded-xl h-56`}
            />
            {/* )} */}

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={tw`mt-4`}>
              {[1, 2, 3].map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleImageClick(item)}>
                  <Image
                    source={require('../../assets/images/imageblack1.png')}
                    style={tw`w-20 h-20 rounded-xl mr-2`}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={tw`my-4`}>
            <View style={tw``}>
              <Text style={tw`text-title text-base font-PoppinsBold`}>
                Cuban diamond lock 7MM to 16MM 14k
              </Text>
              <Text style={tw`text-title text-xs font-PoppinsRegular`}>
              From $5642.00 USD
              </Text>
            </View>

            <View style={tw`mt-4 gap-y-2`}>
              <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-subT text-sm font-PoppinsMedium`}>
                  Product type:
                </Text>
                <Text style={tw`text-title text-sm font-PoppinsBold`}>
                  Diamond Lock
                </Text>
              </View>

              <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-subT text-sm font-PoppinsMedium`}>
                  Materials:
                </Text>
                <Text style={tw`text-title text-sm font-PoppinsBold`}>
                  Gold & Diamonds
                </Text>
              </View>

              <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-subT text-sm font-PoppinsMedium`}>
                  Material Primary Color:
                </Text>
                <Text style={tw`text-title text-sm font-PoppinsBold`}>
                  White
                </Text>
              </View>
              <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-subT text-sm font-PoppinsMedium`}>
                  Material Primary Purity:
                </Text>
                <Text style={tw`text-title text-sm font-PoppinsBold`}>10k</Text>
              </View>

              <View style={tw`p-4`}>
                {/* Size Selection */}
                <Text style={tw`text-gray-500 mb-2`}>Size</Text>
                <View style={tw`flex-row flex-wrap gap-2`}>
                  {sizes.map((size, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => setSelectedSize(size)}
                      style={tw`border border-gray-500 px-4 py-2 rounded-lg ${
                        selectedSize === size
                          ? 'bg-black text-white'
                          : 'bg-transparent'
                      }`}>
                      <Text
                        style={tw`${
                          selectedSize === size ? 'text-white' : 'text-black'
                        }`}>
                        {size}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* Quantity Selector */}
                <Text style={tw`text-gray-500 mt-4 mb-2`}>Quantity</Text>
                <View style={tw`flex-row items-center`}>
                  <TouchableOpacity
                    onPress={() => setQuantity(Math.max(1, quantity - 1))}
                    style={tw`border border-gray-500 w-10 h-10 flex items-center justify-center rounded-lg`}>
                    <Text style={tw`text-xl`}>-</Text>
                  </TouchableOpacity>

                  <Text style={tw`mx-4 text-lg`}>{quantity}</Text>

                  <TouchableOpacity
                    onPress={() => setQuantity(quantity + 1)}
                    style={tw`border border-gray-500 w-10 h-10 flex items-center justify-center rounded-lg`}>
                    <Text style={tw`text-xl`}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-subT text-sm font-PoppinsMedium`}>
                  Price:
                </Text>
                <View style={tw`flex-row items-center gap-4`}>
                  <Text style={tw`text-subT text-xs font-PoppinsBold`}>
                    {/* €{data?.data?.price} */}
                  </Text>
                  <View style={tw`flex-row items-center gap-1`}>
                    <Text style={tw`text-title text-sm font-PoppinsBold`}>
                      {/* €{data?.data?.price_with_buyer_protection_fee || 0} */}
                    </Text>
                  </View>
                </View>
              </View>

              {from === 'admin' && (
                <>
                  <View style={tw`flex-row items-center justify-between`}>
                    <Text style={tw`text-title text-sm font-PoppinsMedium`}>
                      Prezzo richiesto:
                    </Text>
                    <Text style={tw`text-title text-sm font-PoppinsBold`}>
                      $400
                    </Text>
                  </View>
                  <View style={tw`flex-row items-center justify-between`}>
                    <Text style={tw`text-danger text-xs font-PoppinsMedium`}>
                      Differenza:
                    </Text>
                    <Text style={tw`text-danger text-xs font-PoppinsBold`}>
                      -$56
                    </Text>
                  </View>
                </>
              )}
            </View>

            <View style={tw`mt-4 gap-y-2`}>
              <Button
                title={
                  from === 'admin'
                    ? 'Accettare'
                    : from === 'myCart'
                    ? 'Buy Now'
                    : from === 'cubanLink'
                    ? 'Buy Now'
                    : from === 'customDesign'
                    ? 'Buy Now'
                    : from === 'wishList'
                    ? 'Buy Now'
                    : 'Modifica prodotto'
                }
                containerStyle={tw`border border-primary`}
                onPress={() => {
                  from === 'admin'
                    ? setAcceptOfferModalVisible(true)
                    : from === 'cubanLink'
                    ? navigation?.navigate('Payment', {id})
                    : from === 'myOrders'
                    ? navigation?.navigate('Payment', {id})
                    : from === 'customDesign'
                    ? navigation?.navigate('Payment', {id})
                    : from === 'Own Product'
                    ? navigation?.navigate('EditProduct', {id})
                    : from === 'wishList'
                    ? navigation?.navigate('Payment', {id})
                    : setOpenProductEditModal(true);
                }}
              />
              {from === 'cubanLink' ||
              from === 'myCart' ||
              from === 'customDesign' ||
              from === 'wishList' ? (
                <Button
                  title={from === 'myCart' ? 'Remove' : 'Add to cart'}
                  containerStyle={tw`border border-primary bg-transparent`}
                  style={tw`text-primary`}
                  onPress={() => {
                    from === 'admin'
                      ? setAcceptOfferModalVisible(false)
                      : setIsPriceModalVisible(true);
                  }}
                />
              ) : (
                // <Button
                //   title={from === 'admin' ? 'Decline' : 'Make an offer'}
                //   containerStyle={tw`border border-primary bg-transparent`}
                //   style={tw`text-primary`}
                //   onPress={() => {
                //     from === 'admin'
                //       ? setAcceptOfferModalVisible(false)
                //       : setIsPriceModalVisible(true);
                //   }}
                // />
                ''
              )}
            </View>
            {from === 'myOrders' || from === 'sellOrders' ? (
              <View style={tw`mt-2`}>
                <View style={tw`flex-row items-center justify-between my-2`}>
                  <Text style={tw`text-title text-base font-PoppinsMedium`}>
                    Similar product
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation?.navigate(
                        'similarProductList',
                        {id},
                        {
                          // products: [...Array(10)],
                          // title: 'Similar product',
                        },
                      )
                    }>
                    <Text style={tw`text-primary text-xs font-PoppinsMedium`}>
                      Vedi tutto
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={tw`flex-row items-center flex-wrap justify-between`}>
                  {Data?.map((d, index) => (
                    <TouchableOpacity
                      style={tw`w-[49%] rounded-xl mb-2 bg-primary100 p-2`}
                      key={index}
                      // onPress={() => navigation?.navigate('ProductDetails')}
                      onPress={() => handleProductDetails(d?.id)}>
                      {d?.images && (
                        <Image
                          source={d?.images[0]}
                          style={tw`h-38 w-full rounded-xl`}
                        />
                      )}

                      <TouchableOpacity style={tw`absolute top-5 right-5`}>
                        {/* {d?.avatar && (
                            <Image
                              source={{uri: d?.user?.avatar}}
                              style={tw`h-6 w-6 rounded-full`}
                            />
                          )} */}
                      </TouchableOpacity>
                      <View>
                        <View style={tw`flex-row justify-between mt-1`}>
                          <Text
                            numberOfLines={1}
                            style={tw`flex-1 text-title text-sm font-PoppinsBold`}>
                            {d?.title}
                          </Text>
                          {/* <SvgXml xml={IconStrokeHeart} /> */}
                        </View>
                        <View style={tw`flex-row justify-between mt-1`}>
                          <Text
                            style={tw`text-subT text-[10px] font-PoppinsNormal`}>
                            Condizione
                          </Text>
                          <Text
                            style={tw`text-primary text-[10px] font-PoppinsNormal`}>
                            {d.condition}
                          </Text>
                        </View>
                        <View style={tw`flex-row justify-between mt-1`}>
                          <Text
                            style={tw`text-title text-xs font-PoppinsNormal`}>
                            €{d?.price}
                          </Text>
                          <View style={tw`flex-row items-center gap-1`}>
                            <Text
                              style={tw`text-title text-xs font-PoppinsBold`}>
                              €{d?.price_with_buyer_protection_fee || 0}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ) : null}
          </View>
          <NormalModal
            layerContainerStyle={tw`flex-1 justify-center items-center mx-5`}
            containerStyle={tw`rounded-xl bg-white p-5`}
            visible={isPriceModalVisible}
            setVisible={setIsPriceModalVisible}>
            <View>
              <Text style={tw`text-red-500 text-sm font-PoppinsBold mb-2`}>
               Are you sure to delete?
              </Text>
             

              <View style={tw`mt-2 gap-y-2`}>
                <Button
                  title="Delete"
                  onPress={handleSendOffer}
                  // onPress={() => setIsPriceModalVisible(false)}
                />
                <Button
                  title="Cancel"
                  containerStyle={tw`bg-transparent border border-primary`}
                  style={tw`text-primary`}
                  onPress={() => setIsPriceModalVisible(false)}
                />
              </View>
            </View>
          </NormalModal>

          <NormalModal
            layerContainerStyle={tw`flex-1 justify-center items-center mx-5`}
            containerStyle={tw`rounded-xl bg-white p-5`}
            visible={acceptOfferModalVisible}
            setVisible={setAcceptOfferModalVisible}>
            <View>
              <Text
                style={tw`text-title text-2xl text-center font-PoppinsBold mb-2`}>
                Are you sure you want to accept this offer
              </Text>

              <View style={tw`mt-2 gap-y-2`}>
                <Button
                  title="Accept"
                  onPress={() => {
                    from === 'admin'
                      ? setAcceptOfferModalVisible(false)
                      : setIsPriceModalVisible(false);
                  }}
                />
                <Button
                  title="Cancel"
                  containerStyle={tw`bg-transparent border border-primary`}
                  style={tw`text-primary`}
                  onPress={() => {
                    from === 'admin'
                      ? setAcceptOfferModalVisible(false)
                      : setIsPriceModalVisible(false);
                  }}
                />
              </View>
            </View>
          </NormalModal>

          {/* <NormalModal
              layerContainerStyle={tw`flex-1 justify-center items-center mx-5`}
              containerStyle={tw`rounded-xl bg-white p-5`}
              visible={openProductEditModal}
              setVisible={setOpenProductEditModal}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="always">
                <ProductAddFields
                  btnTitle="Update"
                  title="Edit Product"
                  setTitle={setTitle}
                  setDesc={setDesc}
                  setBrandName={setBrandName}
                  handleSubCategorySelect={handleSubCategorySelect}
                  selectedSubCategories={selectedSubCategories}
                  setWeight={setWeight}
                  isFood={isFood}
                  setIsFood={setIsFood}
                  setCondition={setCondition}
                  condition={condition}
                  openGallery={openGallery}
                  imageUris={imageUris}
                  removeImage={removeImage}
                  categories={categories}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  setSelectedSubCategories={setSelectedSubCategories}
                  getSubCategories={getSubCategories}
                  handlePayment={handlePayment}
                  setCvc={setCvc}
                  cvc={cvc}
                  setExpiry={setExpiry}
                  expiry={expiry}
                  setCardNumber={setCardNumber}
                  cardNumber={cardNumber}
                  setStripePaymentVisble={setStripePaymentVisble}
                  stripePaymentVisble={stripePaymentVisble}
                  handleUpload={handleUpload}
                />
              </ScrollView>
            </NormalModal> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
