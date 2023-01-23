import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import Todo from "./src/components/todo";
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './src/store/reducers'


const store = createStore(reducers);
//
const App = () => {
    return (
        <Provider  store={store}>
            <Todo />

        </Provider>
    );
};

export default App;