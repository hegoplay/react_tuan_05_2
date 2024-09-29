import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../constant/Color";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";
const Screen_01 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 20 }}>
        <Image source={require("../assets/images/Container 17.png")} />
      </View>
      <Text style={styles.title}>Boost Productivity</Text>
      <Text style={styles.text}>Simplify tasks, boost Productivity</Text>
      <PrimaryButton onPress={() => navigation.navigate("Screen_02")}>Sign Up</PrimaryButton>
      <SecondaryButton onPress={() => navigation.navigate("Screen_03")}>Login</SecondaryButton>
    </View>
  );
};

export default Screen_01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#777",
  },
  
});
