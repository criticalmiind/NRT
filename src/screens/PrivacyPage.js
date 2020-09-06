import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component } from "react";
import { fonts, metrics } from "../themes";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

export default class PrivacyPage extends Component {
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
                  fontSize: verticalScale(30),
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                پاراستن
              </Text>
              <Text
                style={{
                  fontWeight: "normal",
                  color: "white",
                  textAlign: "justify",
                  margin: moderateScale(15),
                }}
              >
                {/* مەرج و ڕێساکانی بەکارهێنان لێرە دەتوانیت نوێترین هەواڵەکانی ژیان
                و تەندروستی و کۆمەڵگا بخوێنیتەوە، هەزاران کلیپ و ڤیدیۆ گوێ لێ
                بگریت و هەندێکیشیان دابگریت. بۆ ئەو مەبەستەش پێویستە کە شێوازی
                بەکارهێنان و خاڵەکانی ماف پاراستن ڕەچاو بکەیت. لە وێبگە و
                ئەپەکانی NRT2 داهیچ بابەت و بڵاوکراوەیەک بۆ لێدانی کەسایەتی و
                ئازاردانی خەڵکی بەکار نایەت، مەبەست لە بوونی ئەپلیکەیشنی NRT2
                گەیاندنی خێرای هەواڵ و زانیارییە جۆراوجۆرەکانە بە سەردانکەران و
                هەوادارانی کەناڵەکە بە زمانی کوردی. مەرج و ڕێساکان بە گوێرەی کات
                و پێویستی نوێ دەکرێتەوە. */}
                Telerik Solution built the NRT TV app as a Free app. This
                SERVICE is provided by Telerik Solution at no cost and is
                intended for use as is. This page is used to inform visitors
                regarding my policies with the collection, use, and disclosure
                of Personal Information if anyone decided to use my Service. If
                you choose to use my Service, then you agree to the collection
                and use of information in relation to this policy. The Personal
                Information that I collect is used for providing and improving
                the Service. I will not use or share your information with
                anyone except as described in this Privacy Policy. The terms
                used in this Privacy Policy have the same meanings as in our
                Terms and Conditions, which is accessible at NRT TV unless
                otherwise defined in this Privacy Policy.
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../resources/images/cloud.png")}
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
});
