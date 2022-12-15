import { Text, View } from "react-native";

function PrimaryButton({ children }) { //takes button text as prop
  return(
  <View>
    <Text>{children}</Text>
  </View>);
}

export default PrimaryButton;
