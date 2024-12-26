import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function PurpleBtn({ label, onPress, Btnstyle }) {
  const styles = StyleSheet.create({
    PurpleBtn: {
      backgroundColor: Btnstyle ? "#902BE9" : "#690ED4",
      paddingHorizontal: "auto",
      paddingVertical: 16,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    PurpleBtnLabel: {
      color: Btnstyle ? "#FFFFFF" : "#C5C5C5",
      fontSize: 16,
    },
  });

  return (
    <TouchableOpacity style={styles.PurpleBtn} onPress={onPress}>
      <Text style={styles.PurpleBtnLabel}>{label}</Text>
    </TouchableOpacity>
  );
}
