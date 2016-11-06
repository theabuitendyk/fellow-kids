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
import moment from 'moment';

@withNavigation
export class ConvoListItem extends React.Component {
  state = {}
  componentWillMount() {
    let usernames = this.props.convo.users.map((user) => user.username)
    usernames = usernames.filter((i) => i !== this.props.user.username).join(', ')
    this.setState({usernames: usernames})
  }

  render() {
    let translation;

    if (this.props.user.type === 'youth') {
      translation = this.props.convo.last_message.youth_translation;
    } else {
      translation = this.props.convo.last_message.old_translation;
    }

    return (
      <TouchableHighlight onPress={this._goToConvo}>
        <View style={styles.convoItemContainer}>
          <View style={styles.previewColumn}>
            <Text style={styles.names}>
              {this.state.usernames}
            </Text>
            <Text style={styles.lastMessage}>
              {translation}
            </Text>
          </View>
          <View style={styles.timeColumn}>
            <View style={styles.timeRow}>
              <Text style={styles.timeText}>
                {moment(this.props.convo.last_message.created_at).format("H:mmA")}
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
        {
          convoId: this.props.convo.id,
          user: this.props.user,
          names: this.state.usernames,
        }
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
