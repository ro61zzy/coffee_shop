import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router';

const index = ({ navigation }) => {

    const router = useRouter();

    const handleCoffee = () => {
        router.push("coffee/details")
    }

  return (
    <View>
      <Text>Home Page</Text>
      <TouchableOpacity onPress={handleCoffee}>
        <Text>A Coffee</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index
