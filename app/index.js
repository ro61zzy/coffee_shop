import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import coffeeImage from "../assets/image3.png";
import { LinearGradient } from 'expo-linear-gradient';

const Index = ({ navigation }) => {
  const router = useRouter();

  const handleCoffee = () => {
    router.push("coffee/home");
  };

  return (
    <LinearGradient
      colors={['rgba(0,0,0,1.0)', 'rgba(0,0,0,2)']} // Adjust the colors and opacity as needed
      style={{
        flex: 1,
      }}
    >
      <Image
        source={coffeeImage}
        style={{
          height: "60%",
          width: "100%",
        }}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            paddingBottom: 40,
            width: "80%",
          }}
        >
          <Text
            style={{
              fontSize: 36,
              fontWeight: "700",
              textAlign: "center",
              lineHeight: 40,
              color: "#fff",
            }}
          >
            Coffee so good, your tastebuds will love it.
          </Text>
        </View>
        <View
          style={{
            paddingTop: 20,
            width: "75%",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              color: "#A9A9A9",
            }}
          >
            The best grain, the best roast, the powerful flavour.
          </Text>
        </View>
        <TouchableOpacity
          style={{
            margin: 15,
            padding: 17,
            backgroundColor: "#C67C4E",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            borderRadius: 8,
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
    </LinearGradient>
  );
};

export default Index;
