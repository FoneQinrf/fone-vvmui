/*
 * @Author: Fone`峰
 * @Date: 2021-04-26 14:17:14
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-26 14:33:31
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

/**
 * get scrollHeight
 * @param ref
 * @returns
 */
export const getScrollHeight = (ref: any) => {
  return ref.offsetHeight;
};

/**
 * 滑动视窗的高度
 * @param ref
 */
export const getWindowHeight = (ref: any) => {
  let windowHeight = 0;
  if (ref) {
    windowHeight = ref.clientHeight;
  }
  return windowHeight;
};

/**
 * get scrollTop
 * @param ref
 */
export const getScrollTop = (ref: any) => {
  return ref.scrollTop;
};
