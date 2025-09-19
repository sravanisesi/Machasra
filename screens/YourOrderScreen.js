import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function YourOrderScreen({navigation}) {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Jollof rice",
      price: 1300,
      qty: 1,
      image:
        "https://media.istockphoto.com/id/184250970/photo/mutton-biryani.jpg?s=1024x1024&w=is&k=20&c=nuGYu1Zf17Q0Ay6kn5f4_xk_NehqK94elUHRy7549ns=",
    },
    {
      id: "2",
      name: "Chicken lollipop",
      price: 1600,
      qty: 1,
      image:
        "https://media.istockphoto.com/id/1261880308/photo/honey-garlic-lollipop-chicken-wings-with-carrots-celery-and-ranch-dip.jpg?s=1024x1024&w=is&k=20&c=4UvJCAmlcfOSlJ_EXl03JIwLgfWX2PL7nUY8pr-BSLw=",
    },
    {
      id: "3",
      name: "Pizza",
      price: 1400,
      qty: 1,
      image:
        "https://media.istockphoto.com/id/1346334877/photo/pizza-making.jpg?s=612x612&w=0&k=20&c=oemixKKJtg3C2jhfnBbJvtXv1B2vAghhfDT2VHI2VZs=",
    },
  ]);

  const increment = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your order</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>₦{item.price}</Text>
            </View>
            <View style={styles.qtyContainer}>
              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={() => decrement(item.id)}
              >
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.qtyNumber}>{item.qty}</Text>
              <TouchableOpacity
                style={styles.qtyBtn}
                onPress={() => increment(item.id)}
              >
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Footer with total and buttons */}
      <View style={styles.footer}>
        <Text style={styles.totalLabel}>Total Price</Text>
        <Text style={styles.totalValue}>₦{totalPrice}</Text>
      </View>

      <TouchableOpacity style={styles.checkoutBtn} onPress={()=>navigation.navigate('DeliveryScreen',[items])}>
        <Text style={styles.checkoutText}>Check out</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addCartBtn}>
        <Text style={styles.addCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
  },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
  details: { flex: 1 },
  name: { fontSize: 16, fontWeight: "600" },
  price: { fontSize: 14, color: "gray" },
  qtyContainer: { flexDirection: "row", alignItems: "center" },
  qtyBtn: {
    backgroundColor: "orange",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  qtyText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  qtyNumber: { marginHorizontal: 8, fontSize: 16 },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
  },
  totalLabel: { fontSize: 16, fontWeight: "600" },
  totalValue: { fontSize: 16, fontWeight: "bold" },
  checkoutBtn: {
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 8,
  },
  checkoutText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  addCartBtn: {
    borderWidth: 1,
    borderColor: "orange",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  addCartText: { color: "orange", fontSize: 16, fontWeight: "600" },
});
