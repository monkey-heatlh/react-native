import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function GoBack() {
  return (
    <TouchableOpacity style={style.goBack} onPress={() => navigation.goBack()}>
      <Image style={style.icon} source={require("../images/leftArrow.png")} />
      <Text>뒤로</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  goBack: {
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    marginTop: 30,
    marginRight: "auto",
  },
  icon: {
    width: 24,
    height: 24,
  },
});
