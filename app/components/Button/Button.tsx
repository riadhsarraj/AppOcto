import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants/theme';

interface Props {
    title: string;
    onPress: () => void;
    color?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
    size?: 'sm' | 'lg';
}

const Button: React.FC<Props> = ({ 
    title, 
    onPress, 
    color = '#F28134', 
    style, 
    textStyle,
    disabled = false,
    size = 'lg'
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                { backgroundColor: color },
                disabled && styles.disabled,
                style,
                size === 'sm' && {
                    height: 36,
                    paddingHorizontal: 10,
                    borderRadius: 4
                },
                size === 'lg' && {
                    height: 55,
                    paddingHorizontal: 30,
                }
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[styles.buttnTitle, size === 'sm' && {
                fontSize: 14,
            }, size === 'lg' && {
                fontSize: 18,
            }, color && { color: COLORS.white }, textStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        height: 60,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    buttnTitle: {
        ...FONTS.fontSemiBold,
        fontSize: 16,
        color: '#fff',
        lineHeight: 24,
        textTransform: 'uppercase'
    },
    disabled: {
        opacity: 0.5,
    }
});

export default Button;