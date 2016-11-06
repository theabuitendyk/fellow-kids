import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Message } from '../components/Message';

export default class Convo extends React.Component {
  componentWillMount() {
    this.setState({ messages: this._fetchMessages })
  }

  static route = {
    navigationBar: {
      visible: true,
      title(params) {
        return params.name;
      },
    },
  }

  render() {
    const messages = [
      { id: 1,
        user_id: 1,
        youth_translation: 'Hey!',
        old_translation: 'Hello Dear :)',
        created_at: "2016-11-04T8:31:53.330-07:00"
      },
      { id: 2,
        user_id: 2,
        youth_translation: "What's up?!",
        old_translation: "How are you?",
        created_at: "2016-11-04T9:31:53.330-07:00"
      },
      { id: 3,
        user_id: 1,
        youth_translation: 'Hello!',
        old_translation: 'Hi, again.',
        created_at: "2016-11-04T10:31:53.330-07:00"
      }
    ]
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
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
    );
  }

  _fetchMessages = () => {
    return fetch('localhost:3000/messages', {
      body: JSON.stringify({
        conversation_id: this.props.convoId,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return this.setState(messages: responseJson.messages);
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

    return fetch('localhost:3000/messages', {
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
    backgroundColor: '#fff',
    margin: 10,
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 181,
    height: 97,
    marginTop: 3,
  },
});
