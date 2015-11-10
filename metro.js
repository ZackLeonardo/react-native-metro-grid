/**
 * Sample React Native metroUI
 *
 */
'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ListView,
  NavigatorIOS,
} = React;

var ListCellRow = require('./listCellRow');

var metro = React.createClass({
  getInitialState: function() {
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
    return {
      dataSource: this.getDataSource(this.props.data),
    };
  },

  render: function() {
    var content = <ListView
      contentContainerStyle={styles.list}
      ref="listview"
      dataSource={this.state.dataSource}
      renderRow={this.renderRow}
    />;
    return (
      <View style={styles.container}>
        {content}
      </View>
    );
  },

  renderRow: function (
    listItem: Object,
    sectionID: number | string,
    rowID: number | string,
    highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  ) {
    return (
      <ListCellRow
        imgHeight={150}
        item={listItem}
        navigator={this.props.navigator}
      />
    );
  },

  getDataSource: function(items: Array<any>): ListView.DataSource {
    return this.state.dataSource.cloneWithRows(items);
  },

});

var styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 30,
  },
  item: {
      margin: 10,
  },

});

module.exports = metro;
