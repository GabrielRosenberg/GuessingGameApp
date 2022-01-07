import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
} from "react-native";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";

type Props = { rounds: number; correctGuess: number; onRestart: any };

const Gameoverscreen = ({ rounds, correctGuess, onRestart }: Props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          // source={{
          //   uri: "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg",
          // }}
          style={styles.image}
        />
      </View>
      <View style={{ marginVertical: 20, alignItems: "center" }}>
        <Text>Number of rounds {rounds}.</Text>
        <Text>The correct guess was: {correctGuess}</Text>
      </View>
      <MainButton pressHandler={onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: Dimensions.get("window").width / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Gameoverscreen;
