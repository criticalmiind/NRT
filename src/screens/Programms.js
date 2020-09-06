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

export default class Programms extends Component {
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
              showDrawer
              onPressMenuButton={() => this.props.navigation.openDrawer()}
            />
          </View>

          <View style={{ flex: 1 }}>
            <LatestWebView
              uri={"https://nrttv.com/nrt2/media-show.aspx"}
              hideSpinner={this.hideSpinner}
              isLoading={this.state.isLoading}
            />
          </View>
          {/* <View style={{ }}>
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
