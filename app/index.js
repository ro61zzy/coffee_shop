import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const index = ({ navigation }) => {
  const router = useRouter();

  const handleCoffee = () => {
    router.push("coffee/home");
  };

  return (
    <View>
      <Text>Home Page</Text>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Text>
            The best grain, the best roast, the powerful flavour.
          </Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 8,
            backgroundColor: "#C67C4E",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            borderRadius:8
          }}
          onPress={handleCoffee}
        >
          <Text
            style={{
              color: "#fff",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
