import React, { Component } from 'react';
import Routes from "./Routes";

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import PushController from './PushController'


export default class HelloWorldApp extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex:1 }}>
        <Routes/>
        <PushController/>
      </SafeAreaView>
    );

  }
}
