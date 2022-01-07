import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  children: any;
  style?: object;
};

const Bodytext = ({ children, style }: Props) => {
  return <Text style={{ ...styles.text, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});

export default Bodytext;
