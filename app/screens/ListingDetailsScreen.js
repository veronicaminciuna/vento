import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/item1.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Used table for sale</Text>
        <Text style={styles.price}>$100</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/veronicaminci.jpg")}
            title="Veronica Minci"
            subTitle="2 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 40,
    marginVertical: 30,
  },
  title: {
    fontSize: 35,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 60,
  },
});

export default ListingDetailsScreen;
