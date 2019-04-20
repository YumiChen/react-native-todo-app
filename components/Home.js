import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import { Appbar } from 'react-native-paper';

import Todos from './Todos';

export default class Home extends React.Component {
  state = {
    todos: []
  }
  addTodo=todo=>{
    this.props.navigation.navigate('AddTodo');
    // this.setState(prevState=>({todos: ["test" ,...prevState.todos]}));
  }
  deleteTodo=i=>{
    const todos = [...this.state.todos];         
    todos.splice(i, 1);
    this.setState({todos});
  }
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Todos"
            // subtitle="Subtitle"
          />
          <Appbar.Action icon="add" onPress={this.addTodo} />
          <Appbar.Action icon="more-vert" onPress={this._onMore} />
        </Appbar.Header>

        <Todos 
          todos={this.state.todos}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 0,
    margin: 0
  }
});
