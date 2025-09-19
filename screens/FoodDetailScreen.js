// screens/FoodDetailScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";

const recommendedItems = [
  {
    id: "1",
    name: "Samosa",
    price: 1300,
    image:
      "https://media.istockphoto.com/id/2148933061/photo/selective-focus-samosa-spiced-potato-filled-pastry-crispy-savory-popular-indian-snack-with.jpg?s=1024x1024&w=is&k=20&c=braE0GOBhCSickLvX4EGK2Sy2z0Wu1TDVilPRAjWK3M=",
  },
  {
    id: "2",
    name: "Chicken",
    price: 1600,
    image:
      "https://media.istockphoto.com/id/1186685544/photo/indian-chicken-vindaloo-in-a-brass-wok-ready-to-be-served-on-a-grunge-metal-wood-and-gold.jpg?s=1024x1024&w=is&k=20&c=rEtwDBclGWxS2zLBHXEGmBo3piVlEk4MKrwpgxb1LRI=",
  },
  {
    id: "3",
    name: "Biryani",
    price: 1400,
    image:
      "https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=612x612&w=0&k=20&c=ueFrghYZuKAty-rFVe5dtMtNIbn0jaUsSvCUwTVOmd8=",
  },
];

const FoodDetailScreen = ({ route, navigation }) => {
  const { item } = route.params || {};
  const [quantity, setQuantity] = useState(1);

  const price = item?.price || 0;
  const total = price * quantity;

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <ScrollView style={styles.container}>
      {/* Food Image */}
      <Image source={{ uri: item?.image }} style={styles.foodImage} />

      {/* Title & Price */}
      <Text style={styles.foodTitle}>{item?.name || "Food Item"}</Text>
      <Text style={styles.price}>₦{price.toLocaleString()}</Text>

      {/* Quantity selector */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.qtyButton} onPress={decrease}>
          <Text style={styles.qtyText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.qtyNumber}>{quantity}</Text>
        <TouchableOpacity style={styles.qtyButton} onPress={increase}>
          <Text style={styles.qtyText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Description */}
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>
        {item?.name || "This food"} is a delicious and popular dish. Served fresh with rich spices and flavors that make it unforgettable!
      </Text>
      <Text style={styles.calories}>
        (Each serving contains approximately 240 calories)
      </Text>

      {/* Recommended Section */}
      <Text style={styles.sectionTitle}>Recommended</Text>
      <FlatList
        data={recommendedItems}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.recommendedCard}>
            <Image source={{ uri: item.image }} style={styles.recommendedImage} />
            <Text style={styles.recommendedName}>{item.name}</Text>
            <Text style={styles.recommendedPrice}>
              ₦{item.price.toLocaleString()}
            </Text>
          </View>
        )}
      />

      {/* Total & Add to Cart */}
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ₦{total.toLocaleString()}</Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate("YourOrderScreen",[item])}
        >
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  foodImage: {
    width: "100%",
    height: 220,
    borderRadius: 12,
  },
  foodTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    marginVertical: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
  },
  qtyButton: {
    backgroundColor: "orange",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },
  qtyText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  qtyNumber: {
    fontSize: 20,
    marginHorizontal: 12,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  description: {
    fontSize: 15,
    color: "#333",
    marginTop: 6,
  },
  calories: {
    fontSize: 14,
    color: "red",
    marginTop: 5,
  },
  recommendedCard: {
    width: 120,
    marginRight: 12,
    marginTop: 10,
  },
  recommendedImage: {
    width: "100%",
    height: 80,
    borderRadius: 10,
  },
  recommendedName: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 5,
  },
  recommendedPrice: {
    fontSize: 14,
    color: "green",
    marginTop: 2,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cartButton: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  cartButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default FoodDetailScreen;
