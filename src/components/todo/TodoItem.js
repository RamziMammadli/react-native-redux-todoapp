import { View, Text } from "react-native";
import React, { useState } from "react";
import CheckBox from "@react-native-community/checkbox";
import { useDispatch } from "react-redux";
import { todoAction } from "../../store/actions/todo.action";

const TodoItem = ({ content, id, checked}) => {
    const [check, setCheck] = useState(checked);
    const dispatch = useDispatch();

    return (
        <View style={{
            flexDirection: 'row'
        }}>
            <CheckBox
                value={checked}
                onValueChange={(value) => {
                    setCheck(!check)
                    dispatch(todoAction.delete(id))
                }}
            />
            <Text>{content}</Text>
        </View>
    );
};

export default TodoItem;