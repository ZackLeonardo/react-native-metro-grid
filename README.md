# react-native-metro-grid
metro UI grid for react-native

## Installation

```
npm install --save react-native-metro-grid
```

**This module requires React Native 0.11 or later**

## Usage

example: see github Example.
https://github.com/ZackLeonardo/react-native-metro-grid/tree/master/Example

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

![Demo]

## Example

Check full example in the `Example` folder.

## License

[MIT License](http://opensource.org/licenses/mit-license.html). © Joel Arvidsson
