import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedText } from '@/components/ThemedText';

interface TaskItemProps {
  task: string;
  index: number;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, onDelete }) => {
  const backgroundColor = index % 2 === 0 ? '#41D9AE' : '#79F2E6';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ThemedText style={styles.taskText}>{task}</ThemedText>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Ionicons name="close" size={32} style={styles.deleteButtonText} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 1,
  },
  deleteButton: {
    marginRight: 10,
  },
  deleteButtonText: {
    fontSize: 20,
    color: '#060F14',
  },
  taskText: {
    flex: 1,
    textAlign: 'center',
    color: '#060F14',
  },
});

export { TaskItem };

