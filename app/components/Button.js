import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "secondary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "right",
    alignItems: "right",
    padding: 50,
    width: "100%",
    marginVertical: 50,
  },
  text: {
    color: colors.white,
    fontSize: 21,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
