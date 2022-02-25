import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Clipboard,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Toast from "react-native-simple-toast";

export default function App() {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);

  //Only handle switch toggle on-off
  // const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  // const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  // const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);

  //To handle switch toggle and state changes according to switch
  const toggleSwitch1 = (previousState) => {
    setIsEnabled1(previousState);
    previousState ? alert(previousState) : alert(previousState);
  };

  const toggleSwitch2 = (previousState) => {
    setIsEnabled2(previousState);
    previousState ? alert(previousState, "2") : alert(previousState, "2");
  };

  const toggleSwitch3 = (previousState) => {
    setIsEnabled3(previousState);
    previousState ? alert(previousState, "2") : alert(previousState, "2");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Flex Textbox Password */}
      <View>
        <Text style={styles.textTitle}>PASSWORD</Text>
        <TouchableOpacity
          onPress={() => {
            Clipboard.setString("wkwkwkk");
            Toast.show("Copied!", Toast.SHORT);
          }}
        >
          <View style={styles.textboxPassword}>
            {Platform.OS === "android" ? (
              <Text style={styles.passwordText}>c2Mk9qlo</Text>
            ) : (
              <Text style={styles.passwordText}>k!wf$r+s</Text>
            )}
            {/* <Text style={styles.passwordText}></Text> */}
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 11,
            fontStyle: "italic",
            color: "#3a4365",
            textAlign: "center",
          }}
        >
          Tap to copy password
        </Text>
      </View>

      {/* Flex Button Switch */}
      <View style={styles.flxSettings}>
        <Text style={styles.textTitle}>SETTINGS</Text>
        <View style={styles.flxSetNumber}>
          <View>
            <Text style={styles.txtTitleSettings}>Include numbers</Text>
            <Switch
              style={styles.switchBtn}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled1 ? "#1560f2" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#0a1032",
            paddingVertical: 15,
            paddingRight: 10,
            marginTop: 10,
          }}
        >
          <View>
            <Text style={styles.txtTitleSettings}>Include uppercase</Text>
            <Switch
              style={styles.switchBtn}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled2 ? "#1560f2" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#0a1032",
            paddingVertical: 15,
            paddingRight: 10,
            marginTop: 10,
            marginBottom: 5,
          }}
        >
          <View>
            <Text style={styles.txtTitleSettings}>Include symbols</Text>
            <Switch
              style={styles.switchBtn}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled3 ? "#1560f2" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch3}
              value={isEnabled3}
            />
          </View>
        </View>
      </View>

      {/* Button Generate */}
      <TouchableOpacity>
        <LinearGradient
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          colors={["#1d4ff0", "#3a28e7"]}
          style={{
            paddingVertical: 20,
            borderRadius: 25,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
              color: "white",
              textAlign: "center",
            }}
          >
            GENERATE PASSWORD
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050c22",
    justifyContent: "center",
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textTitle: {
    fontSize: 12,
    textAlign: "auto",
    color: "#3a4365",
  },
  passwordText: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
  },
  textboxPassword: {
    backgroundColor: "#0a1032",
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 15,
    paddingVertical: 20,
    marginTop: 10,
    marginBottom: 5,
  },
  flxSetNumber: {
    backgroundColor: "#0a1032",
    paddingVertical: 15,
    marginTop: 10,
    paddingRight: 10,
  },
  txtTitleSettings: { color: "white", fontSize: 15, paddingLeft: 15 },
  switchBtn: {
    padding: 5,
    position: "absolute",
    marginTop: -6,
    right: 0,
  },
  flxSettings: {
    paddingVertical: 10,
    borderWidth: 0,
    marginTop: 10,
  },
});
