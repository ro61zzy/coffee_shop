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
  Image,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import coffeeImage from "../../assets/coffee.svg";
import User from "../../assets/user.jpg";
import { Entypo } from "@expo/vector-icons";

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

  const categories = [
    "Cappuccino",
    "Machiato",
    "Latte",
    "Americano",
    "Coffee",
    "Tea",
  ];

  const coffeeData = [
    {
      name: "Cappuccino",
      image: require("../../assets/cappucino.png"),
      description: "with Chocolate",
      price: "$3.99",
      rating: 4.6,
    },
    {
      name: "Machiato",
      image: require("../../assets/oat_cappucino.png"),
      description: "with Oat Milk",
      price: "$4.50",
      rating: 4.8,
    },
    {
      name: "Latte",
      image: require("../../assets/oat_cappucino.png"),
      description: "with Oat Milk",
      price: "$4.25",
      rating: 4.4,
    },
    {
      name: "Coffee",
      image: require("../../assets/cappucino.png"),
      description: "with Chocolate",
      price: "$2.99",
      rating: 4.2,
    },
    {
      name: "Tea",
      image: require("../../assets/cappucino.png"),
      description: "with Chocolate",
      price: "$2.50",
      rating: 4.5,
    },
  ];


  const CoffeeCard = ({ name, image, price, description, rating }) => (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.ratingContainer}>
        <Entypo name="star" size={14} color="#FBBE21" />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={{ color: "#9B9B9B", fontSize: 12 }}>{description}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#000", fontWeight: "600", marginTop: 5, fontSize: 16 }}>{price}</Text>
          <TouchableOpacity style={{ backgroundColor: "#C67C4E", padding: 8, borderRadius: 6 }}>
            <Text style={{ fontWeight: "700", fontSize: 15, color: "#fff" }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );


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
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.button}>
                <Text style={styles.buttonText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <ScrollView contentContainerStyle={styles.container3}>
            {coffeeData.map((coffee, index) => (
              <CoffeeCard key={index} {...coffee} />
            ))}
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
              <View
                style={{ marginTop: 8, backgroundColor: "black", width: "58%" }}
              >
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
              <View
                style={{ marginTop: 5, backgroundColor: "black", width: "40%" }}
              >
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
      </ScrollView>
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
    backgroundColor: "#F9F9F9",
    flex: 1,
    padding: 20, // Adjust padding as needed
    paddingTop: 60,
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
  button: {
    backgroundColor: "#C67C4E",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 12,
    margin: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
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
  ratingContainer: {
    position: "absolute",
    top: 2,
    left: 2,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "rgba(255, 255, 255, 0.8)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  ratingText: {
    fontSize: 11,
    fontWeight: "bold",
    marginRight: 4,
    color:"#fff"
  },
  starIcon: {
    width: 20,
    height: 15,
    resizeMode: "contain",
  },
  container3: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    paddingBottom:30
  },
  card: {
    width: "45%",
    marginBottom: 20,
    // borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 13,
    // padding: 10,
    // alignItems: "center",
  },
  image: {
    width: "100%",
    height: 130,
    borderRadius: 5,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "green",
  },
});
