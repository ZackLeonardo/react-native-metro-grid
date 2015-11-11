'use strict';

var React = require('react-native');

var {
  Image,
  PropTypes,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} = React;

var imgItem = React.createClass({
  propTypes: {
    style:    PropTypes.object,
    image:    PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      style: {
        width: 300,
        height: 150,
        borderWidth: 1,
      },
      image: ""
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
