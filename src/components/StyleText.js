import React from "react";
import { StyleSheet, Text, } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { COLORS } from "../constants/theme";

const StyleText = ({ children, style, size, bold, color }) => {
    return (
        <Text style={[
            {
                color: color ? color : COLORS.black,
                fontWeight: bold ? '700' : '500',
                fontFamily: 'Inter-Medium',
                fontSize: responsiveFontSize(size ? size : 2)
            }, style]}>
            {children}
        </Text>
    );
};

export default React.memo(StyleText);
