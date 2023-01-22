import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../../store/actions/todo.action";


const Button = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const addTodo = () => {
    //value = Hello
    dispatch(todoAction.add({
      id: Math.random().toFixed(3),
      content: value,
      checked: false
    }));
  }
  return (
    <View style={{
      flex: 1
    }}>
      <TextInput
        onChangeText={setValue}
        style={{
          height: 40,
          backgroundColor: '#d3d3d3'
        }}
      />
      <TouchableOpacity
        style={{
          bottom: 10,
          right: 10,
          width: '100%',
          height: 70,
          backgroundColor: 'purple',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onPress={() => addTodo()}
      >
        <Text style={{
          fontSize: 40,
          fontWeight: '700',
          color: 'white'
        }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;