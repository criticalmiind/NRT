import {
  ActivityIndicator,
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
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import AudioComponent from "../components/Vedio";
import HeaderPage from "../components/Header";
import VedioStream from "../components/StramingVedio";

export default class LiveVideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: true,
      isLoading: false,
      stramUri: "",
      PlayOne: true,
      timmerOne: 0,
      PlayTwo: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
  }
  hideSpinner = () => {
    this.setState({ isLoading: false });
  };

  onToggele = (value) => {
    this.setState(
      {
        switchValue: value,
      },
      () => {
        if (this.state.switchValue) {
          this.setState({
            isLoading: true,
          });
        }
      }
    );
  };
  btnOne = () => {
    this.setState({
      stramUri: true,
      PlayOne: !this.state.PlayOne,
    });
    if (!this.state.PlayTwo) {
      this.setState({
        PlayTwo: true,
      });
    }
  };
  btnTwo = () => {
    this.setState({
      stramUri: false,
      PlayTwo: !this.state.PlayTwo,
    });
    if (!this.state.PlayOne) {
      this.setState({
        PlayOne: true,
      });
    }
  };

  render() {
    return (
      // <ImageBackground source={require("../resources/images/bg1.png")} resizeMode="cover" style={{ flex: 1 }}>
      //     <StatusBar backgroundColor="transparent" translucent />

      //     <View style={styles.mainView}>
      //         <Video resizeMode="cover" source={{ uri: "https://www.radiantmediaplayer.com/media/bbb-360p.mp4" }}
      //             ref={(ref) => {
      //                 this.player = ref
      //             }}
      //             onBuffer={this.onBuffer}
      //             onError={this.videoError}
      //             style={styles.backgroundVideo}
      //             fullscreen={true}
      //             controls={true}

      //         />
      //     </View>
      // </ImageBackground>

      <ImageBackground
        source={require("../resources/images/bg1.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <TouchableOpacity
          style={{ marginTop: hp(4) }}
          onPress={() => this.props.navigation.openDrawer()}
        >
          <Image
            resizeMode="contain"
            source={require("..//resources//images/bg2.png")}
            style={{
              width: hp(4),
              height: hp(4),
              marginTop: hp(2),
              marginRight: wp(3),
              alignSelf: "flex-end",

              tintColor: "white",
            }}
          />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <StatusBar backgroundColor="transparent" />

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: moderateScale(25),
            }}
          >
            <View style={styles.mainView}>
              <VedioStream />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: 500,
    transform: [{ rotate: "90 deg" }],
    justifyContent: "center",
  },
  backgroundVideo: {
    flex: 1,
    marginTop: moderateScale(28),
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
