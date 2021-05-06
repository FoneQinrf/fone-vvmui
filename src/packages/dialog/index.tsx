/*
 * @Author: Fone`峰
 * @Date: 2021-04-16 17:27:39
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-24 15:41:19
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import {
  defineComponent,
  ref,
  createVNode,
  render,
  getCurrentInstance
} from 'vue';
import Dialog from './Dialog.vue';

import { debounce } from '../utils';

// export type DialogMessage = string | (() => JSX.Element);

let component: any = null;

const container = document.createElement('div');
container.className = 'vvm-dialog';

const App = defineComponent({
  props: {
    message: {
      type: [String, Function],
      default() {}
    }
  } as any,
  setup(props) {
    const dialog = ref();

    const visible = () => {
      dialog.value.visible();
    };

    const renderMessage = () => {
      if (typeof props.message !== 'string') {
        return (
          <div class="vvm-dialog--content">
            {{
              default: () => props.message()
            }}
          </div>
        );
      }
      return <div>{props.message}</div>;
    };

    return { renderMessage, visible, dialog, ...props };
  },
  render() {
    const renderMessage = () => {
      if (typeof this.message !== 'string') {
        return (
          <div class="vvm-dialog--content">
            {{
              default: () => this.message()
            }}
          </div>
        );
      }
      return <div>{this.message}</div>;
    };

    return (
      <Dialog ref="dialog" teleport={container}>
        {renderMessage()}
      </Dialog>
    );
  }
});

const install = (opts: any = {}) => {
  const instance: any = createVNode(App, opts);
  render(instance, container);
  component = instance.component.ctx;
  document.body.appendChild(container);
  // component.$refs.dialog.visible();
  component.visible();
};

export const model = {
  info(opts: any = {}) {
    if (!component) {
      install({
        message: () => <div>Vue 3.0</div>
      });
    }
    // Object.assign(app, { show: true, title: <span>2222</span> }, opts)
  }
};

export default {
  ...model
};
