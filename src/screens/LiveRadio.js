import {
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import React, { Component } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

import AudioComponent from "../components/Vedio";
import HeaderPage from "../components/Header";
import { heightPercentageToDP } from "react-native-responsive-screen";

export default class LiveRadioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      isLoading: false,
      stramUri: "",
      PlayOne: true,
      timmerOne: 0,
      PlayTwo: true,
      radioButton: true,
    };
  }
  updateRadioButton = () => {
    this.setState({ radioButton: true });
  };
  updateRadioButtonTwo = () => {
    this.setState({ radioButton: false });
  };
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
      <ImageBackground
        source={require("../resources/images/bg1.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <StatusBar backgroundColor="transparent" translucent />

          <View style={{ flex: 1 }}>
            <View style={{ marginTop: heightPercentageToDP(5) }}>
              <LatestHeaderComponent
                showLogo={true}
                showBackArrow={true}
                showDrawer={true}
                onPressMenuButton={() => this.props.navigation.openDrawer()}
              />
            </View>
            {/* <HeaderPage switchValue={this.state.switchValue} onSwitch={this.onToggele} headerTitle="" /> */}
            <View style={styles.mainView}>
              {this.state.switchValue ? (
                <WebViewPage
                  hideSpinner={this.hideSpinner}
                  isLoading={this.state.isLoading}
                />
              ) : (
                <AudioComponent
                  btnTwo={this.btnTwo}
                  PlayTwo={this.state.PlayTwo}
                  PlayOne={this.state.PlayOne}
                  btnOne={this.btnOne}
                  audioStreamuri={this.state.stramUri}
                  updateRadioButton={this.updateRadioButton}
                  updateRadioButtonTwo={this.updateRadioButtonTwo}
                  radioButton={this.state.radioButton}
                />
              )}
              {/* <Image source={require("../resources/images/nrtLogo.png")} /> */}
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
    marginTop: moderateScale(30),
    // justifyContent: "center",
    // alignItems: "center",
  },
});
