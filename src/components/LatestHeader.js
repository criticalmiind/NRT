import {
  ActivityIndicator,
  Image,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import Arrowleft from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Entypo";
import WebViewPage from "../components/WebViewPage";

// import { Icon } from "native-base";

export default (LatestHeaderComponent = (props) => {
  return (
    <View style={{ height: hp("10%") }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        {props.showLogo ? (
          <View
            style={{
              flex: 0.75,
              justifyContent: "center",
              alignItems: "flex-start",
              marginHorizontal: wp("5%"),
            }}
          >
            <Image
              source={require("../resources/images/nrtLogo.png")}
              style={{ height: hp("8.7%"), width: wp("15%") }}
            />
          </View>
        ) : (
          <TouchableOpacity
            onPress={props.onPressShowBackArrow}
            style={{
              flex: 0.75,
              justifyContent: "center",
              alignItems: "flex-start",
              marginHorizontal: wp("5%"),
            }}
          >
            {props.iconLeft && (
              <Arrowleft name="arrowleft" style={styles.icon} />
            )}
          </TouchableOpacity>
        )}

        {props.showDrawer ? (
          <TouchableOpacity
            style={{
              flex: 0.25,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={props.onPressMenuButton}
          >
            <Icon name="menu" style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <View
            style={{
              flex: 0.25,
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  icon: {
    color: "white",
    fontSize: hp("4%"),
  },
});
