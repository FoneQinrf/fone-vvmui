/*
 * @Author: Fone`峰
 * @Date: 2021-04-09 11:20:28
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-25 14:05:31
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { App, defineComponent, createVNode, render } from 'vue';
import Toast from './index.vue';
import { createAssign } from '../utils';

const component = defineComponent(Toast);
let AppToast: any = null;
let element: any = null;

/**
 * 移除toast
 */
const removeToast = () => {
  if (AppToast && element) {
    document.body.removeChild(element);
    AppToast.close();
    AppToast = null;
    element = null;
  }
};

/**
 * 创建toast
 * @param opts
 * @returns
 */
const creatToast = (opts: any) => {
  const container = document.createElement('div');
  container.className = opts.class;
  const instance: any = createVNode(component, opts);
  render(instance, container);
  element = container;
  AppToast = instance.component.ctx;
  document.body.appendChild(container);
  AppToast.show();
  return AppToast;
};

const ssr = () => {
  if (window) {
    return;
  }
  console.error('不能在服务端使用window');
};

const options = {
  class: 'vvm-toast'
};

export const model = {
  info: (msg: string = '提示消息', opts: Object = {}) => {
    ssr();
    removeToast();
    return creatToast(createAssign(options, opts, { msg, type: 'info' }));
  },
  success: (msg: string = '成功', opts: Object = {}) => {
    ssr();
    removeToast();
    return creatToast(createAssign(options, opts, { msg, type: 'success' }));
  },
  error: (msg: string = '失败', opts: Object = {}) => {
    ssr();
    removeToast();
    return creatToast(createAssign(options, opts, { msg, type: 'error' }));
  },
  warning: (msg: string = '警告', opts: Object = {}) => {
    ssr();
    removeToast();
    return creatToast(createAssign(options, opts, { msg, type: 'warning' }));
  },
  loading: (msg: string = '', opts: Object = {}) => {
    ssr();
    removeToast();
    return creatToast(createAssign(options, opts, { msg, type: 'loading' }));
  },
  close: () => {
    ssr();
    removeToast();
  }
};

export default {
  name: 'Toast',
  install(app: App): void {
    app.config.globalProperties.$toast = model;
  },
  ...model
};
