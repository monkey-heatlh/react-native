import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Select({ label, onPress, Btnstyle }) {
  const style = StyleSheet.create({
    button: {
      backgroundColor: Btnstyle ? "#902BE9" : "#3F1F63",
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      width: 160,
      height: 120,
    },
    label: {
      fontSize: 22,
      fontWeight: 600,
      color: "#ffffff",
    },
  });
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.label}>{label}</Text>
    </TouchableOpacity>
  );
}
