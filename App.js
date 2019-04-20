import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './components/Home';
import AddTodo from './components/AddTodo';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  AddTodo: {screen: AddTodo},
});

const App = createAppContainer(MainNavigator);

export default App;