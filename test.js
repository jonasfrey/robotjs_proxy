
//readme.md:start
//md: # robotjs from deno
//md: ## how it works
//md: 1. uses the https://deno.land/x/node_command module!

//md: ## requirements
//md: - node
//md: - npm 
//md: - node module 'robotjs'

//md: ## usage
//md: import
import {
    o_robot_js
} from "./mod.js"

//md: ### available functions (can change depending on node module version)
//md: #### documentation here http://robotjs.io/docs/syntax

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
//md: call a robotjs function

console.log(o_robot_js);
await o_robot_js.moveMouseSmooth(1200,1200)
console.log(await o_robot_js.getXDisplayName())
console.log(await o_robot_js.typeString('hello lol'))