/*
 * @Author: Fone`峰
 * @Date: 2021-04-15 16:02:29
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-10 14:43:22
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
    createAssign(opts, { teleport: container })
  );
  render(instance, container);
  App = instance.component.ctx;
  App.show(container);
  return App;
};

ActionSheet.show = (opts: any) => {
  return install(opts);
};

ActionSheet.cancel = () => {
  if (App) {
    App.cancel();
  }
};

export default ActionSheet;
