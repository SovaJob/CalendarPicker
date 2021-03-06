import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default function Controls({ styles, textStyles, label, onPressControl, component }) {
  return (
    <TouchableOpacity
      onPress={() => onPressControl()}
      style={{flex: 1, height: 20, paddingTop: 5}}
      hitSlop={{
        top: 30,
        bottom: 10
      }}
    >
      {component
      ? component
      : <Text allowFontScaling={false} style={[styles, textStyles]}>
          { label }
        </Text>}
    </TouchableOpacity>
  );
}

Controls.propTypes = {
  styles: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onPressControl: PropTypes.func.isRequired,
};
