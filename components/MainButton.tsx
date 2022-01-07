import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Colors from "../constants/colors";

type Props = {
  children?: any[] | any;
  pressHandler: any;
};

const MainButton = ({ children, pressHandler }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={pressHandler}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default MainButton;
