import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
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

import AudioComponent from "../components/Vedio";
import HeaderPage from "../components/Header";
import LatestBottom from "../components/LatestBottom";
import LatestHeaderComponent from "../components/LatestHeader";
import LatestWebView from "../components/LatestWebView";
import PushNotification from "react-native-push-notification";

export default class AppLatest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  hideSpinner = () => {
    this.setState({ isLoading: false });
  };

  render() {
    return (
      <ImageBackground
        source={require("../resources/images/bg1.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <StatusBar backgroundColor="transparent" translucent />

          <View style={{ marginTop: hp("4%") }}>
            <LatestHeaderComponent
              showLogo={true}
              showBackArrow={true}
              showDrawer={true}
              onPressMenuButton={() => this.props.navigation.openDrawer()}
            />
          </View>

          <View
            style={{
              height: hp("8%"),
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "white",
              marginTop: hp("4%"),
              marginHorizontal: wp("2%"),
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("LatestContact")}
              style={{
                flex: 0.85,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#2c4b7a" }}>پەیوەندی</Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 0.15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../resources/images/contact.png")} />
            </View>
          </View>
          <View
            style={{
              height: hp("8%"),
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "white",
              marginTop: hp("2%"),
              marginHorizontal: wp("2%"),
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("LatestAbout")}
              style={{
                flex: 0.85,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#2c4b7a" }}>دەربارە</Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 0.15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../resources/images/i.png")} />
            </View>
          </View>
          <View
            style={{
              height: hp("8%"),
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "white",
              marginTop: hp("2%"),
              marginHorizontal: wp("2%"),
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("LatestSettings")}
              style={{
                flex: 0.85,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#2c4b7a" }}>ڕێکخستن</Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 0.15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../resources/images/settingsIcon.png")} />
            </View>
          </View>

          {/* <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        <LatestBottom />
                    </View> */}
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bottomBtns: {
    flex: 0.33,
    backgroundColor: "white",
    marginVertical: hp("1.5%"),
    marginHorizontal: wp("1.5%"),
    justifyContent: "center",
    alignItems: "center",
  },
});
