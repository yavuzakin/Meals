import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    marginVertical: 4,
    // marginHorizontal: 24,
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
  subtitle: {
    color: "white",
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
});
