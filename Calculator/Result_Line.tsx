import {Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';

function Result_Line({
  count,
  isDarkMode,
}: {
  count: any;
  isDarkMode: any;
}): JSX.Element {
  return (
    <View style={{flex: 1.5, alignItems: 'flex-end'}}>
      <Text
        style={{
          color: isDarkMode ? Colors.lighter : Colors.black,
          fontSize: 50,
          marginRight: 20,
        }}>
        {count}
      </Text>
    </View>
  );
}
export default Result_Line;
