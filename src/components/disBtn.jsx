import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function DisBtn({ label }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.Text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    color: "#C5c5c5",
    borderWidth: 1,
    borderColor: "#C5c5c5",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
  },
  Text: {
    color: "#C5c5c5",
  },
});
