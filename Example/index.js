/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} = React;

var imgData = require('./imgData.json');
var ListCellRow = require('./listCellRow');

var AwesomeProject = React.createClass({
  getInitialState: function() {
    // alert("getInitialState");
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
    return {
      dataSource: this.getDataSource(imgData.rowItems),
    };
  },

  // componentWillMount: function () {
  //   alert("componentWillMount");
  // },

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
        item={listItem}
      />
    );
  },

  getDataSource: function(items: Array<any>): ListView.DataSource {
    return this.state.dataSource.cloneWithRows(items);
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  list: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 10,
  },
  item: {
      margin: 10,
  },

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
