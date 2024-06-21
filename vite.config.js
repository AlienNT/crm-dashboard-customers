import {defineConfig} from "vite";
import pugPlugin from "vite-plugin-pug";

import autoprefixer from "autoprefixer";

import customers from "./src/store/customers.js";
import navigation from "./src/store/navigation.js";
import user from "./src/store/user.js";

const options = {localImports: true}
const locals = {
    name: 'Test Name',
    customers,
    navigation,
    user
}

export default defineConfig(({mode, command} )=> {

 return {
     plugins: [pugPlugin(options, locals)],
     css: {
         postcss: {
             plugins: [autoprefixer]
         }
     }
 }
})