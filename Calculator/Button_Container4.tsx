import {Text, TouchableOpacity, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';

function Button_Container4({
  styles,
  onPress,
  isDarkMode,
}: {
  styles: any;
  onPress: any;
  isDarkMode: any;
}): JSX.Element {
  const Button_Font_Color = {
    color: isDarkMode ? Colors.white : Colors.black,
  };
  const operation_button_color = {
    backgroundColor: isDarkMode ? 'rgb(54 54 54)' : 'rgb(232 232 232)',
  };
  return (
    <View
      style={[
        {backgroundColor: isDarkMode ? Colors.black : Colors.lighter},
        styles.Button_Container,
      ]}>
      <TouchableOpacity
        style={[styles.Operation_Button, operation_button_color]}
        onPress={() => onPress('1')}>
        <View>
          <Text style={[styles.Button_Font, Button_Font_Color]}>1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.Operation_Button, operation_button_color]}
        onPress={() => onPress('2')}>
        <View>
          <Text style={[styles.Button_Font, Button_Font_Color]}>2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.Operation_Button, operation_button_color]}
        onPress={() => onPress('3')}>
        <View>
          <Text style={[styles.Button_Font, Button_Font_Color]}>3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.Operation_Button, operation_button_color]}
        onPress={() => onPress('÷')}>
        <View>
          <Text
            style={[
              [styles.Button_Font, Button_Font_Color],
              {color: 'rgb(17,154,89)'},
            ]}>
            ÷
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Button_Container4;
