import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icon from "@expo/vector-icons/SimpleLineIcons";

const Input = ({ placeholder, onChangeText, icon, secured }) => {
  const [active, setActive] = useState(false);
  return (
    <View
      style={{
        ...styles.inputSection,
        borderBottomColor: active ? "#2FB28F" : "#939393",
      }}
    >
      <Icon
        style={styles.icon}
        name={icon}
        size={24}
        color={active ? "#000" : "#939393"}
      />
      <TextInput
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        style={{ ...styles.input, color: active ? "#000" : "#939393" }}
        placeholder={placeholder}
        placeholderTextColor={active ? "#000" : "#939393"}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        secureTextEntry={secured ? true : false}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputSection: {
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 1.6,
  },
  icon: {
    paddingTop: 10,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    paddingTop: 15,
    paddingRight: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
