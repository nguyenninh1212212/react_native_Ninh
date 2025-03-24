import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get your groceries with nectar</Text>

      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/f806/f060/4e1b9f8b9d7440c6aff2ea6b09677ca1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PgpUog6OzHUjpm9CO6GkNq8qk007zYtLl4BlpWymNTMN7blN9Pwncj3Ccp1ogmBj00Ce-nM7Zqj9feisecWvy5~3eR6I8OUhDF2VENQ7MAb0hW53hsSu9WLlPDOwr2GmARv7HiVVF1KTGsjzXkF2OpZkrbHjw5I0stKLUJPx48r8Jj0mZHJcfZ-3ytDJXru8cw-tR~OIvaB1G67c8DDigy6twsuLQtS3X10wYzL7CAyA7~i4A2-iLd-Yxn5DRAn6zzd~ddlTqQB4IzRzqllyKs876vsAOvyWmBqw72T5zp6zf0EwCCPvYv~fu7qrs1Avqp5WhhEjlG06SGRpiie2Wg__"
        }}
        style={styles.image}
      />

      {/* Input nhập số điện thoại - Focus vào sẽ tự động chuyển trang */}
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        onFocus={() => navigation.navigate("PhoneNumber")}
      />

      {/* Nút đăng nhập Google */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PhoneNumber")}>
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Nút đăng nhập Facebook */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "70%",
    position: "absolute",
    transform: [{ rotate: "-150deg" }],
    top: -200,
    right: -20,
    zIndex: -10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    width: "65%",
    position: "relative",
    left: "-15%",
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1877F2",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SignInScreen;
