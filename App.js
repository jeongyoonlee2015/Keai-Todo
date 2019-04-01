import React from 'react';
import { Styles, StyleSheet, Text, View, StatusBar, TextInput, Dimensions } from 'react-native';

const{height, width} = Dimensions.get("window");

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text sytle={styles.tritle}>Keai To Do</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"New To Do"} />
          </View>
      </View>
    );
//여기 있던 중괄호 없애버림
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f26f69',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30
  },
  card:{
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderRadius: 10
  }
});
