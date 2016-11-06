import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  SegmentedControlIOS,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';

import { Message } from '../components/Message';

export default class Convo extends React.Component {
  state = { messages: [], newMsg: '' }
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
            autoCorrect={false}
            style={styles.textInput}
            placeholder="Type here to send a message!"
            onChangeText={(text) => this.setState({ newMsg: text})}
            multiline = {true}
            numberOfLines = {4}
            value={this.state.newMsg} />
          <TouchableHighlight onPress={this._addMessage}>
            <Text>Send</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  _fetchMessages = () => {
    fetch('http://10.10.43.8:3000/messages', {
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

  _addMessage = () => {
    if (this.state.newMsg === '' || this.state.newMsg === null) {
      return
    }
    let youthTranslation;
    let oldTranslation;
    if (this.props.user.type === 'youth') {
      youthTranslation = this.state.newMsg
      oldTranslation = null
      originalType = 'youth'
    } else {
      youthTranslation = null
      oldTranslation = this.state.newMsg
      originalType = 'old'
    }

    return fetch('http://10.10.43.8:3000/messages', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'youth_translation': youthTranslation,
        'old_translation': oldTranslation,
        'username': 'thea',
        'conversation_id': this.props.convoId,
        'original_type': originalType,
      },
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('MESSSAGE', responseJson)
      this.setState({ newMsg: '' })
      return this._fetchMessages()
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
