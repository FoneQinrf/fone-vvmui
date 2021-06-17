/*
 * @Author: Fone`峰
 * @Date: 2021-05-31 10:15:02
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-17 15:16:54
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { defineComponent, createVNode, render } from 'vue';
import PickerGroup from './index.vue';
import { createAssign } from '../utils';

const component = defineComponent(PickerGroup);

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
        Element: this.container
      })
    );
    render(instance, this.container);
    this.App = instance;
    //close
    this.App.cancel = () => {
      this.App.type.cancel();
    };
    return this.App;
  }
}

PickerGroup.show = (opts: any) => {
  const App = new Install(opts);
  return App;
};

export default PickerGroup;
