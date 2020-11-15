import React, { useState } from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import Input from "./Input";

const { width, height } = Dimensions.get("window");

const Form = () => {
  const [value, onChangeText] = React.useState("");
  return (
    <>
      <View style={styles.container}>
        <Input
          icon="user"
          placeholder="First Name"
          onChangeText={(text) => onChangeText(text)}
        />
        <Input
          icon="user"
          placeholder="Last Name"
          onChangeText={(text) => onChangeText(text)}
        />
        <Input
          icon="user"
          placeholder="Username"
          onChangeText={(text) => onChangeText(text)}
        />
        <Input
          icon="envelope"
          placeholder="Email Address"
          onChangeText={(text) => onChangeText(text)}
        />
        <Input
          icon="calendar"
          placeholder="00/00/0000"
          onChangeText={(text) => onChangeText(text)}
        />
        <Input
          icon="lock"
          placeholder="Password"
          secured
          onChangeText={(text) => onChangeText(text)}
        />
      </View>
      <View style={styles.btn}>
        <Text style={styles.btnText}>SIGN UP</Text>
      </View>
    </>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    width: 0.8 * width,
    borderRadius: 30,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#939393",
    marginTop: -0.16*height,
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 30,
    paddingBottom: 80,
    marginBottom: 1,
  },
  btn: {
    backgroundColor: "#2FB28F",
    alignSelf: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 14,
    marginTop: -20,
  },
  btnText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15,
  },
});
