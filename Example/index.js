/**
 * Sample React Native metroUI App
 *
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  NavigatorIOS,
} = React;

var imgData = require('./imgData.json');
var Metro = require('./metro');

var metroUI = React.createClass({
  render: function () {
    return (
      <Metro
        data={imgData.rowItems}
        navigator={this.props.navigator}
        />
    );
  },

});

var AwesomeProject = React.createClass({
  render: function () {
    return (
      <NavigatorIOS
        style={styles.navigator}
        navigationBarHidden={true}
        initialRoute={{
          title: '',
          component: metroUI,
        }}
      />
    );
  }
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
