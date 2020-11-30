import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../config/colors";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "90%",
    height: 3,
    backgroundColor: colors.dark,
  },
});

export default ListItemSeparator;
