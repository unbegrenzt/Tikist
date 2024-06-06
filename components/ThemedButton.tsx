// components/ThemedButton.tsx
import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle, TextStyle, ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from '@/components/ThemedText';

export type ThemedButtonProps = ViewProps & {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  lightColor?: string;
  darkColor?: string;
  type: 'normal' | 'text';
  color?: 'primaryColor' | 'secondaryColor';
};

export function ThemedButton({ title, onPress, style, textStyle, lightColor, darkColor, type, color = 'primaryColor' }: ThemedButtonProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, color);
  const textColor = useThemeColor({ light: '#ECEDEE', dark: darkColor }, 'text');

  const bgColor = type === 'normal' ? { backgroundColor: backgroundColor } : {};

  return (
    <TouchableOpacity style={[{ ...bgColor }, styles.button, style]} onPress={onPress}>
      <ThemedText
        type="default"
        style={textStyle}
        lightColor={type === 'normal' ? textColor : undefined}>
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
