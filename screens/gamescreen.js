import { Text, View } from "react-native";

function GameScreen(params) {
  return (
    <View>
      <Text>Opponents Guess</Text>
      <View>
        <Text>Higher or Lower</Text>
        <View>Log Rounds</View>
      </View>
    </View>
  );
}

export default GameScreen;
