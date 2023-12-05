import { 
    f_s_version_node, 
    f_o_output_from_node_command,
    f_a_n_u8__stdout__from_node_command,
    f_s_from_node_command,
    f_s_function_body
} from "https://deno.land/x/node_command@0.3/mod.js"

let a_s_name_prop = JSON.parse(
    await f_s_from_node_command(
        f_s_function_body(

            ()=>{
                let o = require('robotjs');
                console.log(JSON.stringify(Object.keys(o)))
            }
        )
    )
)
console.log(a_s_name_prop)

let o_robot_js = {};

for(let s_prop of a_s_name_prop){
    o_robot_js[s_prop] = async function(){
        return await f_s_from_node_command(
            `
            let a_v_arg = [${
                Array.from(arguments)
                .map(v=>{
                    if(typeof v == 'string'){
                        return `'${v}'`
                    }
                    return v
                })
                .join(',')
            }]
            let o = require('robotjs');
            console.log(JSON.stringify(o['${s_prop}'](...a_v_arg)))
            `
        )
    }
}



export {
    o_robot_js
}
// window.setInterval(async function(){
//     let o_trn_mouse = JSON.parse(
//         await f_s_from_node_command(
//             ()=>{
//                 let o = require('robotjs');
//                 console.log(JSON.stringify(o.getMousePos()))
//             }
//         )
//     )
//     console.log(o_trn_mouse)
// },100)

