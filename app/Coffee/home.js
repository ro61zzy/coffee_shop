import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";

const home = () => {
  const router = useRouter();

  const handleDetails = () => {
    router.push("coffee/detail");
  };
  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: true,
          // title: "All",
          //   headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <Text>All coffees</Text>
      <TouchableOpacity onPress={handleDetails}>
        <Text>Choose A cofee</Text>
      </TouchableOpacity>
    </View>
  );
};

export default home;
