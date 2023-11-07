import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { AppButton, AppView } from "../components";
import { SIZES } from "../constants/theme";
import { NAVIGATION } from "../constants/routes";

const WelcomeScreen = ({ navigation }) => {
  return (
    <AppView>
      <Image
        source={require("../../assets/wedd.jpg")}
        style={{
          height: SIZES.height*.9,
          width: SIZES.width,
        }}
      />
      <AppButton title="Get Started" onPress={() => navigation.navigate(NAVIGATION.HOME)} />
    </AppView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
