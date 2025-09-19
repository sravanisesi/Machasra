import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const categories = ['Meals', 'Slides', 'Snacks', 'Drinks'];
const popularItems = [
  { id: '1', name: 'Noodeles', price: '₦1,200', image: require('../assets/noodles.jpg') },
  { id: '2', name: 'Samosa', price: '₦1,300', image: require('../assets/samosa.jpg') },
  { id: '3', name: 'Pizza', price: '₦14,00', image: require('../assets/pizza.jpg') },
  { id: '4', name: 'chickenrice',price: '₦1500', image: require('../assets/stfood.jpg')},
  // add more items…
];

export default function Homescreen({navigation}) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={()=>navigation.navigate('MenuScreen')}> 
          <Feather name="menu" size={28} color="#000" />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>

          <Feather name="shopping-cart" size={24} color="#000" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Greeting */}
        <Text style={styles.greeting}>Hello Chinwe</Text>
        <Text style={styles.title}>
          What would you like to <Text style={{ color: '#FF5A00' }}>Eat?</Text>
        </Text>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Feather name="search" size={22} color="#999" style={{ marginHorizontal: 8 }} />
          <TextInput
            placeholder="Enter your dish name"
            style={{ flex: 1, fontSize: 16 }}
          />
          <TouchableOpacity style={styles.filterBtn}>
            <Feather name="filter" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 16 }}
        >
          {categories.map(cat => (
            <TouchableOpacity key={cat} style={styles.categoryBtn}
                onPress={() => navigation.navigate('MenuScreen', { category: cat })} 
                >
              <Text style={styles.categoryText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Special Offer */}
        <Text style={styles.sectionTitle}>Today's Special offer</Text>
        <View style={styles.specialCard}>
          <Image
            source={require('../assets/samosa.jpg')}
            style={styles.specialImage}
          />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.specialTitle}>Yummies Special Burger</Text>
            <Text style={styles.specialPrice}>₦1,800</Text>
            <TouchableOpacity style={styles.addBtn}>onPress={()=>navigation.navigate('MenuScreen')}
        
              <Text style={styles.addBtnText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Popular Now */}
        <Text style={styles.sectionTitle}>Popular Now</Text>
        <FlatList
          data={popularItems}
          numColumns={2}
          keyExtractor={item => item.id}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <View style={styles.popularCard}>
              <TouchableOpacity onpress={()=>navigation.navigate('MenuScreen')}>
              <Image source={item.image} style={styles.popularImage} />
              <TouchableOpacity style={styles.heartIcon}>onPress={()=>navigation.navigate('HomeScreen')}
                <Feather name="heart" size={20} color="#ac1818ff" />
              </TouchableOpacity>
              
              <Text style={styles.popularName} >{item.name}</Text>
              <Text style={styles.popularPrice}>{item.price}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>

      {/* Bottom Nav - dummy static */}
      <View style={styles.bottomNav}>
        <Feather name="home" size={28} color="#FF5A00" />
        <MaterialIcons name="restaurant-menu" size={28} color="#FF5A00" />
        <Feather name="heart" size={28} color="#FF5A00" />
        <MaterialIcons name="account-circle" size={28} color="#FF5A00" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16, paddingTop: 40 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    alignItems: 'center',
  },
  greeting: { fontSize: 16, color: '#555', marginTop: 8 },
  title: { fontSize: 24, fontWeight: '700', marginTop: 4 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 16,
    paddingHorizontal: 4,
  },
  filterBtn: {
    backgroundColor: '#FF5A00',
    padding: 10,
    borderRadius: 10,
    marginRight: 4,
  },
  categoryBtn: {
    borderColor: '#FF5A00',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginRight: 10,
  },
  categoryText: { color: '#FF5A00', fontWeight: '600' },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginVertical: 12 },
  specialCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  specialImage: { width: 80, height: 80, borderRadius: 12 },
  specialTitle: { fontSize: 16, fontWeight: '600' },
  specialPrice: { fontSize: 16, color: '#FF5A00', marginVertical: 4 },
  addBtn: {
    backgroundColor: '#FF5A00',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    alignSelf: 'flex-start',
  },
  addBtnText: { color: '#fff', fontWeight: '600' },
  popularCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    width: '48%',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 8,
  },
  popularImage: { width: '100%', height: 100, borderRadius: 12 },
  heartIcon: { position: 'absolute', top: 8, right: 8 },
  popularName: { fontSize: 16, fontWeight: '600', marginTop: 6 },
  popularPrice: { color: '#FF5A00', marginTop: 2 },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
});