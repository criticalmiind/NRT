import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, ImageBackground, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
import HeaderPage from "../components/Header";
import AudioComponent from "../components/Vedio"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import PushNotification from "react-native-push-notification";
import LatestHeaderComponent from "../components/LatestHeader";
import LatestWebView from "../components/LatestWebView";
import LatestBottom from "../components/LatestBottom";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class LatestContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    hideSpinner = () => {
        this.setState({ isLoading: false })
    }


    render() {
        return (
            <ImageBackground source={require("../resources/images/bg1.png")} resizeMode="cover" style={{ flex: 1 }} resizeMode="cover">
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <StatusBar backgroundColor="transparent" translucent />

                    <View style={{ marginTop: hp('4%') }}>
                        <LatestHeaderComponent showLogo={false} showBackArrow={true} showDrawer={false} onPressShowBackArrow={() => this.props.navigation.pop()} />
                    </View>

                    <View style={{ height: '100%' }}>
                        <LatestWebView uri={"https://nrttv.com/contact.aspx"} hideSpinner={this.hideSpinner} isLoading={this.state.isLoading} />
                    </View>
                    {/* <View style={{}}>
                        <LatestBottom />
                    </View> */}


                </ScrollView>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({

    bottomBtns: {
        flex: 0.33,
        backgroundColor: "white",
        marginVertical: hp('1.5%'),
        marginHorizontal: wp('1.5%'),
        justifyContent: "center",
        alignItems: "center"
    },

});