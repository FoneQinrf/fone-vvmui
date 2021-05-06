/*
 * @Author: Fone`峰
 * @Date: 2021-04-20 10:48:50
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-28 17:06:41
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts', 'tsx'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.vue$': 'vue-jest', // vue 文件用 vue-jest 转换
    '^.+\\.ts$': 'ts-jest' // ts 文件用 ts-jest 转换
  },
  // 匹配 __tests__ 目录下的 .js/.ts 文件 或其他目录下的 xx.test.js/ts xx.spec.js/ts
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$',
  collectCoverage: true
};
