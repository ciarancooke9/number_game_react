import { Text, StyleSheet } from "react-native";

import Colors from "../assets/constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.accent500,
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
