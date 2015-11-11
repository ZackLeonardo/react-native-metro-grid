'use strict';

var React = require('react-native');

var {
  Modal,
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

var cellModalInfo = React.createClass({
  render: function(){
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    };
    var modalBackgroundStyle = {
      backgroundColor: this.props.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    };
    var innerContainerTransparentStyle = this.props.transparent
      ? {backgroundColor: '#fff', padding: 20}
      : null;
    return (
        <Modal
          animated={this.props.animated}
          transparent={this.props.transparent}
          visible={this.props.modalVisible}>
          <View style={[styles.container, modalBackgroundStyle]}>
            <TouchableElement
              onPress={this.props.onPress}
              >
              <Image style={imageStyle} source={{uri:this.props.image}}/>
            </TouchableElement>
          </View>
        </Modal>
    );
  },
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

module.exports = cellModalInfo;
