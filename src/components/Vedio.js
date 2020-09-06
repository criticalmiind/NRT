import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import React, { Component } from "react";

import VedioCard from "./VedioCard";

export default (AudioComponent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <VedioCard
        paused={props.PlayOne}
        audioStramuri={"http://162.244.80.52:7010/stream"}
      />
      <View
        style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
      >
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{ flex: 0.2, justifyContent: "flex-start" }}
            onPress={props.updateRadioButton}
          >
            <RadioButtonInput
              isSelected={props.radioButton}
              onPress={() => {}}
              borderWidth={1}
              buttonInnerColor={"orange"}
              buttonOuterColor={"white"}
              buttonSize={12}
              buttonOuterSize={22}
              buttonStyle={{}}
              buttonWrapStyle={{ marginLeft: 20 }}
            />
          </TouchableOpacity>
          <View style={{ flex: 0.8 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "white",
                marginBottom: 10,
                alignSelf: "flex-start",
              }}
            >
              ڕادیۆی نالیا - بادینی
            </Text>
          </View>
        </View>
        <View
          style={{
            borderRadius: 20,
            height: 70,
            backgroundColor: "#E3D5E1",
            width: 300,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => props.btnOne(true)}
            style={{
              marginLeft: 10,
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            disabled={!props.radioButton}
          >
            <Image
              source={
                props.PlayOne
                  ? require("../resources/images/play.png")
                  : require("../resources/images/pause.png")
              }
              style={{ height: 15, width: 15 }}
            />
          </TouchableOpacity>
          <View style={{ width: 5, alignItems: "center" }}>
            <Text style={{ fontSize: 12, fontWeight: "bold" }} />
          </View>
          <View
            style={{
              marginLeft: 10,
              height: 10,
              width: 170,
              backgroundColor: "grey",
              borderRadius: 10,
            }}
          />
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <VedioCard
          paused={props.PlayTwo}
          audioStramuri={"http://162.244.80.52:7014/stream"}
        />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{ flex: 0.2, justifyContent: "flex-start" }}
            onPress={props.updateRadioButtonTwo}
          >
            <RadioButtonInput
              isSelected={!props.radioButton}
              onPress={() => {}}
              borderWidth={1}
              buttonInnerColor={"orange"}
              buttonOuterColor={"white"}
              buttonSize={12}
              buttonOuterSize={22}
              buttonStyle={{}}
              buttonWrapStyle={{ marginLeft: 20 }}
            />
          </TouchableOpacity>
          <View style={{ flex: 0.8 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "white",
                marginBottom: 10,
                alignSelf: "flex-start",
              }}
            >
              ڕادیۆی نالیا - سۆرانی
            </Text>
          </View>
        </View>
        <View
          style={{
            borderRadius: 20,
            height: 70,
            backgroundColor: "#E3D5E1",
            width: 300,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => props.btnTwo()}
            style={{
              marginLeft: 10,
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            disabled={props.radioButton}
          >
            <Image
              source={
                props.PlayTwo
                  ? require("../resources/images/play.png")
                  : require("../resources/images/pause.png")
              }
              style={{ height: 15, width: 15 }}
            />
          </TouchableOpacity>
          <View style={{ width: 5, alignItems: "center" }}>
            <Text style={{ fontSize: 12, fontWeight: "bold" }} />
          </View>
          <View
            style={{
              marginLeft: 10,
              height: 10,
              width: 170,
              backgroundColor: "grey",
              borderRadius: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  fullPage: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  icon: {
    marginHorizontal: 20,
    marginVertical: 20,
    color: "#9c84ff",
    fontSize: 30,
  },
  mainTitleText: {
    color: "white",
    fontSize: 25,
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: "bold",
  },
});
