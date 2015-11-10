'use strict';

var React = require('react-native');

var {
  Image,
  StyleSheet,
  View,
} = React;

var listCellRow2 = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: 'one'}}
          />
        <Image
          style={styles.image}
          source={{uri: 'two'}}
          />
      </View>

    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  image: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
});

module.exports = listCellRow2;
