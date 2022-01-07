import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

type Props = {
  style: ViewStyle;
  children?: JSX.Element | JSX.Element[];
};

const Card = ({ children, style }: Props) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
