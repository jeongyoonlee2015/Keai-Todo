import React from 'react';
import { Styles, StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform, ScrollView } from 'react-native';
import ToDo from "./ToDo";

const{height, width} = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newTodo: ""
  }
  render() {
    const{newToDo} = this.state;
    return (
        <View style = {styles.container}>
          <StatusBar barStyle="light-content" />
          <Text sytle = {styles.title, {fontSize: 300}}>Keai To Do</Text> //fontSize안바뀜
          <View style = {styles.card}>
            <TextInput style={styles.input}
                       placeholder={"New To Do"}
                       value={newToDo}
                       onChangeText={this._controlNewTodo}
                       placeholderTextColor={"#999"}
                       returnKeyType={"done"}
                       autoCorrect={false}
            />
            <scrollView> //NewFile
              <ToDo />
            </scrollView>
          </View>
        </View>
    );
  }
  _controlNewToDo = text => {
    this.setState({
      newToDo: text
    });
  };
}
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
    marginTop: 3,
    fontWeight: "60",
    marginBottom: 30
  },
  card:{
    backgroundColor: "white",
    flex: 1,
    height: 10,
    width: width - 100,
    borderRadius: 10,
    ...Platform.select({
      ios
          : {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius:5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3

      }
    })
  },
  input: {
    padding:20,
    borderBottomColor:"#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  }
});
//Testing