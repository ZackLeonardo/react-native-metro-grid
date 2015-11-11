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

var imageInfo = require('./cellInfo');
var ImgItem = require('./imgItem');
var CellModalInfo = require('./cellModalInfo');

var winWidth = Dimensions.get('window').width;

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
      animated: true,
      modalVisible: false,
      transparent: false,
      modalImg: '',
    };
  },

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  },

  _toggleAnimated() {
    this.setState({animated: !this.state.animated});
  },

  _toggleTransparent() {
    this.setState({transparent: !this.state.transparent});
  },

  render: function () {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    };

    var content = null;
    if (this.props.transStyle == "modal"){
      content = <CellModalInfo
        transparent={this.state.transparent}
        animated={this.state.animated}
        modalVisible={this.state.modalVisible}
        onPress={this._setModalVisible.bind(this, false)}
        image={this.state.modalImg}
        />
    }

    switch(this.props.item.type)
    {
    case 1:
      return (
        <View style={styles.listCellR}>
          {content}
          <ImgItem
            onPress={()=> this.selectImg(this.props.item.row[0])}
            style={this.state.img1Styles}
            image={this.props.item.row[0]}
            />
        </View>
      );
      break;
    case 11:
      return (
        <View style={styles.listCellR}>
          {content}
          {
            this.props.item.row.map((item) => {
              return (
                <ImgItem
                  onPress={()=> this.selectImg(item)}
                  style={this.state.img11Styles}
                  image={item}
                  />
              );
            })
          }
        </View>
      );
      break;
    case 22:
      return (
        <View style={styles.listCellR}>
          {content}
          {
            this.props.item.row.map((item) => {
              return (
                <ImgItem
                  onPress={()=> this.selectImg(item)}
                  style={this.state.img2Styles}
                  image={item}
                  />
              );
            })
          }
        </View>
      );
      break;
    case 12:
      return (
        <View style={styles.listCellR}>
          {content}
          <ImgItem
            onPress={()=> this.selectImg(this.props.item.row[0])}
            style={this.state.img2Styles}
            image={this.props.item.row[0]}
            />
          <View style={styles.listCellC}>
            {
              this.props.item.row[1].map((item) => {
                return (
                  <ImgItem
                    onPress={()=> this.selectImg(item)}
                    style={this.state.img11Styles}
                    image={item}
                    />
                );
              })
            }
          </View>
        </View>

      );
      break;
    case 21:
      return (
        <View style={styles.listCellR}>
          <View style={styles.listCellC}>
            {content}
            {
              this.props.item.row[0].map((item) => {
                return (
                  <ImgItem
                    onPress={()=> this.selectImg(item)}
                    style={this.state.img11Styles}
                    image={item}
                    />
                );
              })
            }
          </View>
          <ImgItem
            onPress={()=> this.selectImg(this.props.item.row[1])}
            style={this.state.img2Styles}
            image={this.props.item.row[1]}
            />
        </View>

      );
      break;
    default:
      return (
        <View style={styles.listCellR}>
          <Text>There is something wrong!</Text>
        </View>
      );
    }

  },

  selectImg: function (image: Object) {
    if (this.props.transStyle == "navigator"){
      this.props.navigator.push({
        title: image,
        component: imageInfo,
        passProps: {image},
      });
    }else{
      this.state.modalImg = image;
      this._setModalVisible(true);
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
