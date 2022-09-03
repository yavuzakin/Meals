import { FlatList } from "react-native";
import CategoryItem from "../components/CategoryItem";

import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = (itemData) => {
  return (
    <CategoryItem title={itemData.item.title} color={itemData.item.color} />
  );
};

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      key={2}
      style={{ marginTop: 16 }}
    />
  );
};

export default CategoriesScreen;
