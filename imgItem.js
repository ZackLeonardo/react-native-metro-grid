'use strict';

var React = require('react-native');

var {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  PropTypes,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  NavigatorIOS,
} = React;

var winWidth = Dimensions.get('window').width;

var imgItem = React.createClass({
  propTypes: {
    style:    PropTypes.object,
    image:         PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      style: {
        width: 300,
        height: 150,
        borderWidth: 1,
      },
    };
  },

  render: function () {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    };
    return (
      <TouchableElement
        onPress={this.props.onPress}
        >
        <Image
          style={this.props.style}
          source={{uri: this.props.image}}
          />
      </TouchableElement>
    );
  },

});


module.exports = imgItem;
