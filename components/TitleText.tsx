import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  children: string;
  style?: object;
};

const TitleText = ({ children, style }: Props) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    paddingBottom: 10,
  },
});

export default TitleText;
