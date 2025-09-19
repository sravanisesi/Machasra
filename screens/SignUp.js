import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handlePressG = () => {
    Linking.openURL('https://www.google.webp/');
  }; 
const handlePressF = () => {
    Linking.openURL('https://www.fb.jpg/');
  };
const handlePressT = () => {
    Linking.openURL('https://www.twitter.jpg/');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/stfood.jpg')}
        style={styles.heroImage}
        resizeMode="cover"
      />

      {/* Tabs */}
      <View style={styles.tabRow}>
        <Text style={styles.tabText} onPress={() => navigation.navigate()}>sign in</Text>
        <Text
          style={[styles.tabText, styles.activeTab]}
          >
          sign up
        </Text>
      </View>
    

      {/* Inputs */}
      <CustomInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomInput
        placeholder="Create Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.forgotWrapper}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('SignIn')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerRow}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      <Text style={styles.signInUsing}>Sign in Using</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity onPress={handlePressG}>
        <AntDesign name="google" size={32} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePressF}>
        <FontAwesome name="facebook-square" size={32} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePressT}>
        <Entypo name="twitter" size={32} color="#1DA1F2" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CustomInput = ({ placeholder, ...props }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor="#666"
    {...props}
  />
);

// same styles as before...
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 24, paddingTop: 40 },
  heroImage: { width: 160, height: 160, borderRadius: 80, alignSelf: 'center', marginTop: 16 },
  tabRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 16 },
  tabText: { fontSize: 20, marginHorizontal: 20, color: '#999', textTransform: 'lowercase' },
  activeTab: { color: '#ff6600', fontWeight: '600' },
  tabIndicator: { height: 2, backgroundColor: '#ff6600', width: 70, alignSelf: 'flex-start', marginLeft: 70, marginTop: 4 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 14, paddingVertical: 10, marginTop: 20, fontSize: 16 },
  forgotWrapper: { alignItems: 'flex-end', marginTop: 8 },
  forgotText: { color: '#999', fontSize: 14 },
    loginBtn: { backgroundColor: '#ff6600', borderRadius: 20, paddingVertical: 14, marginTop: 24, alignItems: 'center', elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3 },
  loginText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  dividerRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 24 },
  line: { flex: 1, height: 1, backgroundColor: '#ccc' },
  orText: { marginHorizontal: 8, color: '#444', fontWeight: '500' },
  signInUsing: { textAlign: 'center', marginBottom: 16, color: '#444' },
  socialRow: { flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 24 },
});

export default SignInScreen;