/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
    flex: 1,
  };
  const Button_Font_Color = {
    color: isDarkMode ? Colors.white : Colors.black,
  };
  const operation_button_color = {
    backgroundColor: isDarkMode ? 'rgb(54 54 54)' : 'rgb(232 232 232)',
  };
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);
  return (
    <View style={backgroundStyle}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{flex: 0.8, alignItems: 'center'}}>
        <Text
          style={{
            color: isDarkMode ? Colors.lighter : Colors.black,
            fontSize: 50,
          }}>
          Calculator
        </Text>
      </View>
      <View style={{flex: 3.5}}>
        <Text
          style={{
            color: isDarkMode ? Colors.lighter : Colors.black,
          }}>
          {count}
        </Text>
      </View>
      <View
        style={[
          {backgroundColor: isDarkMode ? Colors.black : Colors.lighter},
          styles.Button_Container,
        ]}>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text
              style={[
                [styles.Button_Font, Button_Font_Color],
                {color: 'rgb(205 51 51)'},
              ]}>
              AC
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text
              style={[
                [styles.Button_Font, Button_Font_Color],
                {color: 'rgb(17,154,89)'},
              ]}>
              (
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text
              style={[
                [styles.Button_Font, Button_Font_Color],
                {color: 'rgb(17,154,89)'},
              ]}>
              )
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text
              style={[
                [styles.Button_Font, Button_Font_Color],
                {color: 'rgb(17,154,89)'},
              ]}>
              +
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View
        style={[
          {backgroundColor: isDarkMode ? Colors.black : Colors.lighter},
          styles.Button_Container,
        ]}>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text style={[styles.Button_Font, Button_Font_Color]}>7</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text style={[styles.Button_Font, Button_Font_Color]}>8</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text style={[styles.Button_Font, Button_Font_Color]}>9</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text
              style={[
                [styles.Button_Font, Button_Font_Color],
                {color: 'rgb(17,154,89)'},
              ]}>
              -
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View
        style={[
          {backgroundColor: isDarkMode ? Colors.black : Colors.lighter},
          styles.Button_Container,
        ]}>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text style={[styles.Button_Font, Button_Font_Color]}>4</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text style={[styles.Button_Font, Button_Font_Color]}>5</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text style={[styles.Button_Font, Button_Font_Color]}>6</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text
              style={[
                [styles.Button_Font, Button_Font_Color],
                {color: 'rgb(17,154,89)'},
              ]}>
              x
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View
        style={[
          {backgroundColor: isDarkMode ? Colors.black : Colors.lighter},
          styles.Button_Container,
        ]}>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text style={[styles.Button_Font, Button_Font_Color]}>1</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text style={[styles.Button_Font, Button_Font_Color]}>2</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text style={[styles.Button_Font, Button_Font_Color]}>3</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text
              style={[
                [styles.Button_Font, Button_Font_Color],
                {color: 'rgb(17,154,89)'},
              ]}>
              ÷
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View
        style={[
          {
            backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
            marginBottom: 5,
          },
          styles.Button_Container,
        ]}>
        <TouchableHighlight
          style={[
            styles.Operation_Button,
            operation_button_color,
            {width: 176},
          ]}
          onPress={onPress}>
          <View>
            <Text style={[styles.Button_Font, Button_Font_Color]}>0</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.Operation_Button, operation_button_color]}
          onPress={onPress}>
          <View>
            <Text style={[styles.Button_Font, Button_Font_Color]}>.</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.Operation_Button, {backgroundColor: 'rgb(0 205 102)'}]}
          onPress={onPress}>
          <View>
            <Text
              style={[
                [styles.Button_Font, Button_Font_Color],
                {color: 'white'},
              ]}>
              =
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Button_Font: {
    fontSize: 30,
  },
  Button_Container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 8,
    alignItems: 'flex-start',
  },
  Operation_Button: {
    marginLeft: 9,
    marginRight: 8,
    width: 80,
    height: 80,
    marginTop: 3,
    borderRadius: 160,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(232 232 232)',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
