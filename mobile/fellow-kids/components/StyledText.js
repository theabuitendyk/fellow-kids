import React from 'react';
import {
  Text,
} from 'react-native';
import {
  Font,
} from 'exponent';

export class StyledText extends React.Component {
  render() {
    return (
      <Text {...this.props} style={[this.props.style, Font.style('muli')]} />
    );
  }
}
