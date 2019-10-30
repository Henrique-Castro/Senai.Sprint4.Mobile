/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    }
  }



  render() {
    const styles = StyleSheet.create({
      scrollView: {
        backgroundColor: Colors.lighter,
      },
      e: {
        position: 'absolute',
        right: 0,
      },
      textInput: {
        marginTop: 20,
      },
      text: {
        textAlign: 'center',
        backgroundColor: 'blue',
        color: 'yellow',
        fontSize: 40,
      },
      body: {
        backgroundColor: Colors.white,
      },
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
      },
      highlight: {
        fontWeight: '700',
      },
      footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
      },
    });
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Text style={styles.text}>Hello World!</Text>
            <TextInput style={styles.textInput} placeholder="Este é um input." />
            <Button title="Clica em mim" />

          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}