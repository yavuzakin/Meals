import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

const IconButton = ({ name, color, size, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <AntDesign name={name} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
