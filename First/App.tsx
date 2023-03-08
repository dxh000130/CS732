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
  const [LeftKuoHao, SetLeftKuoHao] = useState(0);
  const [RightKuoHao, SetRightKuoHao] = useState(0);
  // const [Num1, SetNum1] = useState('');
  // const [Num2, SetNum2] = useState('');
  const [Operation, SetOperation] = useState('');
  const [count, setCount] = useState(0);
  const [Input, setInput] = useState('');
  // @ts-ignore
  const Calcuate = equal => {
    if (
      LeftKuoHao === RightKuoHao &&
      (Operation.indexOf('+') !== -1 ||
        Operation.indexOf('-') !== -1 ||
        Operation.indexOf('*') !== -1 ||
        Operation.indexOf('/') !== -1 ||
        Operation.indexOf('=') !== -1)
    ) {
      var result = 0;
      try {
        result = eval(Operation);
      } catch (error) {
        setInput('Error');
      }
      setCount(result);
      if (equal === true) {
        SetOperation('' + result);
        setInput(Input + '=' + result);
        console.log('dfdfd', Operation);
      }
    }
  };
  // @ts-ignore
  const onPress = value => {
    if (value === 'AC') {
      setInput('');
      setCount(0);
      SetOperation('');
    } else if (value === 'DEL') {
      console.log(Input.substring(Input.length - 1));
      if (Input.match('=\\d*$') === null) {
        if (Input.substring(Input.length - 1) === '(') {
          console.log('删除left（');
          SetLeftKuoHao(LeftKuoHao - 1);
        } else if (Input.substring(Input.length - 1) === ')') {
          console.log('删除Right（');
          SetRightKuoHao(RightKuoHao - 1);
        }
        setInput(Input.substring(0, Input.length - 1));
        SetOperation(Operation.substring(0, Input.length - 1));
      } else {
        setInput('');
        SetOperation('');
        setCount(0);
      }
    } else if (value === '(') {
      SetLeftKuoHao(LeftKuoHao + 1);
      setInput(Input + '(');
      SetOperation(Operation + value);
      Calcuate(false);
    } else if (value === ')') {
      SetRightKuoHao(RightKuoHao + 1);
      setInput(Input + ')');
      SetOperation(Operation + value);
      Calcuate(false);
    } else if (value === 'x') {
      setInput(Input + 'x');
      SetOperation(Operation + '*');
      Calcuate(false);
    } else if (value === '÷') {
      setInput(Input + '÷');
      SetOperation(Operation + '/');
      Calcuate(false);
    } else if (value === '=') {
      Calcuate(true);
      //SetOperation(Operation + value);
    } else if (value === '+' || value === '-') {
      setInput(Input + value);
      SetOperation(Operation + value);
      Calcuate(false);
    } else {
      setInput(Input + value);
      SetOperation(Operation + value);
      // {
      //   Operation === '' ? SetNum1(Num1 + value) : SetNum2(Num2 + value);
      // }
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
