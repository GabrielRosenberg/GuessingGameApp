import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Gamescreen from "./screens/GameScreen";
import Startgamescreen from "./screens/StartGameScreen";
import Gameoverscreen from "./screens/GameOverScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState<number>(0);
  const [pastGuesses, setPastGuesses] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  }

  const configNewGameHandler = () => {
    setPastGuesses(0);
    setUserNumber(0);
  };

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds: number) => {
    setPastGuesses(numOfRounds);
  };

  let content = <Startgamescreen onStartGame={startGameHandler} />;

  if (userNumber && pastGuesses <= 0) {
    content = (
      <Gamescreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (pastGuesses > 0) {
    content = (
      <Gameoverscreen
        rounds={pastGuesses}
        correctGuess={userNumber}
        onRestart={configNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
