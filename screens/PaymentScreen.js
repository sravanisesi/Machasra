import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Button, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

const img=require('../assets/tick.png');
export default function PaymentScreen({navigation}) {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expiryCode, setExpiryCode] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [payOnDelivery, setPayOnDelivery] = useState(false);
  const [modalVisible, setModalVisible ] = useState(false)

  const paymentMethods = [
    { id: 'rupay', label: 'RuPay', image: require('../assets/rupay.png') },
    { id: 'visa', label: 'Visa', image: require('../assets/visa.png')},
    { id: 'mastercard', label: 'MasterCard', image: require('../assets/mscarrd.png') },
    { id: 'phonepe', label: 'PhonePe', image: require('../assets/pp.png') },
  ];
 
  const handleCompleteOrder = () => {
    if (payOnDelivery) {
      alert('Order placed with Pay on Delivery!');
    } else {
      alert (`Payment method: ${selectedMethod}\nCard: ${cardNumber}`);
    }
  };
    


 return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.arrow}>
        <TouchableOpacity onPress={()=>navigation.navigate('OrderSummary')} >
      <Ionicons name="arrow-back" size={24}  />
      </TouchableOpacity>
      
      <Text style={styles.header}>Payment</Text>
      <Feather name="help-circle" size={24} color="black" />
      </View>
      <View style={styles.progresswrapper}>
        <View style={[styles.progressdot, styles.activedot]}><Text style={styles.tick}>✓</Text></View>
        <View style={styles.progressline}/>
        <View style={[styles.progressdot, styles.activedot]}><Text style={styles.tick}>✓</Text> </View>
        <View style={styles.progressline}/>
        <View style={[styles.progressdot, styles.activedot]}/>
      </View>
      <Text style={styles.subHeader}>Choose your payment method</Text>

      <View style={styles.paymentOptions}>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.paymentOption,
              selectedMethod === method.id && styles.selectedOption,
            ]}
            onPress={() => {
              setSelectedMethod(method.id);
              setPayOnDelivery(false);
            }}
          >
            <Image source={method.image} style={styles.iconImage} />
          </TouchableOpacity>
        ))}
      </View>

      {selectedMethod && (
        <View style={styles.cardForm}>
          <TextInput
            placeholder="CARD NUMBER"
            style={styles.input}
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="number-pad"
          />
          <TextInput
            placeholder="NAME ON CARD"
            style={styles.input}
            value={nameOnCard}
            onChangeText={setNameOnCard}
          />
          <View style={styles.row}>
            <TextInput
              placeholder="EXPIRY CODE"
              style={[styles.input, styles.halfInput]}
              value={expiryCode}
              onChangeText={setExpiryCode}
              keyboardType="number-pad"
            />
            <TextInput
              placeholder="SECURITY CODE"
              style={[styles.input, styles.halfInput]}
              value={securityCode}
              onChangeText={setSecurityCode}
              secureTextEntry
              keyboardType="number-pad"
            />
          </View>
        </View>
      )}

      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity 
        style={[styles.payOnDeliveryButton, payOnDelivery && styles.selectedPayOnDelivery]}
        onPress={() => {
          setPayOnDelivery(true);
          setSelectedMethod(null);
        }}
      >
        <Text style={styles.payOnDeliveryText}>Pay on delivery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.completeOrderButton} onPress={()=>setModalVisible(true)}>
        <Text style={styles.completeOrderText}>Complete Order</Text>
      </TouchableOpacity>
       <Modal
  visible={modalVisible}
  transparent={true}
  animationType="slide"
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalView}>
      <Image source={img} style={styles.sctk} />
      <Text style={styles.modalText}>Your order has been placed successfully</Text>

      <View style={styles.modalButtons}>
        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
          <Text style={styles.modalButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.modalButton}>
          <Text style={styles.modalButtonText}>Home Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  arrow:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  progresswrapper:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:24,
    justifyContent:"center"
  },
  tick: {
  color: '#fff',
  fontSize: 10,
  fontWeight: 'bold',
  textAlign: 'center',
  lineHeight: 12, 
},
  progressdot:{
    width:12,
    height:12,
    borderRadius:6,
    backgroundColor:"#ccc"
  },
  sctk:{
    height:70,
    width:70,
  },
  activedot:{
    backgroundColor:"green"
  },
  progressline:{
    width:130,
    height:2,
    backgroundColor:"green"
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold', 
  },
  subHeader: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  paymentOption: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  selectedOption: {
    borderColor: '#007AFF',
    backgroundColor: '#e0f0ff',
  },
  iconImage: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
  },
  cardForm: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#666',
  },
  payOnDeliveryButton: {
    borderWidth: 1,
    borderColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedPayOnDelivery: {
    backgroundColor: '#e0f0ff',
  },
  payOnDeliveryText: {
    color: '#007AFF',
    fontWeight: '600',
  },
  completeOrderButton: {
    marginTop: 20,
    backgroundColor: '#FF6B00',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  completeOrderText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
 modalView: {
  backgroundColor: '#fff',
  padding: 20,
  borderRadius: 10,
  alignItems: 'center',
  width: '80%',
},
  modalText: {
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
  marginVertical: 20,
},
modalButtons: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 20,
  width: '100%',
},
  modalOverlay: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
},
  modalButton: {
  flex: 1,
  marginHorizontal: 5,
  backgroundColor: '#81b94c',
  padding: 10,
  borderRadius: 8,
  alignItems: 'center',
},
modalButtonText: {
  color: '#fff',
  fontWeight: 'bold',
},  
});