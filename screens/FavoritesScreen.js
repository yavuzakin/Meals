import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import MealList from "../components/MealList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  const favoritesMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoritesMealsCtx.ids.includes(meal.id)
  );

  return favoriteMeals.length > 0 ? (
    <MealList items={favoriteMeals} />
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#1C3879",
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
});
