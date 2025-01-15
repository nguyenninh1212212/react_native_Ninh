import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const ButtonCustom = ({
  title,
  onMyPress,
}: {
  title: string;
  onMyPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onMyPress}>
      <Text style={{ color: "white" }}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    color: "White",
    padding: 10,
    alignItems: "center",
    marginBottom: 100,
    marginTop: 100,
    marginRight: 100,
    marginLeft: 100,
    height: 200,
    width: 200,
    justifyContent: "center",
  },
  button_text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFFFFF",
  },
});
export default ButtonCustom;
