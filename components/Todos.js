import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, FlatList } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { Card, Button } from 'react-native-paper';

const Route = props => {
  return (props.todos.length > 0?<FlatList
    data={props.todos}
    renderItem={({item, index}) =>(<Card style={styles.listItem} key={index}>
        <Text>{item}</Text>
        <Button icon="remove" mode="contained" onPress={props.deleteTodo.bind(null, index)}>
            Delete
        </Button>
      </Card>
      )
    }
    keyExtractor={(item, index) => index.toString()}
  />:<View>
    <Text style={styles.noTodosHint}>You don't have any todos...</Text>
    <Button icon="add" mode="contained" onPress={props.addTodo}>
      Add a Todo now!
    </Button>
  </View>);
}

export default class Todos extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'todos', title: 'Todos' },
      { key: 'completed', title: 'Completed' },
    ],
  };

  render() {
    return (
      <View style={styles.content}>
        <TabView
          navigationState={this.state}
          renderScene={({ route, jumpTo }) => {
            return <Route jumpTo={jumpTo} {...this.props}/>;
          }}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 17,
    padding: 5
  },
  noTodosHint: {
    textAlign: 'center',
    padding: 10
  },
  listItem: {
    padding: 10,
    marginTop: 5
  },
});