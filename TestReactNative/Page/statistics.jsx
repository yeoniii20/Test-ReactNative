import React from "react";
import { View, Text } from "react-native";
import Top from "../components/Top";
import Bottom from "../components/Bottom";
import Bar from "../components/Bar";

const Statistics = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFBF6" }}>
      <Top />
      {/* 중간 콘텐츠 */}
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 25,
            marginHorizontal: 116,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1F1F1F" }}>
            지출 통계
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#5C5C5C" }}>
            지출 내역
          </Text>
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={{ flex: 1, height: 1.5, backgroundColor: "#1F1F1F" }} />
          <View style={{ flex: 1, height: 1.5, backgroundColor: "#5C5C5C" }} />
        </View>
        <Bar text={"의류"} path={require("../assets/shirt.svg")} />
        <View style={{ flex: 1, height: 1.5, backgroundColor: "#1F1F1F" }} />
        <Bar text={"식생활"} path={require("../assets/food.svg")} />
        <View style={{ flex: 1, height: 1.5, backgroundColor: "#1F1F1F" }} />
        <Bar text={"주거"} path={require("../assets/home.svg")} />
        <View style={{ flex: 1, height: 1.5, backgroundColor: "#1F1F1F" }} />
        <Bar text={"기타"} path={require("../assets/etc.svg")} />
      </View>
      <Bottom />
    </View>
  );
};

export default Statistics;
