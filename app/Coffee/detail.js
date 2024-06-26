import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Stack, useRouter } from 'expo-router';

const detail = () => {
    const router = useRouter();

    const handleOrder = () => {
        router.push("coffee/order")
    }
  return (
    <View>
        <Stack.Screen
       options={{
        headerShown: true,
        title: "That Coffee",
      }}
      />
      <Text>Coffee Details</Text>
      <TouchableOpacity onPress={handleOrder}>
        <Text>Go to buy</Text>
      </TouchableOpacity>
    </View>
  )
}

export default detail
