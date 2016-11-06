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

import { ConvoListItem } from '../components/ConvoListItem';

export default class ConvoList extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  render() {
    const user = { id: 1, type: 'youth' }

    const convos = [
      { id: 1,
        name: 'Mom',
        lastMessage: 'tired af',
        time: '10:07PM'
      },
      { id: 2,
        name: 'Aunt Carol',
        lastMessage: 'Hyped 2 c u thug!!',
        time: '7:23PM'
      },
      { id: 3,
        name: 'Grandpa Joe',
        lastMessage: "Omfg so stoked 2 play Scrabble wit u",
        time: '10:07PM'
      }
    ]

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/fellow-kids.png')}
              style={styles.welcomeImage}
            />
          </View>


          <View>
            {convos.map((convo) =>
              <ConvoListItem key={convo.id} convo={convo} user={user} />
              )
            }
          </View>
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
