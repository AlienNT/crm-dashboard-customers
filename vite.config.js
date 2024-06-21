import {defineConfig} from "vite";
import pugPlugin from "vite-plugin-pug";

import autoprefixer from "autoprefixer";

import customers from "./src/store/customers.js";
import navigation from "./src/store/navigation.js";
import user from "./src/store/user.js";

const options = {localImports: true}
const locals = {
    customers,
    navigation,
    user
}

export default defineConfig(({command}) => {
    const base = command === 'build' ? '/crm-dashboard-customers/' : '/';
    return {
        plugins: [pugPlugin(options, locals)],
        css: {
            postcss: {
                plugins: [autoprefixer]
            }
        },
        base
    }
})