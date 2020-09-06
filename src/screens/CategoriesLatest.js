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

import AudioComponent from "../components/Vedio";
import HeaderPage from "../components/Header";
import LatestBottom from "../components/LatestBottom";
import LatestHeaderComponent from "../components/LatestHeader";
import PushNotification from "react-native-push-notification";

export default class CategoriesLatest extends Component {
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
              showDrawer={false}
              showDrawer
              showLogo
              onPressMenuButton={() => this.props.navigation.openDrawer()}
              onPressShowBackArrow={() => this.props.navigation.goBack()}
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
              onPress={() => this.props.navigation.navigate("CategoryBtn1")}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#2c4b7a",
                  fontSize: hp("2.5%"),
                  fontWeight: "bold",
                }}
              >
                تەندروستیی
              </Text>
            </TouchableOpacity>
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
              onPress={() => this.props.navigation.navigate("CategoryBtn2")}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#2c4b7a",
                  fontSize: hp("2.5%"),
                  fontWeight: "bold",
                }}
              >
                هەمەڕەنگ
              </Text>
            </TouchableOpacity>
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
              onPress={() => this.props.navigation.navigate("CategoryBtn3")}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#2c4b7a",
                  fontSize: hp("2.5%"),
                  fontWeight: "bold",
                }}
              >
                ستایڵ
              </Text>
            </TouchableOpacity>
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
              onPress={() => this.props.navigation.navigate("CategoryBtn4")}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#2c4b7a",
                  fontSize: hp("2.5%"),
                  fontWeight: "bold",
                }}
              >
                هونەری
              </Text>
            </TouchableOpacity>
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
              onPress={() => this.props.navigation.navigate("CategoryBtn5")}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#2c4b7a",
                  fontSize: hp("2.5%"),
                  fontWeight: "bold",
                }}
              >
                کەلتور
              </Text>
            </TouchableOpacity>
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
              onPress={() => this.props.navigation.navigate("CategoryBtn6")}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#2c4b7a",
                  fontSize: hp("2.5%"),
                  fontWeight: "bold",
                }}
              >
                منداڵ
              </Text>
            </TouchableOpacity>
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
              onPress={() => this.props.navigation.navigate("CategoryBtn7")}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#2c4b7a",
                  fontSize: hp("2.5%"),
                  fontWeight: "bold",
                }}
              >
                ئینفۆگرافیک
              </Text>
            </TouchableOpacity>
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
