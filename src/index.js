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
  state = {
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
        <Text>{this.state.usuario}</Text>
        { this.state.todos.map(todo => (
        <Todo key={todo.id} title={todo.text}/>
        )) }
        <Button title="Adicionar todo" onPress={this.addTodo} /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
});
