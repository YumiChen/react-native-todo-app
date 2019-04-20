import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import { Appbar } from 'react-native-paper';

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
          <Appbar.BackAction
            onPress={this._goBack}
          />
        </Appbar.Header>
        <TextInput
            label='Email'
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
        />
        <DatePicker
            style={{width: 200}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
            dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
            },
            dateInput: {
                marginLeft: 36
            }
            // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => {this.setState({date: date})}}
        />
        <TextInput
            label='Email'
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            multiline = {true}
            numberOfLines = {4}
        />
        <Button icon="add-a-photo" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
        </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  toolbar: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: 'tomato',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
