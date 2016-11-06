import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Message } from '../components/Message';

export default class Convo extends React.Component {
  state = { messages: [] }
  componentWillMount() {
    this._fetchMessages()
  }

  static route = {
    navigationBar: {
      visible: true,
      backgroundColor: '#12F3A3',
      tintColor: '#FFF',
      title(params) {
        return params.names;
      },
    },
  }

  render() {
    let messages;
    if (this.state.messages && this.state.messages.length > 0) {
      messages = this.state.messages
    } else {
      messages = []
    }

    return (
      <View style={styles.container}>
        <View style={{flex: 10, flexDirection: 'row'}}>
          <ScrollView
            style={styles.convos}
            contentContainerStyle={styles.contentContainer}>
            {messages.map((message) =>
              <Message
                key={message.id}
                message={message}
                user={this.props.user} />
              )
            }
          </ScrollView>
        </View>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <TextInput
            style={styles.textInput}
            placeholder="Type here to send a message!"
            onSubmitEditing={(text) => this.setState({text})}
            multiline = {true}
            numberOfLines = {4} />
        </View>
      </View>
    );
  }

  _fetchMessages = () => {
    fetch('http://localhost:3000/messages', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'username': 'thea',
        'conversation_id': this.props.convoId,
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('WTF', responseJson)
      return this.setState({ messages: responseJson });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  _addMessage = (message) => {
    if (this.props.user.type === 'youth') {
      translation = 'youth_translation'
      originalType = 0
    } else {
      translation = 'old_translation'
      originalType = 1
    }

    return fetch('http://localhost:3000/messages', {
      method: 'POST',
      body: JSON.stringify({
        message: {
          translation: message,
          user_id: this.props.user.id,
          conversation_id: this.props.convoId,
          original_type: originalType
        },
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return this.setState({ messages: this.state.messages.concat(responseJson.message) });
    })
    .catch((error) => {
      console.error(error);
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  convos: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 10,
  },
  textInput: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 14,
  },
});
