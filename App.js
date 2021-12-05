import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';
import { Ionicons } from '@expo/vector-icons';
import styles from './components/style';

export default function App() {

  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);


  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])  // Append Task to TaskItem List
    setTask(null);
  }

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }


  return (
    <View style={styles.container}>

      {/* Today's Task */}
      <View style={styles.taskWrapper}>
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>
            Today's tasks
          </Text>
          <TouchableOpacity onPress={()=> setTaskItems([])}>
            <Ionicons name="trash-bin" size={24} color="red" />
          </TouchableOpacity>
        </View>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                // <TouchableOpacity on completed = {completed} id={index} >
                //   <Task text={item} key={index}  deleteTask={deleteTask} />
                // </TouchableOpacity>
                  <Task text={item} key={index}  deleteTask={deleteTask} />
              )

              // <Task key={index} text={item}/>
            })
          }
          {/* <Task text={'Task 1'} />
          <Task text={'Task 2'} /> */}

        </View>

      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => task !== null ? handleAddTask() : null} disabled={task !== null ? false : true}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}> + </Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

    </View>
  );
}

