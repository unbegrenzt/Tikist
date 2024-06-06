import React, { useState } from 'react';
import { StyleSheet, FlatList, Keyboard } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedButton } from '@/components/ThemedButton';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import { TaskItem } from '@/components/TaskItem';
import { useSelector, useDispatch } from 'react-redux';
import { setTaskList } from '@/redux/actions/taskSliceActions';

export default function HomeScreen() {
  const taskList = useSelector((state: { taskList: string[] }) => state.taskList);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [tasks, setTasks] = useState<string[]>(taskList);
  const [ui, setUI] = useState({
    openForm: false,
  });
  const dispatch = useDispatch()

  const handleAddTask = () => {
    if (inputValue.trim() === '') {
      setError('This field is required.');
    } else {
      Keyboard.dismiss();
      setTasks((prevTasks) => {
        const newTasks = [...prevTasks, inputValue];
        setInputValue('');
        setError('');
        setUI((prevState) => ({ ...prevState, openForm: false }));
        dispatch(setTaskList(newTasks))
        return newTasks;
      });
    }
  };

  const handleDeleteTask = (index: number) => {
    setTasks((prevTasks) => {
      const newData = prevTasks.filter((_, i) => i !== index)
      dispatch(setTaskList(newData))
      return newData;
    });
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Ionicons size={310} name="layers" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Tareas</ThemedText>
        <ThemedButton
          title="Nueva tarea"
          onPress={() => setUI((prevState) => ({ ...prevState, openForm: true }))}
          type="normal"
        />
      </ThemedView>
      {ui.openForm && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Crear tarea</ThemedText>
          <ThemedTextInput
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="Describe la tarea"
            error={error}
          />

          <ThemedView style={styles.formContainer}>
            <ThemedButton
              title="Cancelar"
              onPress={() => setUI((prevState) => ({ ...prevState, openForm: false }))}
              type="text"
            />
            <ThemedButton title="Aceptar" onPress={handleAddTask} type="normal" />
          </ThemedView>
        </ThemedView>
      )}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Lista de tareas</ThemedText>
        <FlatList
          data={tasks}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TaskItem
              task={item}
              index={index}
              onDelete={() => handleDeleteTask(index)}
            />
          )}
          ListEmptyComponent={<ThemedText type="defaultSemiBold">No hay tareas</ThemedText>}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  formContainer: {
    flex: 1,
    gap: 8,
    flexDirection: 'row',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
