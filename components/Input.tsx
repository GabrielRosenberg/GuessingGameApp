import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

type Props = {
  style?: object;
  [x: string]: any;
};

const Input = (props: Props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
    textAlign: "center",
  },
});

export default Input;
