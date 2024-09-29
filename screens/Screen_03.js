import { View, Text, ImageBackground, StyleSheet } from "react-native";
import CustomValidInput from "../components/ui/CustomValidInput";
import CustomPasswordInput from "../components/ui/CustomPasswordInput";
import PrimaryButton from "../components/ui/PrimaryButton";


const Screen_03 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Image 20.png")}
        style={[{ width: "100%" }, styles.container]}
      >
        <View style={styles.tab}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.label}>Email</Text>
          <CustomValidInput
            iconName="mail-outline"
            placeholder="Enter email"
          ></CustomValidInput>
          <Text style={styles.label}>Password</Text>
          <CustomPasswordInput
          iconName="lock-closed-outline"
          placeholder="Enter your password"
        ></CustomPasswordInput>
        <View style = {styles.area}>
          <PrimaryButton onPress={() => navigation.navigate("Screen_04")}>Login</PrimaryButton>
        </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Screen_03;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  tab: {
    width: "100%",
    flex: 1,
    marginTop: 170,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 60,
  },
  label: {
    fontSize: 16,
    color: "#777",
    marginBottom: 10,
    fontWeight: "bold",
    marginTop: 20,
  },
  area:{
    flex:1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
});
