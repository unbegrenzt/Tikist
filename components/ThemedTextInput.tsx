// components/ThemedTextInput.tsx

import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, ViewStyle, TextStyle, TextInputProps } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useThemeColor } from '@/hooks/useThemeColor';

type ThemedTextInputProps = TextInputProps & {
  error?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  errorStyle?: TextStyle;
  lightColor?: string;
  darkColor?: string;
  activeColor?: string;
  errorColor?: string;
  errorTextColor?: string;
};

export const ThemedTextInput: React.FC<ThemedTextInputProps> = ({
  error,
  style,
  textStyle,
  errorStyle,
  lightColor,
  darkColor,
  activeColor = '#79F2E6',
  errorColor = '#F28705',
  errorTextColor = '#F25C05',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const borderColor = error ? errorColor : isFocused ? activeColor : '#CCC';

  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={[styles.input, { borderColor }, { color }]}
        placeholderTextColor={color}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {error && (
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle-outline" size={20} color={errorTextColor} />
          <Text style={[styles.errorText, { color: errorTextColor }, errorStyle]}>{error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  errorText: {
    marginLeft: 5,
    fontSize: 14,
  },
});
