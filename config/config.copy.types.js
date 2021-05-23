/*
 * @Author: Fone`峰
 * @Date: 2021-04-06 16:13:40
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-21 10:28:07
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
const { resolve } = require("path");
const fs = require('fs-extra');
const { sync } = require("glob");

/**
 * copy  scss
 */
try {
    fs.copy(
        resolve(__dirname + '/../src/index.d.ts'),
        resolve(__dirname + '/../lib/index.d.ts')
    )
    console.log("types---------------copy");
} catch (error) {
    throw error
}