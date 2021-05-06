/*
 * @Author: Fone`峰
 * @Date: 2021-04-06 16:13:40
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-16 17:28:43
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
const { resolve } = require("path");
const fs = require('fs-extra');
const { sync } = require("glob");

/**
 *mkdir  types
 */
const components = sync(resolve(__dirname + '/../src/packages/**/index.?(ts|vue|tsx)'), { nodir: false });
let INPORT = `import { App } from 'vue';
declare class UIComponent {
    static install(vue: App): void;
}`;

const packages = []
components.forEach(element => {
    const name = element.match(/\/packages\/(\S*)\/index/)[1];
    const array = name.indexOf("-") >= 0 ? name.split("-") : [name];
    let componentName = "";
    array.forEach(element => {
        componentName += element.charAt(0).toUpperCase() + element.slice(1);
    });
    packages.push(componentName);
    INPORT += `\ndeclare class ${componentName} extends UIComponent { }`
});

let INSTALL = `\nexport interface InstallationOptions {
    locale?: any;
    lang?: any;
}
declare function install(app: App, options?: InstallationOptions): void;
export { ${packages.join(',')}};
declare const _default: {
    install: typeof install;
    version: string;
};
export default _default;`

fs.outputFile(
    resolve(__dirname, '../lib/index.d.ts'),
    INPORT + INSTALL,
    'utf8'
);
