import React from "react";
import { StyleSheet, Text, Dimensions, View } from "react-native";

const { height, width } = Dimensions.get("window");

const Button = ({ children, bg, border }) => {
  return (
    <View style={{...styles.container, backgroundColor:bg,borderColor: border ? "#e8e8e8" : "#000" }} >
      {children}
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 0.8 * width,
    borderRadius: 10,
    paddingVertical: 5,
    marginTop: 10,
    borderWidth: 1,
  },
});
