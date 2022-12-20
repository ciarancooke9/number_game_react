import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScreen(params) {
  return (
    <View style={style.screen}>
      <Title>Opponents Guess</Title>
      <View>
        <Text>Higher or Lower</Text>
        {/* <View>Log Rounds</View> */}
      </View>
    </View>
  );
}

export default GameScreen;

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
