import { useContext, useLayoutEffect } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import List from "../components/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailScreen = ({ route, navigation }) => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const isFavoriteMeal = favoriteMealsCtx.ids.includes(mealId);

  const toggleFavoriteStatusHandler = () => {
    isFavoriteMeal
      ? favoriteMealsCtx.removeFavorite(mealId)
      : favoriteMealsCtx.addFavorite(mealId);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name={isFavoriteMeal ? "heart" : "hearto"}
            color="white"
            size={24}
            onPress={toggleFavoriteStatusHandler}
          />
        );
      },
    });
    navigation.setOptions({ title: selectedMeal.title });
  }, [navigation, isFavoriteMeal, toggleFavoriteStatusHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List dataList={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List dataList={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "center",
    margin: 8,
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "90%",
  },
});
