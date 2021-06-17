/*
 * @Author: Fone`峰
 * @Date: 2021-06-10 15:05:57
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-17 14:56:03
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import {
  defineComponent,
  ref,
  createVNode,
  render,
  onMounted,
  Transition,
  computed,
  PropType,
  watch
} from 'vue';
import { createAssign } from '../utils';
// @ts-ignore
import { CheckboxType } from '../checkbox/index.vue';

const App = (app: any) => {
  return defineComponent({
    setup(props) {
      const show = ref(false);
      const height = ref(44);

      let trim: any = null;

      onMounted(() => {
        show.value = true;
        if (app) {
          app.cancel = () => {
            show.value = false;
          };
        }

        trim = setTimeout(() => {
          show.value = false;
          clearTimeout(trim);
          trim = null;
        }, props.duration);
      });

      const style = computed(() => {
        return { height: `${height.value}px` };
      });

      const classes = computed(() => {
        return {
          [`vvm-notify__body`]: true,
          [`__${props.type}`]: props.type
        };
      });

      const onClosed = () => {
        props.onClose();
        if (window) {
          // @ts-ignore
          document.body.removeChild(props.teleport);
        }
      };

      return () => {
        return (
          <Transition name="vvm-slide-top" onAfterLeave={onClosed}>
            {show.value ? (
              <div class={classes.value} style={style.value}>
                {props.msg}
              </div>
            ) : null}
          </Transition>
        );
      };
    },
    props: {
      teleport: Element,
      msg: String,
      type: {
        type: String as PropType<CheckboxType>,
        default: 'default'
      },
      /**
       * 自动关闭的延迟时间
       */
      duration: {
        type: Number,
        default: 1500
      },
      /**
       * 关闭回调
       */
      onClose: {
        type: Function,
        default: () => {}
      }
    }
  });
};

class Install {
  public container: HTMLDivElement;
  public app: any = {};

  constructor(opts: any) {
    this.container = document.createElement('div');
    this.container.className = opts.className || `vvm-notify`;
    document.body.appendChild(this.container);
    const instance: any = createVNode(
      App(this.app),
      createAssign({ teleport: this.container }, { ...opts })
    );
    createAssign(this.app, instance);
    render(instance, this.container);
    return this.app;
  }
}

function install(msg: string, opts: any = {}) {
  const options = createAssign({ msg: msg }, opts);
  if (window) {
    const app = new Install(options);
    return app;
  }
}

install.prototype.name = 'Notify';

export default install;
