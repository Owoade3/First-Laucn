import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.page}>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.subtitle}>
        By creating an account, you can start a new one with Quizzly.
      </Text>

      {/* Name Input */}
      <View style={styles.inputWrapper}>
        <Icon name="account" size={20} color="#888" />
        <TextInput
          placeholder="Enter your Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputWrapper}>
        <Icon name="email" size={20} color="#888" />
        <TextInput
          placeholder="Enter your Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputWrapper}>
        <Icon name="lock" size={20} color="#888" />
        <TextInput
          placeholder="Enter your Password"
          style={styles.input}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputWrapper}>
        <Icon name="lock" size={20} color="#888" />
        <TextInput
          placeholder="Enter your Confirm Password"
          style={styles.input}
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Icon name={showConfirmPassword ? 'eye' : 'eye-off'} size={20} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Create Account Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Social Icons */}
      <View style={styles.socialIcons}>
        <Icon name="google" size={30} color="#DB4437" />
        <Icon name="facebook" size={30} color="#4267B2" />
        <Icon name="apple" size={30} color="#000" />
      </View>

      <Text style={styles.loginText}>
        Already use Quizzly? <Text style={styles.loginLink}>Log in</Text>
      </Text>
      <View>
      <Text>Name:{name}</Text>
      <Text>Email:{email}</Text>
      <Text>Password:{password}</Text>
      <Text>Confirm Password:{confirmPassword}</Text>
      </View>
    </View>
  );
};

export default SignUpScreen;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {
    color: '#888',
    marginBottom: 30,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
    height: 50,
    backgroundColor: '#f9f9f9',
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#000',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 30,
  },
  loginText: {
    textAlign: 'center',
    color: '#888',
  },
  loginLink: {
    color: '#000',
    fontWeight: 'bold',
  },
});
