import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Button,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import coffeeImage from "../../assets/coffee.svg";
import User from "../../assets/user.jpg";

const home = () => {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleCountrySelect = (itemValue) => {
    setSelectedCountry(itemValue);
  };

  const handleDetail = () => {
    router.push("coffee/detail");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          // title: "All",
          //   headerLeft: () => <DrawerToggleButton />,
        }}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.blackBackground}>
          {/* Content within the black background */}
        </View>
        <View style={styles.whiteBackground}>
         <ScrollView>
          
         </ScrollView>
        </View>
        <View style={styles.cardContainer}>
          <ImageBackground
            source={require("../../assets/promo_card.png")} 
            style={styles.cardBackground}
            imageStyle={{ borderRadius: 10 }} 
          >
            <View style={styles.cardContent}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#ED5151",
                  padding: 4,
                  borderRadius: 8,
                  width: 55,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  Promo
                </Text>
              </TouchableOpacity>
              <View style={{  marginTop:8,backgroundColor: "black", width:"58%" }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "700",
                    color: "#fff",
                  }}
                >
                  Buy one get
                </Text>
              </View>
              <View style={{ marginTop:5,
              backgroundColor: "black", width:"40%" }}>
                <Text
                  style={{
                    fontSize: 26,
                    fontWeight: "700",
                    color: "#fff",
                  }}
                >
                  one FREE
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        {/* </View> */}
      </ScrollView>
      {/*  <View
        style={{
          flexDirection: "row",
          // width:"86%",
          gap: "50%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            width: "50%",
            // backgroundColor:"red"
          }}
        >
          <Text>Location</Text>
          <Picker
            selectedValue={selectedCountry}
            onValueChange={(itemValue) => handleCountrySelect(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="countries" value={null} />
            {countries.map((country) => (
              <Picker.Item
                key={country.cca3}
                label={country.name.common}
                value={country.name.common}
              />
            ))}
          </Picker>
          {/* {selectedCountry && (
            <Text style={styles.selectedCountry}>
              Selected country: {selectedCountry}
            </Text>
          )}
        </View>
        <View>
          <Image
            source={User}
            style={{
              height: 40,
              width: 40,
              borderRadius: 3,
            }}
          />
        </View>
      </View>
      <View style={{}}>
        <TouchableOpacity onPress={handleDetail}>
          <Text style={styles.button}>Choose A coffee</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  blackBackground: {
    backgroundColor: "black",
    height: "30%", // Adjust as needed
  },
  whiteBackground: {
    backgroundColor: "white",
    flex: 1,
    padding: 20, // Adjust padding as needed
  },
  cardContainer: {
    position: "absolute",
    top: "22%", // Position at the bottom of the black background
    left: "40%", // Set the left position to center horizontally
    width: "100%", // Set the width to 60% of the screen
    alignItems: "center",
    marginLeft: "-30%", // Adjust marginLeft to center the card
  },

  cardBackground: {
    width: "100%", // Make the image background cover the entire card container
    //aspectRatio: 1, // Maintain aspect ratio of the image
    borderRadius: 10, // Apply border radius to the card container
  },
  cardContent: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  picker: {
    width: "50%",
    height: 50,
    marginBottom: 20,
    backgroundColor: "#fafafa",
  },
  selectedCountry: {
    fontSize: 18,
    marginTop: 20,
  },
});

