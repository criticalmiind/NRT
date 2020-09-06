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

import CallIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Entypo";
import MobbileIcon from "react-native-vector-icons/AntDesign";
import ViberIcon from "react-native-vector-icons/Fontisto";

export default class ContactUsPage extends Component {
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
                backgroundColor: "",
              }}
            >
              <Text
                style={{
                  fontSize: verticalScale(20),
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                پەیوەندی
              </Text>
              <Text
                style={{
                  fontWeight: "normal",
                  color: "white",
                  textAlign: "justify",
                  margin: moderateScale(15),
                  alignSelf: "stretch",
                }}
              >
                دیجیتاڵ میدیای ئێن ئاڕ تی دەتوانن ئەم ژمارە مۆبایلانەی خوارەوە
                بەکاربھێنن بۆ پەیوەندیکردنی راستەوخۆ بەھەر پێنج نوسینگەکانی
                دامەزراوەی میدیایی نالیا یاخود لە رێی پرکردنەوەی فۆڕمی
                ئەلکترۆنییەوە زانیاریی و داخوازیی و پێشنیازەکانت بنێریت
              </Text>
            </View>
            <View
              style={{ flex: 1, backgroundColor: "", justifyContent: "center" }}
            >
              <View
                style={{
                  backgroundColor: "",
                  flexDirection: "row",
                  marginVertical: moderateScale(10),
                }}
              >
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: "",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flex: 0.3, alignItems: "center" }}>
                    <Icon name="facebook-with-circle" style={styles.icon} />
                  </View>
                  <View style={{ flex: 0.7 }}>
                    <Text
                      style={{ color: "white", fontSize: verticalScale(12) }}
                    >
                      NRT
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: "",
                    alignItems: "flex-end",
                    marginRight: moderateScale(10),
                  }}
                >
                  <Text style={{ color: "white", fontSize: verticalScale(12) }}>
                    ٠٧٥٠٨١٥١٠٠٠
                  </Text>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "",
                  flexDirection: "row",
                  marginVertical: moderateScale(5),
                }}
              >
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: "",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flex: 0.3, alignItems: "center" }}>
                    <Icon name="mail-with-circle" style={styles.icon} />
                  </View>
                  <View style={{ flex: 0.7 }}>
                    <Text
                      style={{ color: "white", fontSize: verticalScale(12) }}
                    >
                      info@nrttv.com
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    flexDirection: "row",
                    backgroundColor: "",
                  }}
                >
                  <View
                    style={{
                      flex: 0.4,
                      alignItems: "flex-end",
                      backgroundColor: "",
                    }}
                  >
                    <MobbileIcon name="mobile1" style={styles.icon} />
                  </View>
                  <View style={{ flex: 0.6, alignItems: "flex-end" }}>
                    <Text
                      style={{
                        color: "white",
                        fontSize: verticalScale(12),
                        marginRight: moderateScale(10),
                      }}
                    >
                      ٠٧٥٠٨١٥٢٠٠٠
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: "",
                  flexDirection: "row",
                  marginVertical: moderateScale(10),
                }}
              >
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: "",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flex: 0.3, alignItems: "center" }}>
                    <CallIcon name="phone-square" style={styles.icon} />
                  </View>
                  <View style={{ flex: 0.7 }}>
                    <Text
                      style={{ color: "white", fontSize: verticalScale(12) }}
                    >
                      ٠٧٧٠١٥١٢٨٥١
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: "",
                    alignItems: "flex-end",
                    marginRight: moderateScale(10),
                  }}
                >
                  <Text style={{ color: "white", fontSize: verticalScale(12) }}>
                    ٠٧٥٠٨١٥٣٠٠٠
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: moderateScale(15),
              }}
            >
              <ViberIcon name="viber" style={styles.icon} />
              <CallIcon name="whatsapp" style={styles.icon} />
              <CallIcon name="paper-plane" style={styles.icon} />
              <Text style={{ color: "white", fontSize: verticalScale(12) }}>
                ٠٧٥٠٨١٥٤٠٠٠
              </Text>
            </View>

            {/* <View style={{ flexDirection: "row", marginHorizontal: moderateScale(45), marginVertical: moderateScale(10) }}>
                                <View style={{ flex: 0.2, backgroundColor: "white", height: 40, width: 100, alignItems: "center", justifyContent: "center" }}>
                                    <Image source={require("../resources/images/phone.png")} resizeMode="cover" />
                                </View>
                                <View style={{ flex: 0.8, paddingHorizontal: moderateScale(15) }}>
                                    <Text style={{ color: "white" }}>Call us</Text>
                                    <Text style={{ color: "white" }}>+92 300 2323245</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", marginHorizontal: moderateScale(45), marginVertical: moderateScale(10) }}>
                                <View style={{ flex: 0.2, backgroundColor: "white", height: 40, width: 100, alignItems: "center", justifyContent: "center" }}>
                                    <Image source={require("../resources/images/mail.png")} resizeMode="cover" />
                                </View>
                                <View style={{ flex: 0.8, paddingHorizontal: moderateScale(15) }}>
                                    <Text style={{ color: "white" }}>Mail us</Text>
                                    <Text style={{ color: "white" }}>nrtnews@gmail.com</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", marginHorizontal: moderateScale(45), marginVertical: moderateScale(10) }}>
                                <View style={{ flex: 0.2, backgroundColor: "white", height: 40, width: 100, alignItems: "center", justifyContent: "center" }}>
                                    <Image source={require("../resources/images/mail.png")} resizeMode="cover" />
                                </View>
                                <View style={{ flex: 0.8, paddingHorizontal: moderateScale(15) }}>
                                    <Text style={{ color: "white" }}>Address</Text>
                                    <Text style={{ color: "white" }}>Off 23 Main road Lahore</Text>
                                </View>
                            </View> */}
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
  icon: {
    marginHorizontal: metrics.tinyMargin,
    color: "white",
    fontSize: verticalScale(25),
  },
});
