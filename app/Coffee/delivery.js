import React from 'react'
import { View, Text } from 'react-native'
import { Stack, useRouter  } from 'expo-router';

const delivery = () => {
  return (
    <View>
          <Stack.Screen
       options={{
        headerShown: true,
        title: "Deliver",
        //   headerLeft: () => <DrawerToggleButton />,
      }}
      />
      <Text>delivery</Text>

       <Text> Niivo</Text>
   
    </View>
  )
}

export default delivery