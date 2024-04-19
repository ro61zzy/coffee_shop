import React from 'react'
import { View, Text } from 'react-native'
import { Stack, useRouter } from 'expo-router';

const home = () => {

    const router = useRouter();

    const handleDetails = () => {
        router.push("coffee/details")
    }
  return (
    <View>
 <Stack.Screen
       options={{
        headerShown: true,
        // title: "All",
        //   headerLeft: () => <DrawerToggleButton />,
      }}
      />
      <Text>All cofees</Text>
      <TouchableOpacity onPress={handleDetails}>
        <Text>Choose A cofee</Text>
      </TouchableOpacity>
    </View>
  )
}

export default home