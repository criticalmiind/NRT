import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { Component } from "react";

import { CommonActions } from "@react-navigation/native";

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: "MyStack" }],
        })
      );
    }, 3000);
  }

  render() {
    return (
      <ImageBackground
        source={require("../resources/images/bg1.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          tintColor: "red",
        }}
        resizeMode="cover"
      >
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="transparent" translucent />
          <View style={styles.mainView}>
            <Image source={require("../resources/images/nrtLogo.png")} />
          </View>
        </View>
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
