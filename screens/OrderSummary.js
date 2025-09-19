import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
const orderData = [
  {
    id: '1',
    name: 'jollof rice',
    price: 1300,
    quantity: 1,
    image: require('../assets/j.jpg'), 
  },
  {
    id: '2',
    name: 'Chicken lollipop',
    price: 1600,
    quantity: 1,
    image: require('../assets/k.jpg'),
  },
  {
    id: '3',
    name: 'Pizza',
    price: 1400,
    quantity: 1,
    image: require('../assets/l.jpg'),
  },
];

const deliveryFee = 100;

export default function OrderSummary({navigation}) {
  const subtotal = orderData.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal + deliveryFee;

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={ item.image } style={styles.itemImage} />
      <View style={styles.itemText}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemQty}>₦{item.price} * {item.quantity}</Text>
      </View>
      <Text style={styles.itemPrice}>₦{item.price}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.arrow}>
                <TouchableOpacity onPress={()=>navigation.navigate('YourOrderScreen')} >
              <Ionicons name="arrow-back" size={24}  />
              </TouchableOpacity>
        
              <Text style={styles.header}>Order Summary</Text>
              <Feather name="help-circle" size={24} color="black" />
              </View>
<View style={styles.progressWrapper}>
    
                <View style={[styles.progressDot, styles.activeDot]}><Text style={styles.tick}>✓</Text></View>
                <View style={styles.progressLine}/>
                <View style={[styles.progressDot, styles.activeDot]}/>
                <View style={styles.progressline}/>
                <View style={styles.progressDot}/>
    

      </View>
      
      <View style={styles.orderGrid}>
      <FlatList
        data={orderData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      />

      <View style={styles.summary}>
        <Text style={styles.summaryText}>Sub total: <Text style={styles.price}>₦{subtotal}</Text></Text>
        <Text style={styles.summaryText}>Delivery fee: <Text style={styles.price}>₦{deliveryFee}</Text></Text>
        <Text style={styles.totalText}>Amount payable: <Text style={styles.totalPrice}>₦{total}</Text></Text>
      </View>
      </View>

      <View style={styles.addressBox}>
        <Text style={styles.addressTitle}>Delivery Address</Text>
        <Text>Name: Sravani</Text>
        <Text>Address: Bobbili</Text>
        <Text>City: Bobbili</Text>
        <Text>Phone: 345675678</Text>
      </View>

      <TouchableOpacity style={styles.paymentButton} onPress={()=>navigation.navigate('PaymentScreen')}>
        <Text style={styles.paymentText}>Proceed to payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:20,
paddingTop:40,
    backgroundColor: '#fff',
    
  },
   progressWrapper: {
    flexDirection: 'row',
    justifyContent:'center',
    marginVertical:20,

alignItems:"center",
  

  },
  arrow:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor:'white',
  
  },
  activeDot:{
    backgroundColor:'green',
  },
  activeLine:{
    backgroundColor:'green'
  },
    progressLine: {
 width:150,
 height:2,
 backgroundColor:'green'
  },
  progressline:{
     width:150,
 height:2,
 backgroundColor:'#ccc'
  },
tick: {
  color: '#fff',
  fontSize: 10,
  fontWeight: 'bold',
  textAlign: 'center',
  lineHeight: 12, 
},

 
 header: {
    fontSize: 24,
    fontWeight: 'bold', 
  },
  orderGrid:{
    borderWidth:1,
    padding:15,
    borderRadius:5,  
    borderColor: '#ccc', 
    
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    paddingBottom: 8,
    borderBottomWidth:1,
    borderColor: '#ccc', 

  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 6,
    marginRight: 10,
  },
  itemText: {
    flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemQty: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontWeight: 'bold',
  },
  summary: {
    marginTop: 20,
  },
  summaryText: {
    fontSize: 16,
    marginVertical: 4,
  },
  price: {
    fontWeight: '600',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  totalPrice: {
    color: '#000',
  },
  addressBox: {
    marginTop: 35,
    padding: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
  },
  addressTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paymentButton: {
    marginTop: 30,
    backgroundColor: '#ff6600',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  paymentText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});