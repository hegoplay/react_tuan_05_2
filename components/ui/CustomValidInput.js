import { View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomValidInput = ({ iconName = "", placeholder = "" }) => {
  return (
    <View style={styles.section}>
      <View style = {{paddingHorizontal: 10}}>
        <Ionicons size={16} name={iconName} color="black" />
      </View>
      <TextInput placeholder={placeholder} style={styles.input}></TextInput>
    </View>
  );
};

export default CustomValidInput;

const styles = StyleSheet.create({
  section: {
    width: "100%",
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    color: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"
  },
  input:{
    flex: 1,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  }
});
