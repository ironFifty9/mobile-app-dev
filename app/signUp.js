import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Checkbox from "expo-checkbox";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkboxValue, onClick ] = useState(false); 
 
  const handleSignUp = () => {
    console.log("Sign Up Pressed", { name, email, password });
    //If user has not entered all values, don't do anything
    
      if (name.length < 3){
        alert("Enter a valid name!")
      }
      else if (email.length < 3){
        alert("Enter a valid email address!")
      }
      else if (password.length < 3){
        alert("Enter a valid password!")
      }
      else if (checkboxValue != true ){
        alert("Please agree to the terms and conditions before proceeding")
      }      
      else {
        //On sign up, display the name, email and password on the page below the button
        // alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
        alert("Sign Up Successful!")
      };
    
    
  };  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={newName => setName(newName)}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={newEmail => setEmail(newEmail)}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={newPassword => setPassword(newPassword)}
        placeholder="Enter your password"
        secureTextEntry
      />

      <View style={styles.checkboxContainer}>
      <Checkbox 
        style={styles.checkBox}
        value={checkboxValue}
        onValueChange={newCheckboxValue => onClick(newCheckboxValue)}
      />   
      <Text style={styles.label}>Accept Terms and Conditions</Text>
      </View>


      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      <View onPress={handleSignUp}>
        <Text style={styles.title}>Result</Text>
        <Text >Name: {name}</Text>
        <Text >Email: {email}</Text>
        <Text >Password: {password}</Text>
        <Text >Checkbox: {checkboxValue ? "Checked" : "Unchecked"}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#888 ",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    alignSelf: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.4)",
    elevation: 3,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  checkboxContainer: {
    flexDirection: "row",
    
  },
  checkBox: {
    marginRight: 10
  },

  button: {
    backgroundColor: "#00cc00",
    padding: 15,
    width: "50%",
    alignSelf: "center",
    justifyContent: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.4)",
    elevation: 3,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignUpScreen;
