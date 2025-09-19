// screens/MenuScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const tabs = ["Meals", "Snacks", "Slides"]

const menuData = {
 Meals: [
    { 
      id: "1",
      name: "Sambar rice",
      price: 1300,
      quantity: 1,
      image: "https://media.istockphoto.com/id/1422326139/photo/close-up-image-of-pile-of-boiled-white-rice-puri-and-bowls-of-chutney-and-dips-on-metal-thali.jpg?s=1024x1024&w=is&k=20&c=je-InJlMbzMZGBTOn3yDuhr4Vk5QYbLfk6SCQkwr4iY=",
    },
    {
      id: "2",
      name: "Fried rice",
      price: 1400,
      quantity: 1,
      image: "https://media.istockphoto.com/id/1292617507/photo/tasty-veg-schezwan-fried-rice-served-in-bowl-over-a-rustic-wooden-background-indian-cuisine.jpg?s=612x612&w=0&k=20&c=MlfiFWbcPDUj2wnjtxoHBxSUrRrKb9c1OR8rS9H4goc=",
    },
    {
      id: "3",
      name: "Biriyani",
      price: 1400,
      quantity: 1,
      image: "https://media.istockphoto.com/id/1277579909/photo/egg-biryani.jpg?s=1024x1024&w=is&k=20&c=08iPQXSEBK_hishIBJR4h91hLwv3BSmBA1ublAk6Y4A=",
    },
    {
      id: "4",
      name: "curd rice",
      price: 1600,
      quantity: 1,
      image: "https://media.istockphoto.com/id/1198579740/photo/curd-rice-dahi-bhat-dahi-chawal-basmati-rice-mixed-with-yogurt-or-curd-and-seasoning.jpg?s=612x612&w=0&k=20&c=K8XjnD1la9h7H4aD24Pc0MhQov8gy-JQdbTUGM-YNkg=",
    },
  ],
  Snacks: [
    { 
      id: "1",
      name: "Samosa",
      price: 1300,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftb3NhfGVufDB8fDB8fHww",
    },
    {
      id: "2",
      name: "Pizza",
      price: 1400,
      quantity: 1,
      image: "https://media.istockphoto.com/id/503818102/photo/mediterranean-pizza.jpg?s=1024x1024&w=is&k=20&c=KcMHR_aWxtBBuSC0gp0ccvT7EAYIxV6SGg7qTeHxrBg=",
    },
    {
      id: "3",
      name: "pav bhaji",
      price: 1400,
      quantity: 1,
      image: "https://media.istockphoto.com/id/1250269206/photo/image-of-traditional-indian-mumbai-food-pav-bhaji-dish-served-on-patterned-blue-plate-with.jpg?s=1024x1024&w=is&k=20&c=t6TnbCcqVEbhDBUM7FDZ6mHjxfB5a8xc5Mj1VlfcCuk=",
    },
    {
      id: "4",
      name: "Chicken Lollipop ",
      price: 1600,
      quantity: 1,
      image: "https://media.istockphoto.com/id/1292562047/photo/assorted-indian-foods-tandoori-chicken-chicken-biryani-chicken-65-and-chicken-masala-on.jpg?s=1024x1024&w=is&k=20&c=RDm1QdNKNwbakVf67Jjjppnbk2m34vSmbLHU8lsBMNI=",
    },
  ],
   Slides: [
    { 
      id: "1",
      name: "burger",
      price: 1300,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "2",
      name: "manchuria",
      price: 1400,
      quantity: 1,
      image: "https://media.istockphoto.com/id/1145431996/photo/veg-or-chicken-manchurian.jpg?s=1024x1024&w=is&k=20&c=HM7-tk-BFsdsnUXAqdTPzApLXtf_XlBtCJoQu1EpZic=",
    },
    {
      id: "3",
      name: "panner pizza",
      price: 1400,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1669281645373-a83c87336565?q=80&w=980&auto=format&fit=crop",
    },
    {
      id: "4",
      name: "Chicken Lollipop",
      price: 1600,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1700514015106-4d8480938dcb?q=80&w=870&auto=format&fit=crop",
    },
  ],
  
};

export default function MenuScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("Meals");
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleFavorite = (item) => {
    if (favorites.some((fav) => fav.id === item.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const addToCart = (item) => {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      setCart(
        cart.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Tabs */}
      <View style={styles.tabs}>
        {Object.keys(menuData).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab && {
                borderBottomWidth: 2,
                borderBottomColor: "orange",
              },
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={{
                fontWeight: selectedTab === tab ? "bold" : "normal",
              }}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Items */}
      <FlatList
        data={menuData[selectedTab]}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate("FoodDetailScreen", { item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <TouchableOpacity
              style={styles.heart}
              onPress={() => toggleFavorite(item)}
            >
              <Ionicons
                name={
                  favorites.find((f) => f.id === item.id)
                    ? "heart"
                    : "heart-outline"
                }
                size={20}
                color="orange"
              />
            </TouchableOpacity>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>₦{item.price}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => addToCart(item)}
            >
              <Text style={{ color: "#fff" }}>Add to Cart</Text>
            </TouchableOpacity>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  tab: {
    padding: 8,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  heart: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  name: {
    marginTop: 8,
    fontWeight: "bold",
  },
  price: {
    color: "gray",
  },
  button: {
    marginTop: 6,
    backgroundColor: "orange",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
