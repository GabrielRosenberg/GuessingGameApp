import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../components/Card";
import Number from "../components/Number";
import MainButton from "../components/MainButton";
import Bodytext from "../components/BodyText";

const generateRandomBetween: any = (
  min: number,
  max: number,
  exclude: number
) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randNumber === exclude) return generateRandomBetween(min, max, exclude);
  else return randNumber;
};

type Props = {
  userChoice: number;
  onGameOver: any;
};

const renderListitem = (listLength: number, itemData: any) => (
  <View key={itemData.item} style={styles.listItem}>
    <Bodytext>#{listLength - itemData.index}: </Bodytext>
    <Bodytext>{itemData.item}</Bodytext>
  </View>
);
const Gamescreen = ({ userChoice, onGameOver }: Props) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    console.log(currentGuess, userChoice);
    if (currentGuess === userChoice) onGameOver(pastGuesses.length);
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction: string) => {
    console.log(direction, currentGuess, userChoice);
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction == "lower") {
      currentHigh.current = currentGuess;
    } else if (direction == "greater") {
      currentLow.current = currentGuess + 1;
    }
    const guess = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(guess);
    //setRounds(rounds + 1);
    setPastGuesses((curPastGuesses) => [guess.toString(), ...curPastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <Text>The computers guess</Text>
      <Number>{currentGuess}</Number>
      <Card style={styles.buttonContainer}>
        <MainButton pressHandler={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name={"md-remove"} size={24} color={"white"} />
        </MainButton>
        <MainButton pressHandler={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name={"md-add"} size={24} color={"white"} />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListitem(guess, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          contentContainerStyle={styles.list}
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderListitem.bind(this, pastGuesses.length)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 20 : 10,
    width: 300,
    maxWidth: "80%",
  },
  list: {
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  listContainer: {
    width: Dimensions.get("window").height > 600 ? "50%" : "70%",
    flex: 1,
    alignItems: "center",
  },
  listItem: {
    width: "80%",
    borderColor: "gray",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Gamescreen;
