import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import AppHeader from "./AppHeader";
import { COLORS, FSTYLES, SIZES, STYLES } from "../constants/theme";
import { NAVIGATION } from "../constants/routes";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import AppText from "./AppText";
import { useSelector } from "react-redux";
const HomeHeader = ({ style, iconColor, header, headerColor = "" }) => {
  const navigation = useNavigation();
  const { user } = useSelector((state) => state.entities.userReducer);

  return (
    <View style={styles.container}>
      <AppText bold={true} color={"pink"}>
        Sahibganj
      </AppText>
      <View
        style={{
          ...FSTYLES,
          width: "30%",
        }}
      >
        <View style={styles.iconWrapper}>
          <FontAwesome name="search" size={SIZES.h4} color="black" />
        </View>
        <View style={styles.iconWrapper}>
          <FontAwesome
            name="user"
            onPress={() => navigation.openDrawer()}
            size={SIZES.h4}
            color="black"
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
const styles = StyleSheet.create({
  container: {
    ...FSTYLES,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding * 0.5,
  },
  iconWrapper: {
    ...STYLES,
    height: SIZES.h1,
    width: SIZES.h1,
    borderRadius: SIZES.h1 / 2,
    backgroundColor: COLORS.lightgray1,
    justifyContent: "center",
    alignItems: "center",
  },
});
