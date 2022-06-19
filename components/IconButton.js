import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color, onPressFun }) {
  return (
    <Pressable
      onPress={onPressFun}
      style={(pressed) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
