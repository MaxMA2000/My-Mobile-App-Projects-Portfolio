import { useLayoutEffect, useContext } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDeatils from "../components/MealDetails";

import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailScreen = ({ route, navigation }) => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    console.log("Press the Favorite Button!", mealIsFavorite);
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({id: mealId}));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({id: mealId}));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPressFun={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDeatils
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    margin: 10,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

export default MealDetailScreen;
