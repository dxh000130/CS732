/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, useColorScheme, View} from 'react-native';
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
  const [count, setCount] = useState(0);
  const [Input, setInput] = useState(null);
  const onPress = () => setCount(count + 1);
  return (
    <View style={backgroundStyle}>
      <View style={{flex: 2.5}}>{Input}</View>
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
