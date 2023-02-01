import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: "row",
        width: "80%",
        height: 300,
        justifyContent: "space-between",
        alignItems: "stretch", //stretches on the secondary axis
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          flex: 1, //takes all the available width with width of 1
          justifyContent: "center",
          alignItems: "center", //aligns items on the cross axis
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          flex: 2, //takes twice as much space as a box with 1
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
