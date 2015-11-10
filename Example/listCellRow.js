'use strict';

var React = require('react-native');

var {
  Image,
  StyleSheet,
  View,
  Text,
} = React;

var listCellRow = React.createClass({
  render: function () {
    if (this.props.rowNum == 1){
      return (
        <View style={styles.listCell}>
          <Image
            style={styles.image}
            source={{uri: 'cdr'}}
            />
        </View>
      );
    }else if (this.props.rowNum == 2) {
      return (
        <View style={styles.listCell}>
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
    }else{
      return (
        <View style={styles.listCell}>
          <Text>this is something wrong</Text>
        </View>
      );
    }

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
    width: 100,
    height: 100,
  },
});

module.exports = listCellRow;
