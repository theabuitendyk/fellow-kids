import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import {
  Font,
} from 'exponent';

import { StyledText } from '../components/StyledText';
import moment from 'moment';

export class Message extends React.Component {
  render() {
    let messageStyles;
    let textStyles;

    if (this.props.user.id == this.props.message.user_id) {
      messageStyles = styles.myMessage;
      textStyles = styles.myText;
      timestampStyles = styles.myTimestamp;
    } else {
      messageStyles = styles.othersMessage;
      textStyles = styles.othersText;
      timestampStyles = styles.othersTimestamp;
    }

    let translation;

    if (this.props.user.type === 'youth') {
      translation = this.props.message.youth_translation;
    } else {
      translation = this.props.message.old_translation;
    }

    return (
      <View>
        <View style={messageStyles}>
          <View style={{flexDirection: 'column'}}>
            <StyledText style={textStyles}>
              {translation}
            </StyledText>
          </View>
        </View>
        <StyledText style={timestampStyles}>
          {this.props.message.username} at {moment(this.props.message.sent_time).format("h:mmA")}
        </StyledText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myMessage: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2ADB9D',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 13,
    marginBottom: 5,
    marginLeft: 60,
  },
  othersMessage: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#B7F5DD',
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 13,
    marginRight: 40,
    marginBottom: 5,
    shadowColor: '#eee',
    shadowOpacity: 100,
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 2 },
  },
  myTimestamp: {
    flex: 1,
    flexDirection: 'row',
    color: '#616161',
    fontSize: 10,
    alignItems: 'flex-end',
    marginBottom: 15,
    textAlign: 'right',
  },
  othersTimestamp: {
    flex: 1,
    flexDirection: 'row',
    color: '#616161',
    fontSize: 10,
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  myText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 16,
  },
  othersText: {
    color: '#616161',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 16,
  },
})
