# react-native-metro-grid
metro UI grid for react-native

if you want use it more Intelligently, you should pretreat the images by Native methods. Just reload the json data by caculating width and height of the image.

## Installation

```
npm install --save react-native-metro-grid
```

**This module requires React Native 0.11 or later**

## Usage

example: see github Example.
https://github.com/ZackLeonardo/react-native-metro-grid/tree/master/Example

pay attention: this module is closely associated with the props json data.
for example:
```js
{
  "rowItems": [
    {
      "type": 1,
      "row": ["cdr"],
    },{
      "type": 11,
      "row": ["one", "two"],
    },{
      "type": 12,
      "row": ["fourZero",["one", "two"]],
    },{
      "type": 22,
      "row": ["fourZero", "fourZero"],
    },{
      "type": 21,
      "row": [["one", "two"],"fourZero"],
    }
  ],
}

```

```js
var imgData = require('./imgData.json');
var Metro = require('react-native-metro-grid');

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

```

### Navigator setup/ios support

For android support you must pass a reference to a `NavigatorIOS` since it does not yet have the `Modal` component and is not on the official todo list. See the `Example` project for a complete example.

```
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
```

## Demo

![Demo](https://raw.githubusercontent.com/ZackLeonardo/react-native-metro-grid/master/metroUI.gif)

## Example

Check full example in the `Example` folder.

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Joel Arvidsson
