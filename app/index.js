import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  
} from "react-native";

// Main TodoApp component
const TodoApp = () => {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([
    // { id: "1", 
    //   text: "Send a compliment to someone", 
    //   completed: false },
    // { id: "2",
    //   text: "Give a shout-out to felix, callista and chineye",
    //   completed: false,},
    // { id: "3", 
    //   text: "Cook indomie", 
    //   completed: false },
  ]);

  // State to store the current input text
  const [newTask, setNewTask] = useState("");

  // Function to handle adding a new task
  const addTask = () => {
    if (newTask.trim() === "") return; // Prevent adding empty tasks

    const newTaskItem = {
      id: Date.now().toString(), // Unique ID based on timestamp
      text: newTask,
      completed: false,
    };
    // Add the new task to the list
    setTasks([newTaskItem, ...tasks]); // Add new task to the beginning of the list
    setNewTask(""); // Clear the input field
  };

  // Function to toggle task completion
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Render each task item
  const renderTask = ({ item }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)}>
        <View
          style={[styles.checkbox, item.completed && styles.checkboxCompleted]}>
          {item.completed && <Text style={styles.checkMark}>✓</Text>}
        </View>
      </TouchableOpacity>
      <Text style={[styles.taskText, item.completed && styles.taskTextCompleted]}>{item.text}</Text>
      <View style={styles.circle} />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Today's tasks</Text>

      {/* Task List */}
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
      />

      {/* Input and Add Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          placeholderTextColor="#999"
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the app
const styles = ({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  // Header styles
  header: {
    fontSize: 24,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
  },
  // Task list styles
  taskList: {
    flexGrow: 0,
    
  },
  // Task item styles
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    
  },
  // Checkbox styles
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 4,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",  
  },
  // Checkbox completed styles
  checkboxCompleted: {
    backgroundColor: "#00ff00",    
  },
  // Check mark styles
  checkMark: {
    color: '#FFF', // White check mark
    fontSize: 14,
    fontWeight: 'bold',
  },
  // Task text styles
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  // Task text completed styles
  // Strikethrough and dimmed color for completed tasks
  taskTextCompleted: {
    textDecorationLine: 'line-through', // Strikethrough when completed
    color: '#999', // Dim the text color for completed tasks
  },
  // Circle styles
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#87CEEB",
  },
  // Input and Add Button styles
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    
  },
  // Input field styles
  input: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 15,
    fontSize: 16,
    marginRight: 10,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.4)",
    elevation: 3,
  },
  // Add button styles
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.4)",
    elevation: 3,
  },
  // Add button text styles
  addButtonText: {
    fontSize: 24,
    color: "#000",
  },
});

export default TodoApp;
