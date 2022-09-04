import { View, Text, StyleSheet } from "react-native";

const List = ({ dataList }) => {
  return dataList.map((data, index) => (
    <View key={index} style={styles.listItem}>
      <Text style={styles.itemText}>{data}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    // marginHorizontal: 4,
    marginVertical: 12,
    backgroundColor: "#AFB4FF",
  },
  itemText: {
    color: "#1C3879",
    fontFamily: "open-sans",
  },
});
