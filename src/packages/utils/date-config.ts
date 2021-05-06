/*
 * @Author: Fone`峰
 * @Date: 2021-04-29 13:48:41
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-29 13:58:24
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
export default class DateConfig {
  private date: Date = new Date();

  getFullYear() {
    return this.date.getFullYear();
  }

  getMonth() {
    return this.date.getMonth() + 1;
  }

  getDate() {
    return this.date.getDate();
  }

  get() {
    return this.date;
  }
}
