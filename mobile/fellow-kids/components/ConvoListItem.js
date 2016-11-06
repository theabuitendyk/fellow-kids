import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import {
  Font,
} from 'exponent';

import { withNavigation } from '@exponent/ex-navigation';

import Router from '../navigation/Router';

@withNavigation
export class ConvoListItem extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this._goToConvo}>
        <View style={styles.convoItemContainer}>
          <View style={styles.previewColumn}>
            <Text style={styles.names}>
              {this.props.convo.name}
            </Text>
            <Text style={styles.lastMessage}>
              {this.props.convo.lastMessage}
            </Text>
          </View>
          <View style={styles.timeColumn}>
            <View style={styles.timeRow}>
              <Text style={styles.timeText}>
                {this.props.convo.time}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _goToConvo = () => {
    this.props.navigator.push(
      Router.getRoute(
        'convo',
        { convoId: this.props.convo.id, user: this.props.user }
      )
    );
  }
}

const styles = StyleSheet.create({
  convoItemContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  previewColumn: {
    flex: 5,
    flexDirection: 'column',
  },
  names: {
    fontWeight: 'bold',
  },
  lastMessage: {
    color: '#616161',
  },
  timeColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  timeRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 11
  }
})
