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
  static route = {
    navigationBar: {
      visible: true,
      backgroundColor: '#12F3A3',
      tintColor: '#FFF',
      title(params) {
        return params.name;
      },
    },
    navigationProvider: {
      visible: false,
      backgroundColor: '#12F3A3',
      tintColor: '#FFF',
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
        sent_time: "2016-11-04T10:21:53.330-07:00"
      },
      { id: 2,
        user_id: 2,
        youth_translation: "What's up?!",
        old_translation: "How are you?",
        sent_time: "2016-11-04T10:27:53.330-07:00"
      },
      { id: 3,
        user_id: 1,
        youth_translation: 'Hello!',
        old_translation: 'Hi, again.',
        sent_time: "2016-11-04T10:31:53.330-07:00"
      }
    ]
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
