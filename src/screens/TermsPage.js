import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import { fonts } from "../themes";

export default class TermsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        source={require("../resources/images/bg1.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <View style={{ marginTop: heightPercentageToDP(4) }}>
          <LatestHeaderComponent
            showLogo={true}
            showDrawer={true}
            onPressMenuButton={() => this.props.navigation.openDrawer()}
          />
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="transparent" translucent />
            <View
              style={{
                flex: 1.5,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: verticalScale(20),
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "justify",
                }}
              >
                مەرج و ڕێساکانی بەکارهێنان
              </Text>
              <View style={{ width: widthPercentageToDP(90) }}>
                <Text
                  style={{
                    fontWeight: "normal",
                    color: "white",
                    textAlign: "justify",
                  }}
                >
                  مەرج و ڕێساکانی بەکارهێنان لێرە دەتوانیت نوێترین هەواڵەکانی
                  ژیان و تەندروستی و کۆمەڵگا بخوێنیتەوە، هەزاران کلیپ و ڤیدیۆ
                  گوێ لێ بگریت و هەندێکیشیان دابگریت. بۆ ئەو مەبەستەش پێویستە کە
                  شێوازی بەکارهێنان و خاڵەکانی ماف پاراستن ڕەچاو بکەیت. لە وێبگە
                  و ئەپەکانی NRT2 داهیچ بابەت و بڵاوکراوەیەک بۆ لێدانی کەسایەتی
                  و ئازاردانی خەڵکی بەکار نایەت، مەبەست لە بوونی ئەپلیکەیشنی
                  NRT2 گەیاندنی خێرای هەواڵ و زانیارییە جۆراوجۆرەکانە بە
                  سەردانکەران و هەوادارانی کەناڵەکە بە زمانی کوردی. مەرج و
                  ڕێساکان بە گوێرەی کات و پێویستی نوێ دەکرێتەوە.
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../resources/images/terms.png")}
                style={{ height: 160, width: 180 }}
                resizeMode="contain"
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputview: {
    // marginHorizontal: scale(20),
    marginVertical: verticalScale(5),
    borderColor: "#bfbfbf",
    borderWidth: 1,
    height: verticalScale(45),
    paddingStart: scale(10),
    fontSize: moderateScale(14),
    backgroundColor: "#3E3E3E",
    borderColor: "#3E3E3E",
    // borderRadius: moderateScale(5)
  },
});
