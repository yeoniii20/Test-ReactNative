import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Login from "./constant/Login";
import SiginUp from "./constant/SiginUp";
import Statistics from "./Page/statistics";
import Note from "./Page/note";
import Bottom from "./components/Bottom";
import Top from "./components/Top";
import Bar from "./components/Bar";
import Message from "./components/Modal/message";
import FriendsList from "./Page/friendsList";
import TestPage from "./Page/testPage";

export default function App() {
  return (
    <View>
      {/* <Login /> */}
      {/* <SiginUp /> */}
      <Statistics />
      {/* <Note /> */}
      {/* <Bottom /> */}
      {/* <Top /> */}
      {/* <Bar /> */}
      {/* <Message /> */}
      {/* <FriendsList /> */}
    </View>
  );
}
