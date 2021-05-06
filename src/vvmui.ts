/*
 * @Author: Fone`峰
 * @Date: 2021-04-02 12:17:01
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-06 13:35:55
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { version } from '../package.json';
import { App } from 'vue';
import Button from './packages/button/index.vue';
import Card from './packages/card/index.vue';
import Icon from './packages/icon/index.vue';
import CellGroup from './packages/cell-group/index.vue';
import Cell from './packages/cell/index.vue';
import Toast from './packages/toast/index';
import Input from './packages/input/index.vue';
import Form from './packages/form/index.vue';
import FormItem from './packages/form-item/index.vue';
import ActionSheet from './packages/action-sheet/index';
import Popup from './packages/popup/index.vue';
import Radio from './packages/radio/index.vue';
import RadioGroup from './packages/radio-group/index.vue';
import Dialog from './packages/dialog';
import ScrollCard from './packages/scroll-card/index.vue';
import Checkbox from './packages/checkbox/index.vue';
import CheckboxGroup from './packages/checkbox-group/index.vue';
import Copy from './packages/copy';

// console.log(Dialog);
// Dialog.info();

import { setConfig } from './packages/config';

function install(app: App, options: any) {
  app.config.globalProperties.$VVMUI = options;
  app.config.globalProperties.$ActionSheet = ActionSheet;
  app.config.globalProperties.$Dialog = Dialog;
  setConfig(options);
  app.directive('copy', Copy);

  const packages = [
    ScrollCard,
    Dialog,
    Radio,
    RadioGroup,
    Button,
    Card,
    Icon,
    CellGroup,
    Cell,
    Toast,
    Input,
    Form,
    FormItem,
    ActionSheet,
    Popup,
    Checkbox,
    CheckboxGroup
  ];
  packages.forEach((item: any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}

export {
  ScrollCard,
  Dialog,
  RadioGroup,
  Button,
  Card,
  Icon,
  CellGroup,
  Cell,
  Toast,
  Input,
  FormItem,
  ActionSheet,
  Popup,
  Checkbox,
  CheckboxGroup,
  Copy
};
export * from './packages/utils';
export default { install, version: `vvmui-3x-${version}` };

import '@/style.scss';
