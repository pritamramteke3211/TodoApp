import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Task = (props) => {
    const [completed, setCompleted] = useState('false')
    
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
               
                    <Pressable onPress={()=> {completed === 'false'? setCompleted('true') : setCompleted('false')
                    
                }}>
                        <Text style={styles.itemText}  style={{textDecorationLine: completed === 'true' ? 'line-through': 'none'}}> {props.text} </Text>
                    </Pressable> 

                        {/* <Text style={styles.itemText} > {props.text} </Text> */}
            </View>
            <TouchableOpacity  onPress={() => props.deleteTask(props.index)}>
                <Ionicons name="trash-bin"  size={24} color="red" />
            </TouchableOpacity>
            {/* <View style={styles.circular}></View> */}
        </View>

    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;