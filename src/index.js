import React, {Component} from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import Todo from './components/Todo'
  

export default class App extends Component {
  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({ text: 'Hello World'})
  //   }, 3000);
  // }

  // static getDerivedStateFromProps(nextProps,prevState){
  //   return {text: nextProps.text}
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   return nextState.counter < 5;
  // }

  // componentDidUpdate (prevProps, prevState){

  // }

  // componentWillUnmount(){

  // }

  // handleAddCounter =() => {
  //   this.setState({ counter: this.state.counter + 1 })
  // }

  state = {
  // text:'',
  // counter: 0,
    usuario: "Túlio",
    todos:[
      { id: 0, text:'Fazer o café'},
      { id: 1, text:'Estudar o GoNative'},
     ],
  };

  addTodo = () => {
    this.setState({
       todos: [ 
         ...this.state.todos,
         { id: Math.random(), text:'Novo Todo'},
        ],
      });
  }

  render() {
    return (
      <View style={styles.container}>
        {/*<Text>{this.state.text}</Text>
        <Button onPress={this.handleAddCounter} title="Add"/>
        <Text>{this.state.counter}</Text> 
        <Text>{this.state.usuario}</Text>
        { this.state.todos.map(todo => (
        <Todo key={todo.id} title={todo.text}/>
        )) }
        <Button title="Adicionar todo" onPress={this.addTodo} /> */}
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}>
          <Text style={styles.boxText}>Oi</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#333',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box:{
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    transform: [
      { rotateZ:'55deg' },
    ]
  },
  boxText: {
    color:'#FFF',
  }
});
