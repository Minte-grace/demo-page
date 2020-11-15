import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Button from "./Button";
import Form from "./Form";

const { width, height } = Dimensions.get("window");

const SignUpScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBox}>
        <Text style={styles.signUptext}>SIGN UP</Text>
      </View>
      <Form />
      <View style={styles.lgnContainer}>
        <Text style={styles.txtAlready}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.txtLogin}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.txtOr}>or</Text>
        <View style={styles.line} />
      </View>
      <Button bg="#000">
        <Image
          source={require("../images/apple.png")}
          style={styles.appleLogo}
        />
        <Text style={styles.appletxt}>SIGN UP WITH APPLE</Text>
      </Button>
      <Button bg="#F8F8F8" border>
        <Image
          source={require("../images/google.png")}
          style={styles.googleIcon}
        />
        <Text style={styles.googletxt}>SIGN UP WITH GOOGLE</Text>
      </Button>
    </ScrollView>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  topBox: {
    height: 0.4 * height,
    width: width,
    backgroundColor: "#2FB28F",
    alignItems: "center",
  },
  signUptext: {
    fontSize: 26,
    marginTop: 100,
    fontWeight: "bold",
    color: "#FFF",
  },
  txtAlready: {
    fontWeight: "bold",
    fontSize: 15,
  },
  txtLogin: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#2FB28F",
  },
  lgnContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  line: {
    borderBottomWidth: 1,
    width: 100,
    borderBottomColor: "#939393",
    marginTop: 5,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  txtOr: {
    fontSize: 11,
    paddingHorizontal: 4,
    fontWeight: "bold",
  },
  appletxt: {
    paddingLeft: 10,
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  googletxt: {
    paddingLeft: 12,
    paddingVertical: 2,
    color: "#7f7f84",
    fontWeight: "bold",
    fontSize: 16,
  },
  googleIcon: {
    height: 22,
    width: 22,
  },
  appleLogo: {
    height: 30,
    width: 30,
  },
});
