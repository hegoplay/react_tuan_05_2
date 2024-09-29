import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomValidInput from "../components/ui/CustomValidInput";
import CustomPasswordInput from "../components/ui/CustomPasswordInput";
import PrimaryButton from "../components/ui/PrimaryButton";
const Screen_02 = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate("Screen_01")}>
          <Ionicons name="arrow-back" size={16} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={require("../assets/images/Image 19.png")}></Image>
        </View>
        <Text style={styles.title}>Nice to see you</Text>
        <Text style={styles.text}>Create your account</Text>
        <CustomValidInput
          iconName="person-outline"
          placeholder="Enter your name"
        ></CustomValidInput>
        <CustomValidInput
          iconName="mail-outline"
          placeholder="Enter your email address"
        ></CustomValidInput>
        <CustomPasswordInput
          iconName="lock-closed-outline"
          placeholder="Enter your password"
        ></CustomPasswordInput>
        <Text style={styles.termCodition}>
          I agree with{" "}
          <Text
            onPress={() => Linking.openURL("http://google.com")}
            style={{ color: "cyan" }}
          >
            Terms & Conditions
          </Text>
        </Text>
        <PrimaryButton onPress={() => navigation.navigate("Screen_03")}>
          Continue
        </PrimaryButton>
      </View>
    </View>
  );
};

export default Screen_02;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    padding: 20,
  },
  nav: {
    width: "100%",
    padding: 20,
    alignItems: "flex-start",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  image: {
    // alignContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    width: "100%",
  },
  text: {
    fontSize: 12,
    color: "#777",
    width: "100%",
    textAlign: "center",
    marginBottom: 40,
  },
  termCodition: {
    width: "100%",
    textAlign: "left",
    paddingVertical: 20,
  },
});
