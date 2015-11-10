'use strict';

var React = require('react-native');

var {
  Image,
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} = React;

var imageStyle = {
  borderRadius: 2,
  backgroundColor: 'black',
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  resizeMode: 'contain',
};

var roleInfo = React.createClass({
  render: function(){
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    };
    return (
      <View style={styles.container}>
        <TouchableElement
          onPress={()=> this.close()}
          >
          <Image style={imageStyle} source={{uri:this.props.image}}/>
        </TouchableElement>
      </View>
    );
  },

  close: function () {
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  closeButton: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    borderRadius: 3,
    textAlign: 'center',
    marginTop: 10,
    alignSelf: 'flex-end',
  },

});

module.exports = roleInfo;
