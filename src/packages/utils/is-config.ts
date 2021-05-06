/*
 * @Author: Fone`峰
 * @Date: 2021-04-22 17:48:22
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-25 13:46:57
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
const _toString = Object.prototype.toString;

/**
 *
 * @param v
 * @returns
 */
export const isUndef = (v: any) => {
  return v === undefined || v === null;
};

/**
 *
 * @param v
 * @returns
 */
export const isDef = (v: any) => {
  return v !== undefined && v !== null;
};

/**
 *
 * @param obj
 * @returns
 */
export const isObject = (obj: any) => {
  return obj !== null && typeof obj === 'object';
};

/**
 *
 * @param obj
 * @returns
 */
export const isArray = (obj: any) => {
  return _toString.call(obj) === '[object Array]';
};

/**
 *
 * @param value
 * @returns
 */
export const toRawType = (value: any) => {
  return _toString.call(value).slice(8, -1);
};

/**
 *
 * @param obj
 * @returns
 */
export const isPlainObject = (obj: any) => {
  return _toString.call(obj) === '[object Object]';
};

/**
 *
 * @param v
 * @returns
 */
export const isRegExp = (v: any) => {
  return _toString.call(v) === '[object RegExp]';
};

/**
 *
 * @param val
 * @returns
 */
export const isPromise = (val: any) => {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  );
};
