import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';

function Delete_Button_set({
  onPress,
  isDarkMode,
}: {
  onPress: any;
  isDarkMode: any;
}): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.lighter,
        marginBottom: 5,
        marginHorizontal: 10,
      }}>
      <TouchableOpacity onPress={onPress}>
        <View style={{alignItems: 'flex-end', marginBottom: 8, marginRight: 8}}>
          <Icon name="delete" size={30} color="rgb(17,154,89)" />
        </View>
      </TouchableOpacity>
      <View
        style={[
          {
            height: 0,
            borderTopWidth: 0.5,
            borderColor: isDarkMode ? 'white' : 'black',
            opacity: 0.3,
            margin: StyleSheet.hairlineWidth,
          },
        ]}
      />
    </View>
  );
}
export default Delete_Button_set;
