/*
 * @Author: Fone`峰
 * @Date: 2021-05-21 10:30:48
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-25 10:49:51
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { App } from 'vue';
declare class UIComponent {
  static install(vue: App): void;
}
declare class ToastComponent {
  static info(msg?: string, opts?: object): void;
  static success(msg?: string, opts?: object): void;
  static error(msg?: string, opts?: object): void;
  static warning(msg?: string, opts?: object): void;
  static loading(msg?: string, opts?: object): void;
  static close(): void;
}
declare class DialogComponent extends UIComponent {
  static alert(opts: object): void;
}
declare class ActionSheetCompnent extends UIComponent {
  static show(opts: object): void;
  static cancel(): void;
}
declare class ActionSheet extends ActionSheetCompnent {}
declare class Button extends UIComponent {}
declare class Card extends UIComponent {}
declare class CellGroup extends UIComponent {}
declare class Cell extends UIComponent {}
declare class CheckboxGroup extends UIComponent {}
declare class Checkbox extends UIComponent {}
declare class CollapseGroup extends UIComponent {}
declare class Collapse extends UIComponent {}
declare class Config extends UIComponent {}
declare class Copy extends UIComponent {}
declare class Dialog extends DialogComponent {}
declare class FormItem extends UIComponent {}
declare class Form extends UIComponent {}
declare class Icon extends UIComponent {}
declare class Input extends UIComponent {}
declare class Popup extends UIComponent {}
declare class RadioGroup extends UIComponent {}
declare class Radio extends UIComponent {}
declare class ScrollCard extends UIComponent {}
declare class Switch extends UIComponent {}
declare class Toast extends ToastComponent {}
declare class Picker extends UIComponent {}
declare class Utils {
  static find(a: [], b: [], c?: string): void;
  static sort(a: [], b?: boolean): void;
  static split(a: [], b?: string): void;
  static join(a: [], b?: string): void;
  static concat(...arr: []): void;
  static remove(a: [], b: any): void;
  static shuffle(a: []): void;
  static includes(a: Array<any>, b: any): void;
  static createAssign(...obj: any): void;
  static Keys(obj: object | Array<any>): void;
  static debounce(fn: Function, wait: number, immediate?: boolean): void;
  static throttle(fn: Function, wait?: number, type?: number): void;
  static getScrollHeight(a: any): void;
  static getWindowHeight(a: any): void;
  static getScrollTop(a: any): void;
  static DateConfig: any;
}
export interface InstallationOptions {
  locale?: any;
  lang?: any;
}
declare function install(app: App, options?: InstallationOptions): void;
export {
  ActionSheet,
  Button,
  Card,
  CellGroup,
  Cell,
  CheckboxGroup,
  Checkbox,
  CollapseGroup,
  Collapse,
  Config,
  Copy,
  Dialog,
  FormItem,
  Form,
  Icon,
  Input,
  Popup,
  RadioGroup,
  Radio,
  ScrollCard,
  Switch,
  Toast,
  Utils,
  Picker
};
declare const _default: {
  install: typeof install;
  version: string;
};
export default _default;
