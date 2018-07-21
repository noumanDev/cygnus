import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import smsActions from '../Redux/SmsRedux';



// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'


class HomeScreen extends Component {
  constructor(props) {
    super();
    
  }
  componentDidMount() {
   this.props.setLog('i am changed now');
   this.props.fetchMessages();

  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>Home Screen</Text>
          <Text>Messages {this.props.sms.messages.length}</Text>
          <Text>{this.props.sms.log}</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sms:state.sms
  }
}

const mapDispatchToProps = (dispatch) => {
 
  return {
    setLog: log => {
      dispatch(smsActions.setLog(log))
    },
    fetchMessages: () => {
      dispatch(smsActions.fetchMessages())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
