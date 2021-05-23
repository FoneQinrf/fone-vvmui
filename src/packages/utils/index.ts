/*
 * @Author: Fone`峰
 * @Date: 2021-04-20 16:07:32
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-21 11:31:56
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import * as isConfig from './is-config';
import * as config from './config';
import * as scroll from './scroll';
import DateConfig from './date-config';

export default {
  ...isConfig,
  ...config,
  ...scroll,
  DateConfig
};

export * from './is-config';
export * from './config';
export * from './scroll';
export * from './date-config';
