import React from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import {
  Font,
} from 'exponent';

export class Message extends React.Component {
  render() {
    let messageStyles;
    let textStyles;

    if (this.props.user.id == this.props.message.user_id) {
      messageStyles = styles.myMessage;
      textStyles = styles.myText;
    } else {
      messageStyles = styles.othersMessage;
      textStyles = styles.othersText;
    }

    let translation;

    if (this.props.user.type == 'youth') {
      translation = this.props.message.youth_translation;
    } else {
      translation = this.props.message.old_translation;
    }

    return (
      <View style={messageStyles}>
        <Text style={textStyles}>
          {translation}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myMessage: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#2ADB9D',
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 15,
    marginLeft: 60,
  },
  othersMessage: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#B7F5DD',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 15,
    marginRight: 40,
    shadowColor: '#eee',
    shadowOpacity: 100,
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 2 },
  },
  myText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  othersText: {
    color: '#616161',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
