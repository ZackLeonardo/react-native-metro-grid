'use strict';

var React = require('react-native');

var {
  Image,
  StyleSheet,
  View,
} = React;

var listCellRow1 = React.createClass({
  render: function () {
    return (
      <View style={styles.listCell}>
        <Image
          style={styles.image}
          source={{uri: 'cdr'}}
          />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  listCell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  image: {
    backgroundColor: 'red',
    width: 200,
    height: 100,
  },
});

module.exports = listCellRow1;
