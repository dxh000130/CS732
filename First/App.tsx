/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  TextLayoutEventData,
  NativeSyntheticEvent,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button_Container_set from './Button_Container_set';
import Delete_Button_set from './Delete_Button_set';
import Result_Line from './Result_Line';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
    flex: 1,
  };
  const [Num1, SetNum1] = useState('');
  const [Num2, SetNum2] = useState('');
  const [Operation, SetOperation] = useState('');
  const [count, setCount] = useState(0);
  const [Input, setInput] = useState('');
  // @ts-ignore
  const Calcuate = equal => {
    var result = 0;
    if (Operation === '+') {
      result = parseFloat(Num1) + parseFloat(Num2);
    } else if (Operation === '-') {
      result = parseFloat(Num1) - parseFloat(Num2);
    } else if (Operation === 'x') {
      result = parseFloat(Num1) * parseFloat(Num2);
    } else if (Operation === '÷') {
      result = parseFloat(Num1) / parseFloat(Num2);
    }
    setCount(result);
    SetNum1(result + '');
    SetNum2('');
    console.log(equal);
    if (equal === true) {
      console.log(111);
      setInput(Input + '=' + result);
      SetNum1(result + '');
      SetOperation('');
    }
  };
  // @ts-ignore
  const onPress = value => {
    if (value === 'AC') {
      setInput('');
      setCount(0);
      SetNum1('');
      SetNum2('');
      SetOperation('');
    } else if (value === '(') {
      setInput(Input + '(');
    } else if (value === ')') {
      setInput(Input + ')');
    } else if (value === '+') {
      setInput(Input + '+');
      {
        Operation === '' ? SetOperation(value) : Calcuate(false);
      }
      console.log('Num1', Num1);
      console.log('Num2', Num2);
    } else if (value === '-') {
      setInput(Input + '-');
      {
        Operation === '' ? SetOperation(value) : Calcuate(false);
      }
    } else if (value === 'x') {
      setInput(Input + 'x');
      {
        Operation === '' ? SetOperation(value) : Calcuate(false);
      }
    } else if (value === '÷') {
      setInput(Input + '÷');
      {
        Operation === '' ? SetOperation(value) : Calcuate(false);
      }
    } else if (value === '=') {
      Calcuate(true);
    } else if (value === '1') {
      setInput(Input + '1');
      {
        Operation === '' ? SetNum1(Num1 + value) : SetNum2(Num2 + value);
      }
    } else if (value === '2') {
      setInput(Input + '2');
      {
        Operation === '' ? SetNum1(Num1 + value) : SetNum2(Num2 + value);
      }
    } else if (value === '3') {
      setInput(Input + '3');
      {
        Operation === '' ? SetNum1(Num1 + value) : SetNum2(Num2 + value);
      }
    } else if (value === '4') {
      setInput(Input + '4');
      {
        Operation === '' ? SetNum1(Num1 + value) : SetNum2(Num2 + value);
      }
    } else if (value === '5') {
      setInput(Input + '5');
      {
        Operation === '' ? SetNum1(Num1 + value) : SetNum2(Num2 + value);
      }
    } else if (value === '6') {
      setInput(Input + '6');
      {
        Operation === '' ? SetNum1(Num1 + value) : SetNum2(Num2 + value);
      }
    } else if (value === '7') {
      setInput(Input + '7');
      {
        Operation === '' ? SetNum1(Num1 + value) : SetNum2(Num2 + value);
      }
    } else if (value === '8') {
      setInput(Input + '8');
      {
        Operation === '' ? SetNum1(Num1 + value) : SetNum2(Num2 + value);
      }
    } else if (value === '9') {
      setInput(Input + '9');
      {
        Operation === '' ? SetNum1(Num1 + value) : SetNum2(Num2 + value);
      }
    } else if (value === '0') {
      setInput(Input + '0');
      {
        Operation === '' ? SetNum1(Num1 + value) : SetNum2(Num2 + value);
      }
    } else if (value === '.') {
      setInput(Input + '.');
      {
        Operation === '' ? SetNum1(Num1 + value) : SetNum2(Num2 + value);
      }
    }
  };
  const [currentFontSize, setCurrentFontSize] = useState(40);
  const onTextLayout = (e: NativeSyntheticEvent<TextLayoutEventData>) => {
    const {lines} = e.nativeEvent;
    if (lines.length > 3) {
      setCurrentFontSize(currentFontSize - 0.5);
    }
  };
  return (
    <View style={backgroundStyle}>
      <View style={{flex: 2.5, alignItems: 'flex-end'}}>
        <Text
          style={{fontSize: currentFontSize, marginTop: 50, marginRight: 20}}
          onTextLayout={onTextLayout}>
          {Input}
        </Text>
      </View>
      <Result_Line isDarkMode={isDarkMode} count={count} />
      <Delete_Button_set onPress={onPress} isDarkMode={isDarkMode} />
      <Button_Container_set
        styles={styles}
        onPress={onPress}
        isDarkMode={isDarkMode}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Button_Font: {
    fontSize: 30,
  },
  Button_Container: {
    flex: 1.2,
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
