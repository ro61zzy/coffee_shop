import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Stack, useRouter  } from 'expo-router';

const order = () => {
    const router = useRouter();
    const handleMap = () => {
        router.push("coffee/delivery")
    }
  return (
    <View>
           <Stack.Screen
       options={{
        headerShown: true,
        title: "Order",
        //   headerLeft: () => <DrawerToggleButton />,
      }}
      />
      <Text>Make Your Order</Text>
      <TouchableOpacity onPress={handleMap}>
       <Text> Go to Map</Text>
    </TouchableOpacity>
    </View>
  )
}

export default order