import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import { FlatList } from "react-native-gesture-handler";
import React from "react";
import styles from "./styles";

import { Linking} from 'react-native'

let screens = [
  {
    id: 1,
    name: "Live",
    screen: "LiveRadioPage",
    icon: require("../resources/images/video.png"),
  },

  {
    id: 2,
    name: "بەشەکان",
    screen: "CategoriesLatest",

    icon: require("../resources/images/video.png"),
  },
 

  {
    id: 6,
    name: "ڕێکخستن",
    screen: "LatestSettings",
    icon: require("../resources/images/reqshan.png"),
  },
  {
    id: 7,
    name: "پەیوەندی",
    screen: "ContactUsPage",
    icon: require("../resources/images/contactIcon.png"),
  },
  {
    id: 8,
    name: "پاراستن",
    screen: "PrivacyPage",
    icon: require("../resources/images/privacy.png"),
  },
  {
    id: 9,
    name: " بەکارهێنان",
    screen: "TermsPage",
    icon: require("../resources/images///accept.png"),
  },
  {
    id: 10,
    name: "دەربارە",
    screen: "AboutUsPage",
    icon: require("../resources/images///about.png"),
  },
];

export default function SideMenu(props) {
  const { navigate, closeDrawer } = props.navigation;
  const navigateToScreen = (screen) => {
    props.state.routes.map((i) => {
      if (i.name === screen) {
        navigate(i.name);
      } else {
        closeDrawer();
      }
    });
  };
  renderButton = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          {
            borderTopWidth: 0,
            borderBottomWidth: 0.2,
            borderColor: "#f3f3f3",
            marginTop: widthPercentageToDP(2),
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: widthPercentageToDP(15),
            height: heightPercentageToDP(5),
            width: widthPercentageToDP(65),
            alignSelf: "center",
          },
        ]}
        onPress={() => navigateToScreen(item.screen)}
      >
        <View
          style={{ width: widthPercentageToDP(30), alignItems: "flex-start" }}
        >
          <Text style={styles.drawerMenuNameStyle}>{item.name}</Text>
        </View>
        <Image source={item.icon} style={styles.drawerMenuStyle} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.drawerContainerStyle}>
      <TouchableOpacity
        style={styles.drawerMenuCloseStyle}
        onPress={() => closeDrawer()}
      >
        <Image
          // source={avatar.cross}
          style={[
            styles.drawerMenuStyle,
            { height: heightPercentageToDP(4), width: widthPercentageToDP(4) },
          ]}
        />
      </TouchableOpacity>
      <View>
        <View style={styles.editTextContainerStyle}>
          <Image
            source={require("../resources/images/nrtLogo2.png")}
            style={{
              height: heightPercentageToDP("9%"),
              width: widthPercentageToDP("15%"),
              alignSelf: "center",
            }}
          />
        </View>
      </View>
      <FlatList data={screens} keyExtractor = { (item, index) => index.toString() } renderItem={renderButton} />
      <View style={styles.socialButtonStyle}>
        <TouchableOpacity  onPress={() => {
              //on clicking we are going to open the URL using Linking
              Linking.openURL('https://web.facebook.com/nrttwo/?_rdc=1&_rdr');
            }}>
          <Image
            source={require("../resources/images/facebook.png")}
            style={styles.socialBtnStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
              //on clicking we are going to open the URL using Linking
              Linking.openURL('https://www.youtube.com/channel/UC7JjQyZT6nBv-FO4ZHracPA');
            }}>
          <Image
            source={require("../resources/images/youtube.png")}
            style={styles.socialBtnStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
              //on clicking we are going to open the URL using Linking
              Linking.openURL('https://twitter.com/nrtkurdish?lang=en');
            }}>
          <Image
            source={require("../resources/images/twitterss.png")}
            
            style={styles.socialBtnStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
