/*
 * @Author: Fone`峰
 * @Date: 2021-04-16 17:27:39
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-14 16:46:15
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { defineComponent, ref, createVNode, render, onMounted } from 'vue';
import Dialog from './Dialog.vue';
import { isString, createAssign } from '../utils';

let component: any = null;
let container: any = null;

const App = () =>
  defineComponent({
    setup(props: any) {
      const show = ref(false);

      const close = () => {
        document.body.removeChild(container);
        component = null;
        container = null;
      };

      onMounted(() => {
        show.value = true;
        if (component) {
          component.close = () => {
            show.value = false;
          };
        }
      });

      //button cancel
      const onCancel = () => {
        props.onCancel();
      };
      //button confirm
      const onConfirm = () => {
        props.onConfirm();
      };

      const update = () => {
        show.value = false;
        close();
        props.onClose();
      };

      const slots: any = {
        default: isString(props.msg) ? props.msg : props.msg(),
        title: isString(props.title) ? props.title : props.title()
      };

      return () => {
        const {
          msg,
          confirmText,
          onConfirmClose,
          onCancelClose,
          title,
          teleport,
          onClickOverlay,
          showTitle,
          showButton,
          showCancel,
          showConfirm,
          cancelText
        } = props;

        return (
          <Dialog
            v-slots={slots}
            show={show.value}
            msg={msg}
            title={title}
            teleport={teleport}
            onClickOverlay={onClickOverlay}
            showTitle={showTitle}
            showButton={showButton}
            showCancel={showCancel}
            showConfirm={showConfirm}
            cancelText={cancelText}
            confirmText={confirmText}
            onConfirmClose={onConfirmClose}
            onCancelClose={onCancelClose}
            {...{ onClose: update, onCancel: onCancel, onConfirm: onConfirm }}
          ></Dialog>
        );
      };
    },
    props: createAssign(Dialog.props, {
      onConfirm: {
        type: Function,
        default: () => {}
      },
      onCancel: {
        type: Function,
        default: () => {}
      },
      onClose: {
        type: Function,
        default: () => {}
      }
    })
  });

const install = (opts: any) => {
  container = document.createElement('div');
  container.className = 'vvm-dialog--wrp';
  const instance: any = createVNode(
    App(),
    createAssign({ teleport: container }, { ...opts })
  );
  component = instance;
  render(instance, container);
  document.body.appendChild(container);
};

Dialog.alert = (opts: any = {}) => {
  if (!component) {
    install(opts);
    return component;
  }
};

export default Dialog;
