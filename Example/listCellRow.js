'use strict';

var React = require('react-native');

var {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  PropTypes,
} = React;

var winWidth = Dimensions.get('window').width;
// var imgHeight = 150;

// var img1Styles = {
//   width: winWidth - 20,
//   height: this.props.imgHeight,
//   borderWidth: 2,
// };
//
// var img11Styles = {
//   width: (winWidth - 20)/2,
//   height: this.props.imgHeight,
//   borderWidth: 2,
// };
//
// var img2Styles = {
//   width: (winWidth - 20)/2,
//   height: this.props.imgHeight * 2,
//   borderWidth: 2,
// };

var listCellRow = React.createClass({
  propTypes: {
    imgHeight:    PropTypes.number,
    item:         PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      imgHeight: 150,
    };
  },

  getInitialState: function() {
    this.state = {
      img1Styles: {},
      img11Styles: {},
      img2Styles: {},
    };
    return {
      img1Styles : {
        width: winWidth - 20,
        height: this.props.imgHeight,
        borderWidth: 1,
      },
      img11Styles : {
        width: (winWidth - 20)/2,
        height: this.props.imgHeight,
        borderWidth: 1,
      },
      img2Styles: {
        width: (winWidth - 20)/2,
        height: this.props.imgHeight * 2,
        borderWidth: 1,
      },
    };
  },

  render: function () {
    switch(this.props.item.type)
    {
    case 1:
      return (
        <View style={styles.listCellR}>
          <Image
            style={this.state.img1Styles}
            source={{uri: this.props.item.row[0]}}
          />
        </View>
      );
      break;
    case 11:
      return (
        <View style={styles.listCellR}>
          <Image
            style={this.state.img11Styles}
            source={{uri: this.props.item.row[0]}}
            />
          <Image
            style={this.state.img11Styles}
            source={{uri: this.props.item.row[1]}}
            />
        </View>
      );
      break;
    case 22:
      return (
        <View style={styles.listCellR}>
          <Image
            style={this.state.img2Styles}
            source={{uri: this.props.item.row[0]}}
            />
          <Image
            style={this.state.img2Styles}
            source={{uri: this.props.item.row[1]}}
            />
        </View>
      );
      break;
    case 12:
      return (
        <View style={styles.listCellR}>
          <Image
            style={this.state.img2Styles}
            source={{uri: this.props.item.row[0]}}
            />
          <View style={styles.listCellC}>
            <Image
              style={this.state.img11Styles}
              source={{uri: this.props.item.row[1]}}
              />
            <Image
              style={this.state.img11Styles}
              source={{uri: this.props.item.row[2]}}
              />
          </View>
        </View>

      );
      break;
    case 21:
      return (
        <View style={styles.listCellR}>
          <View style={styles.listCellC}>
            <Image
              style={this.state.img11Styles}
              source={{uri: this.props.item.row[0]}}
              />
            <Image
              style={this.state.img11Styles}
              source={{uri: this.props.item.row[1]}}
              />
          </View>
          <Image
            style={this.state.img2Styles}
            source={{uri: this.props.item.row[2]}}
            />
        </View>

      );
      break;
    default:
      return (
        <View style={styles.listCellR}>
          <Text>this is something wrong</Text>
        </View>
      );
    }

  },
});

var styles = StyleSheet.create({
  listCellR: {
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
  listCellC: {
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  image: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
});

module.exports = listCellRow;
