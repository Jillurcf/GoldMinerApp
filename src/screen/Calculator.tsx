import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import tw from '../lib/tailwind';


const Calculator = () => {
  const [quantity, setQuantity] = useState('1');
  const [unit, setUnit] = useState('Gram');
  const [karat, setKarat] = useState('Karat');
  const [price, setPrice] = useState(96.07);

  const calculatePrice = () => {
    // Placeholder for calculation logic
    console.log(`Quantity: ${quantity}, Unit: ${unit}, Karat: ${karat}`);
  };

  return (
    <ScrollView style={tw`flex-1 bg-white p-4`}>
      <Text style={tw`text-lg font-semibold text-gray-800 mb-4`}>Calculate the gold price</Text>
      <View style={tw`items-center mb-6`}>
        <Text style={tw`text-gray-600 text-base`}>1 Gram of Gold Price</Text>
        <Text style={tw`text-xl font-bold text-yellow-600 mt-2`}>= ${price}</Text>
      </View>

      <View style={tw`mb-4`}>
        <Text style={tw`text-gray-600 mb-2`}>Quantity:</Text>
        <View style={tw`border border-gray-300 rounded-lg`}>
          <Picker
            selectedValue={quantity}
            onValueChange={(itemValue) => setQuantity(itemValue)}>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker>
        </View>
      </View>

      <View style={tw`mb-4`}>
        <Text style={tw`text-gray-600 mb-2`}>Unit:</Text>
        <View style={tw`border border-gray-300 rounded-lg`}>
          <Picker
            selectedValue={unit}
            onValueChange={(itemValue) => setUnit(itemValue)}>
            <Picker.Item label="Gram" value="Gram" />
            <Picker.Item label="Ounce" value="Ounce" />
          </Picker>
        </View>
      </View>

      <View style={tw`mb-6`}>
        <Text style={tw`text-gray-600 mb-2`}>Karat:</Text>
        <View style={tw`border border-gray-300 rounded-lg`}>
          <Picker
            selectedValue={karat}
            onValueChange={(itemValue) => setKarat(itemValue)}>
            <Picker.Item label="Karat" value="Karat" />
            <Picker.Item label="24K" value="24K" />
            <Picker.Item label="22K" value="22K" />
            <Picker.Item label="18K" value="18K" />
          </Picker>
        </View>
      </View>

      <TouchableOpacity
        style={tw`bg-yellow-500 py-3 rounded-lg items-center`}
        onPress={calculatePrice}>
        <Text style={tw`text-white font-semibold`}>Calculate</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Calculator;