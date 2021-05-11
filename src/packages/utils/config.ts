/*
 * @Author: Fone`峰
 * @Date: 2021-04-22 17:53:16
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-10 16:30:15
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { isArray, isPlainObject } from './is-config';
import { cloneDeep, forEach } from 'lodash';

/*****************Array***********************/
/**
 * find
 * @param a
 * @param b
 * @param c
 * @returns
 */
export const find = (a: any, b: any, c: string = '') => {
  // if (!isArray(a) || !isArray(b)) {
  //   return console.error('数据非数组');
  // }
  if (c) {
    return a.find((ele: any) => ele[c] === b) || {};
  }
  return a.find((ele: any) => ele === b);
};


/**
 * sort
 * @param arr
 * @param order  === true 倒叙
 * @returns
 */
export const sort = (arr: any, order: boolean = true) => {
  if (!isArray(arr)) {
    return console.error('数据非数组');
  }
  if (order) {
    return arr.sort((a: any, b: any) => b - a);
  }
  return arr.sort((a: any, b: any) => a - b);
};

/**
 * 字符串转数组
 * @param arr
 * @param str
 * @returns
 */
export const split = (arr: string, str: string = ',') => {
  if (arr) {
    return arr.split(str);
  }
  return '';
};

/**
 * 数组转字符串
 * @param arr
 * @param str
 */
export const join = (arr: any, str: string = ',') => {
  if (!isArray(arr)) {
    return console.warn('传入数据非数组');
  }
  return arr.join(str);
};

/**
 * concat
 * @param arr
 * @returns
 */
export const concat = (...arr: any) => {
  return [].concat(...arr);
};

/**
 * remove Array
 * @param arr
 * @param item
 * @returns
 */
export const remove = (arr: any, item: any) => {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
};

/**
 * 数组乱序
 * @param arr
 */
export const shuffle = (arr: Array<any>) => {
  if (!isArray(arr)) {
    return console.error('传入非数组');
  }
  let m = arr.length;
  if (m > 1) {
    const index = Math.floor(Math.random() * m--);
    [arr[m], arr[index]] = [arr[index], arr[m]];
  }
  return arr;
};

/**
 * includes
 * @param arr
 * @param item
 * @returns
 */
export const includes = (arr: Array<any>, item: any) => {
  if (!isArray(arr)) {
    return console.error('传入非数组');
  }
  return arr.includes(item);
};

/*********************Object**************************/
/**
 * Object assign
 * @param obj
 * @returns
 */
export const createAssign = (...obj: any) => {
  return Object.assign({}, ...obj);
};

/**
 * Object.keys
 * @param obj
 * @returns
 */
export const Keys = (obj: object | Array<any>) => {
  if (isArray(obj) || isPlainObject(obj)) {
    return Object.keys(obj);
  }
};

/**
 * 防抖
 * @param fn
 * @param wait
 * @param immediate  === false（立即执行）  ===true wait时间内只执行一次
 */
export function debounce(
  fn: Function,
  wait: number,
  immediate: boolean = true
) {
  let timeout: any;
  return function (this: any) {
    const ctx = this;
    const args = [...arguments];
    if (timeout) {
      clearTimeout(timeout);
    }
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) {
        fn.apply(ctx, args);
      }
    } else {
      timeout = setTimeout(() => {
        fn.apply(ctx, args);
      }, wait);
    }
  };
}

/**
 * 节流
 * @param fn
 * @param wait
 * @param type === 1  定时器方式  === 2 时间戳方式
 */
export function throttle(fn: Function, wait: number = 1000, type: number = 1) {
  let timeout: any;
  let previous = 0;
  return function (this: any) {
    const ctx = this;
    const args = [...arguments];
    if (type === 1) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          fn.apply(ctx, args);
        }, wait);
      }
    }
    if (type === 2) {
      const now = Date.now();
      if (now - previous > wait) {
        fn.apply(ctx, args);
        previous = wait;
      }
    }
  };
}

/**
 * 深拷贝
 * @param opts
 * @param type  1:乞丐版 没法拷贝函数正则等
 * @returns
 */
export const deepClone = (opts: object | Array<any>, type: number = 1) => {
  if (type === 1) {
    return JSON.parse(JSON.stringify(opts));
  }
  return cloneDeep(opts);
};
