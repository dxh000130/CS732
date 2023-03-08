import {Text, TouchableOpacity, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';

function Button_Container5({
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
        {
          backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
          marginBottom: 5,
        },
        styles.Button_Container,
      ]}>
      <TouchableOpacity
        style={[styles.Operation_Button, operation_button_color, {width: 176}]}
        onPress={onPress}>
        <View>
          <Text style={[styles.Button_Font, Button_Font_Color]}>0</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.Operation_Button, operation_button_color]}
        onPress={onPress}>
        <View>
          <Text style={[styles.Button_Font, Button_Font_Color]}>.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.Operation_Button, {backgroundColor: 'rgb(0 205 102)'}]}
        onPress={onPress}>
        <View>
          <Text
            style={[[styles.Button_Font, Button_Font_Color], {color: 'white'}]}>
            =
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Button_Container5;
