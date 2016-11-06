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
  static route = {
    navigationBar: {
      visible: false,
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
