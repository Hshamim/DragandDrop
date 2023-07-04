import { resolve } from 'path';
import { defineConfig } from "vite";

export default defineConfig({
build: {
    lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: resolve(__dirname, 'main.js'),
        name: 'MyLib',
        // the proper extensions will be added
        fileName: 'my-lib',
},
libcss: {
    // Could also be a dictionary or array of multiple entry points
    entry: resolve(__dirname, 'style.css'),
    name: 'build_style',
    // the proper extensions will be added
    fileName: 'my-lib',
},
lib:{
    entry: resolve(__dirname, 'index.html'),
    name: 'index',
    // the proper extensions will be added
    fileName: 'my-lib',
}

}
});