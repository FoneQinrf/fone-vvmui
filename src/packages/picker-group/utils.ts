/*
 * @Author: Fone`峰
 * @Date: 2021-05-31 13:34:01
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-01 10:11:08
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

/**
 * 树状数组深度
 * @param arr
 * @returns
 */
export const getCount = (arr: any = []) => {
  let i = 0;
  function count(list: any = []) {
    if (list.length > 0) {
      i += 1;
      count(list[0].children);
    }
  }
  count(arr);
  return i;
};

/**
 * 获取初始化的下标
 * @param arr
 * @returns
 */
export const getIndex = (arr: any = []) => {
  const index = [];
  if (arr.length > 0) {
    const count = getCount(arr);
    for (let i = 0; i < count; i++) {
      index.push(0);
    }
  }
  return index;
};

/**
 * 根据下标计算展示数据
 * @param arr
 * @param index
 * @param count
 * @returns
 */
export const getColumns = (arr: any = [], index: number, count: any = []) => {
  const res: any = [];
  function array(list: any = [], i: number) {
    const x = count[i - 1];
    if (list[x] && list[x].children) {
      res.push(list[x].children);
      array(list[x].children, (i += 1));
    }
  }
  //下标0不需要递归
  res.push(arr);
  array(arr, 1);
  return res[index];
};

/**
 * 选中数据的label数组
 * @param arr
 * @returns
 */
export const getChooseValue = (arr: any = []) => {
  const choose: any = [];
  arr.forEach((element: any) => {
    choose.push(element.label);
  });
  return choose;
};

/**
 * 计算选中的数组对象
 * @param arr
 * @param count
 * @returns
 */
export const getChooseArr = (arr: any = [], count: any = []) => {
  return arr.map((item: any, i: number) => item[count[i]]);
};
