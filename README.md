# ssp-ui
ReactJS component library with crisp, elegant and easy-to-use components.
Focus is more towards(but not limited to) Metro Employee Facing apps UX guidelines.<br/><br/>
ssp-ui extends [material-ui](https://github.com/callemall/material-ui) and applies Metro UX over it. 

## Code Composition
ReactJS, MaterialUI, bootstrap and lots of love :) !!

## Dependencies
- ssp-ui wraps [material-ui](https://github.com/callemall/material-ui) and adds toppings over it<br/>
- ssp-ui uses [formsy-react](https://github.com/christianalfoni/formsy-react) for form validations <br/>
- ssp-ui uses react-widgets for datepicker

## Installation
ssp-ui is directly installed from metro gitlab. Here's what you need to do:
1. Add ssp-ui dependency in your package json.
```js
    "ssp-ui": "git+https://git.metrosystems.net/lakshaya.sood/ssp-ui.git"
```
2. Install other dependencies
```bash
    npm i react-tap-event-plugin react-widgets material-ui --save
```
3. Setup React-Tap-Event-Plugin

Some components use
[react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin) to
listen for touch events because onClick is not fast enough
_This dependency is temporary and will eventually go away._ Until then,
be sure to inject this plugin at the start of your app.

```js
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
```

## Develop
If you'd like to work on it, run ssp-ui locally by

```bash
    git clone https://git.metrosystems.net/lakshaya.sood/ssp-ui.git
    npm i
    npm start
```

## Create dist

```bash
    npm run build
```
