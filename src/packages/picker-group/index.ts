/*
 * @Author: Fone`峰
 * @Date: 2021-05-31 10:15:02
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-01 11:17:18
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { defineComponent, createVNode, render } from 'vue';
import PickerGroup from './index.vue';
import { createAssign } from '../utils';

const component = defineComponent(PickerGroup);
// let App: any = null;

// /**
//  *
//  * @param opts 初始化
//  */
// const install = (opts: any = {}) => {
//   const container = document.createElement('div');
//   container.className = opts.className || `vvm-picker-group__wrp`;
//   document.body.appendChild(container);
//   const instance: any = createVNode(
//     component,
//     createAssign(opts, { teleport: container, show: true, Element: container })
//   );
//   render(instance, container);
//   App = instance;
//   App.cancel = () => {
//     createAssign(App.component.props, { show: false });
//   };
//   return App;
// };

class Install {
  public container: HTMLDivElement;
  public App: any;

  constructor(opts: any = {}) {
    this.container = document.createElement('div');
    this.container.className = opts.className || `vvm-picker-group__wrp`;
    document.body.appendChild(this.container);
    const instance: any = createVNode(
      component,
      createAssign(opts, {
        teleport: this.container,
        show: true,
        Element: this.container
      })
    );
    render(instance, this.container);
    this.App = instance;
    this.App.cancel = () => {
      createAssign(this.App.component.props, { show: false });
    };
    return this.App;
  }

  cancel() {
    createAssign(this.App.component.props, { show: false });
  }
}

PickerGroup.show = (opts: any) => {
  const App = new Install(opts);
  return App;
};

// PickerGroup.cancel = () => {
//   if (App) {
//     createAssign(App.component.props, { show: false });
//   }
// };
// PickerGroup.show();

export default PickerGroup;
