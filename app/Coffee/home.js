import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Stack, useRouter } from "expo-router";
import coffeeImage from '../../assets/coffee.svg'

const home = () => {
  const router = useRouter();

  const handleDetail = () => {
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
      <View style={styles.container}>
      <Text style={styles.text}>All coffees</Text>
      <TouchableOpacity onPress={handleDetail}>
        <Text style={styles.button}>Choose A coffee</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        height: 800
      },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
      },
      button: {
        fontSize: 18,
        color: 'white',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
      },
})
