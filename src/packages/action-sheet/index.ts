/*
 * @Author: Fone`峰
 * @Date: 2021-04-15 16:02:29
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-14 17:20:28
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { defineComponent, createVNode, render } from 'vue';
import ActionSheet from './index.vue';
import { createAssign } from '../utils';

const component = defineComponent(ActionSheet);
let App: any = null;

/**
 *
 * @param opts 初始化
 */
const install = (opts: any = {}) => {
  const container = document.createElement('div');
  container.className = opts.className || `vvm-actionsheet--wrp`;
  document.body.appendChild(container);
  const instance: any = createVNode(
    component,
    createAssign(opts, { teleport: container, show: true, Element: container })
  );
  render(instance, container);
  App = instance;
  App.cancel = () => {
    createAssign(App.component.props, { show: false });
  };
  return App;
};

ActionSheet.show = (opts: any) => {
  return install(opts);
};

ActionSheet.cancel = () => {
  if (App) {
    // App.cancel();
    createAssign(App.component.props, { show: false });
  }
};

export default ActionSheet;
