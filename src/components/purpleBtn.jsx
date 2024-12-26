import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function PurpleBtn({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.PurpleBtn} onPress={onPress}>
      <Text style={styles.PurpleBtnLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  PurpleBtn: {
    backgroundColor: "#902BE9",
    paddingHorizontal: 140,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  PurpleBtnLabel: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
