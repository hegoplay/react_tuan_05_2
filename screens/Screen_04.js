import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constant/Color";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";

const sizeList = ["XS", "S", "M", "L", "XL"];

const Screen_04 = ({ navigation }) => {
  const [size, setSize] = useState("M");
  return (
    <View style={styles.main}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate("Screen_03")}>
          <Text style={styles.label}>
            <Ionicons name="chevron-back-outline" size={16} /> Product name
          </Text>
        </TouchableOpacity>
        <Image source={require("../assets/images/Container 7 (3).png")}></Image>
        <View style={styles.smallImagesContainer}>
          <Image
            source={require("../assets/images/Container 7 (1).png")}
          ></Image>
          <Image
            source={require("../assets/images/Container 7 (2).png")}
          ></Image>
          <Image
            source={require("../assets/images/Container 7 (4).png")}
          ></Image>
          <Image source={require("../assets/images/Container 7.png")}></Image>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center"}}>
          <Text
            style={{
              color: Colors.primaryColor,
              fontWeight: "bold",
              fontSize: 32,
              paddingTop: 10,
            }}
          >
            $2,99
          </Text>
          <Text style={styles.redLabel}>Buy 1 get 1</Text>
        </View>

        <View style={styles.itemInfoContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Product name</Text>
            <Text>Occaecat est deserunt tempor offci</Text>
          </View>
          <View style={styles.starInfo}>
            <Image source={require("../assets/images/Rating 3.png")} />
            <Text>4.5</Text>
          </View>
        </View>
        <Text>Size</Text>
        <View style={styles.sizeListContainer}>
          {sizeList.map((val, idx) => {
            return (
              <TouchableOpacity
                onPress={() => setSize(val)}
                
              >
                <Text style={[
                  styles.itemStyle,
                  val == size && styles.itemOnClickStyle,
                ]}> {val}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text>Quantity</Text>
        <View></View>
        <View style={styles.viewStyleForLine}></View>
        <Text>Size guide</Text>
        <View style={styles.viewStyleForLine}></View>
        <Text>Reviews (99) </Text>
        <View style={styles.viewStyleForLine}></View>
        <PrimaryButton onPress={ () => navigation.navigate("Screen_01")}>Add to Cart</PrimaryButton>
      </View>
    </View>
  );
};

export default Screen_04;

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
  label: {
    fontWeight: "bold",
  },
  smallImagesContainer: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    width: "100%",
  },
  redLabel: {
    color: "red",
    fontSize: 10,
    backgroundColor: "#FEE9EB",
    padding: 5,
    borderRadius: 10,
  },
  viewStyleForLine: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: "stretch",
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  itemInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  starInfo: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  sizeListContainer: {
    borderRadius: 8,
    flexDirection: "row",
  },
  itemStyle: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    color: "#333",
  },
  itemOnClickStyle: {
    backgroundColor: Colors.primaryColor,
    color: "#fff",
  },
});
