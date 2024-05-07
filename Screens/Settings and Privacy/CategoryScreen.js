import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { category } from "../../API/data";

const NewsScreen = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = category;

  const toggleCategorySelection = (categoryId) => {
    const isSelected = selectedCategories.includes(categoryId);
    if (isSelected) {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId)
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  return (
    <View style={styles.container}>
      <Text> Categories</Text>
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            onPress={() => toggleCategorySelection(category.id)}
            style={[
              styles.categoryButton,
              {
                backgroundColor: selectedCategories.includes(category.id)
                  ? "black"
                  : "grey",
              },
            ]}
          >
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.selectedCategories}>
        Selected Categories: {selectedCategories.join(", ")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryContainer: {
    alignItems: "flex-start",
    padding: 10,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    borderRadius: 5,
  },
  categoryText: {
    color: "white",
  },
});

export default NewsScreen;
