<!-- {"s_msg":"this file was automatically generated","s_by":"f_generate_markdown.module.js","s_ts_created":"Tue Dec 05 2023 02:08:50 GMT+0100 (Central European Standard Time)","n_ts_created":1701738530358} -->
# robotjs from deno
## how it works
1. uses the https://deno.land/x/node_command module!
```javascript

```
## requirements
- node
- npm
- node module 'robotjs'
```javascript

```
## usage
import
```javascript
import {
    o_robot_js
} from "./mod.js"

```
### available functions (can change depending on node module version)
#### documentation here http://robotjs.io/docs/syntax
```javascript

// "dragMouse",         "updateScreenMetrics",
// "moveMouse",         "moveMouseSmooth",
// "getMousePos",       "mouseClick",
// "mouseToggle",       "scrollMouse",
// "setMouseDelay",     "keyTap",
// "keyToggle",         "typeString",
// "typeStringDelayed", "setKeyboardDelay",
// "getPixelColor",     "getScreenSize",
// "captureScreen",     "getColor",
// "getXDisplayName",   "setXDisplayName",
// "screen"
```
call a robotjs function
```javascript

console.log(o_robot_js);
await o_robot_js.moveMouseSmooth(1200,1200)
console.log(await o_robot_js.getXDisplayName())
console.log(await o_robot_js.typeString('hello lol'))
```