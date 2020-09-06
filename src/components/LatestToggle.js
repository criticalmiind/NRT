import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const LatestToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={{ flex: 1, flexDirection: "row", margin: hp("3%") }}>
      <View style={{ flex: 0.8 }}>
        <Text
          style={{
            color: "white",
            marginRight: wp("5%"),
            fontWeight: "bold",
            fontSize: hp("2.5%"),
            alignSelf: "flex-start",
          }}
        >
          پەیامی ئاگادارکردنەوە
        </Text>
      </View>
      <View style={styles.container}>
        <Switch
          trackColor={{ false: "red", true: "green" }}
          thumbColor={isEnabled ? "white" : "white"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: "center",
  },
});

export default LatestToggle;
