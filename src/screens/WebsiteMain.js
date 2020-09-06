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
import NetInfo from "@react-native-community/netinfo";
import PushNotification from "react-native-push-notification";

export default class WebsiteMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      menu: false,
      connection: false,
    };
  }
  componentDidMount() {
    NetInfo.fetch().then((state) => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      this.setState({ connection: state.isConnected });
    });
  }
  hideSpinner = () => {
    this.setState({ isLoading: false });
  };

  onPress1 = () => {
    this.props.navigation.navigate("WebsiteMain");
  };

  onPress2 = () => {
    this.props.navigation.navigate("Programms");
  };

  onPress3 = () => {
    this.props.navigation.navigate("Darmakan");
  };

  onPress4 = () => {
    this.props.navigation.navigate("AppLatest");
  };

  onPress5 = () => {
    this.props.navigation.navigate("CategoriesLatest");
  };

  onPress6 = () => {
    this.props.navigation.navigate("LiveRadioPage");
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
              showBackArrow={false}
              showDrawer={true}
              onPressShowBackArrow={() => this.props.navigation.pop()}
              onPressMenuButton={() => this.props.navigation.openDrawer()}
            />
          </View>

          <View style={{ flex: 1 }}>
            {this.state.connection ? (
              <LatestWebView
                uri={"https://nrttv.com/nrt2/default.aspx"}
                hideSpinner={this.hideSpinner}
                isLoading={this.state.isLoading}
              />
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>ئینتەرنێت بەردەست نیە</Text>
              </View>
            )}
          </View>
          <View style={{}}>
            <LatestBottom
              onPress1={this.onPress1}
              onPress2={this.onPress2}
              onPress3={this.onPress3}
              onPress4={this.onPress4}
              onPress5={this.onPress5}
              onPress6={this.onPress6}
              onPress7={this.onPress7}
            />
          </View>
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
