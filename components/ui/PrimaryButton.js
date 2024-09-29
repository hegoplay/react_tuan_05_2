import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import Colors from "../../constant/Color";
const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.btnContainer}>
      <Pressable
        style={styles.btnSignUp}
        onPress={onPress}

      >
        <Text style={{ color: "white", fontWeight: "bold" }}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    btnContainer:{
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    
      },
      btnSignUp:{
        flex:1,
        backgroundColor: Colors.primaryColor,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        borderRadius: 8,
      }

})