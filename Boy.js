import React,{ Component } from 'react';
import Girl from './Girl'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Boy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    }
  }
  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.text}> i am a boy.</Text>
        <Text style={styles.text} 
          onPress={() => {
            this.props.navigator.push({
              component: Girl,
              params: {
                word: '一支玫瑰',
                onCallBack: (word) => {
                  this.setState({
                    word: word
                  })
                }
              }
            })
        }}>
          送给女孩一支玫瑰
        </Text>
        <Text style={styles.text}>{this.state.word}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20
  }
})