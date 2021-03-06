/*
 * @Author: Fone`峰
 * @Date: 2021-04-02 12:17:01
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-14 12:03:36
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
// @ts-ignore
import { version } from '../package.json';
import { App } from 'vue';
import Button from './packages/button/index.vue';
import Card from './packages/card/index.vue';
import Icon from './packages/icon/index.vue';
import CellGroup from './packages/cell-group/index.vue';
import Cell from './packages/cell/index.vue';
import Toast from './packages/toast';
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
import Copy from '@/packages/copy';
import Switch from './packages/switch/index.vue';
import Utils from '@/packages/utils';
import Picker from './packages/picker/index.vue';
import PickerGroup from './packages/picker-group';
import Rate from './packages/rate/index.vue';
import Notify from './packages/notify';

// console.log(Dialog);
// Dialog.info();

import { setConfig } from '@/packages/config';

function install(app: App, options: any) {
  app.config.globalProperties.$VVMUI = options;
  app.config.globalProperties.$ActionSheet = ActionSheet;
  app.config.globalProperties.$Dialog = Dialog;
  app.config.globalProperties.$PickerGroup = PickerGroup;
  app.config.globalProperties.$Notify = Notify;
  app.config.globalProperties.$Toast = Toast;
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
    Input,
    Form,
    FormItem,
    ActionSheet,
    Popup,
    Checkbox,
    CheckboxGroup,
    Switch,
    Picker,
    PickerGroup,
    Rate
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
  Copy,
  Switch,
  Utils,
  Picker,
  PickerGroup,
  Rate,
  Notify
};

export default { install, version: `vvmui-3x-${version}` };

import '@/style.scss';
