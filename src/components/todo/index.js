import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Button from "../common/Button";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "../../store/actions/todo.action";

const Index = () => {

  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(todoAction.getAll());
  // },[])

  let todoList = useSelector(reducers => reducers.todoReducer);
  console.log(todoList);
  return (
    <View style={{
      flex: 1,
    }}>
      {todoList.map((item, index) => {
        key = { index }
        return (<TodoItem
          id={item.id}
          content={item.content}
          checked={item.checked}
        />)
      })}
      <Button />
    </View>
  );
};

export default Index;