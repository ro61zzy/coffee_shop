import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
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
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
          // title: "All",
          //   headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width:"86%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={
            {
                flexDirection: "column",
                width: "50%",
              // backgroundColor:"red"
            }
          }
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
          )}*/}
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
      {/* <View style={{}}>
        <TouchableOpacity onPress={handleDetail}>
          <Text style={styles.button}>Choose A coffee</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  picker: {
    width: "100%",
    height: 50,
    marginBottom: 20,
    backgroundColor: "#fafafa",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selectedCountry: {
    fontSize: 18,
    marginTop: 20,
  },
});
