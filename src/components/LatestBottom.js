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

import Icon from "react-native-vector-icons/Entypo";
import WebViewPage from "../components/WebViewPage";

// import { Icon } from "native-base";

export default (LatestBottom = (props) => {
  return (
    <View style={{ flex: 1, position: "absolute", bottom: 0, width: wp(100) }}>
      {/* <View
        style={{ flex: 1, flexDirection: "row", backgroundColor: "#012754" }}
      >
        <TouchableOpacity style={styles.bottomBtns} onPress={props.onPress3}>
          <Image
            source={require("../resources/images/theater.png")}
            style={{ marginTop: hp("0.5%") }}
          />
          <Text>دراماکان</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBtns} onPress={props.onPress2}>
          <Image
            source={require("../resources/images/Layer14.png")}
            style={{ marginTop: hp("0.5%") }}
          />
          <Text>بەرنامەکان</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBtns} onPress={props.onPress1}>
          <Image
            source={require("../resources/images/www.png")}
            style={{ marginTop: hp("0.5%") }}
          />
          <Text>سەرەکی</Text>
        </TouchableOpacity>
      </View> */}

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#ae27a7",
          justifyContent: "center",
          alignItems: "center",
          // marginTop: hp("-1.5%"),
        }}
      >
        <View
          style={{
            width: wp(80),
            alignSelf: "center",
            flexDirection: "row",
            marginLeft: 0.2,
            marginRight: 0.2,
          }}
        >
          <TouchableOpacity style={styles.bottomBtns} onPress={props.onPress3}>
            <Image
              source={require("../resources/images/theater.png")}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>دراماکان</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBtns} onPress={props.onPress2}>
            <Image
              source={require("../resources/images/Layer14.png")}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>بەرنامەکان</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBtns} onPress={props.onPress1}>
            <Image
              source={require("../resources/images/www.png")}
              style={styles.imageStyle}
            />
            <Text style={styles.textStyle}>سەرەکی</Text>
          </TouchableOpacity>
          {/*<TouchableOpacity style={styles.bottomBtns} onPress={props.onPress6}>*/}
          {/*  <Image*/}
          {/*    source={require("../resources/images/video.png")}*/}
          {/*    style={styles.imageStyle}*/}
          {/*  />*/}
          {/*  <Text style={styles.textStyle}>Live</Text>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity style={styles.bottomBtns} onPress={props.onPress5}>*/}
          {/*  <Image*/}
          {/*    source={require("../resources/images/grid.png")}*/}
          {/*    style={styles.imageStyle}*/}
          {/*  />*/}
          {/*  <Text style={styles.textStyle}>بەشەکان</Text>*/}
          {/*</TouchableOpacity>*/}
        </View>

        {/*<TouchableOpacity style={styles.bottomBtns} onPress={props.onPress4}>*/}
        {/*  <Image*/}
        {/*    source={require("../resources/images/app2.png")}*/}
        {/*    style={styles.imageStyle}*/}
        {/*  />*/}
        {/*  <Text style={styles.textStyle}>App</Text>*/}
        {/*</TouchableOpacity>*/}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  bottomBtns: {
    flex: 1,
    marginVertical: hp("1.5%"),
    alignItems: "center",
  },
  imageStyle: {
    marginTop: hp("0.5%"),
    resizeMode: "center",
    backgroundColor: "white",
    height: hp(5),
    width: wp(26),
    borderRadius: wp(2),
    overflow: "hidden",
  },
  textStyle: {
    color: "white",
  },
});
