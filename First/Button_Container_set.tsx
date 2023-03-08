import Button_Container1 from './Button_Container1';
import Button_Container2 from './Button_Container2';
import Button_Container3 from './Button_Container3';
import Button_Container4 from './Button_Container4';
import Button_Container5 from './Button_Container5';
import React from 'react';
import {View} from 'react-native';

function Button_Container_set({
  styles,
  onPress,
  isDarkMode,
}: {
  styles: any;
  onPress: any;
  isDarkMode: any;
}): JSX.Element {
  return (
    <View style={{flex: 6}}>
      <Button_Container1
        styles={styles}
        onPress={onPress}
        isDarkMode={isDarkMode}
      />
      <Button_Container2
        styles={styles}
        onPress={onPress}
        isDarkMode={isDarkMode}
      />
      <Button_Container3
        styles={styles}
        onPress={onPress}
        isDarkMode={isDarkMode}
      />
      <Button_Container4
        styles={styles}
        onPress={onPress}
        isDarkMode={isDarkMode}
      />
      <Button_Container5
        styles={styles}
        onPress={onPress}
        isDarkMode={isDarkMode}
      />
    </View>
  );
}

export default Button_Container_set;
