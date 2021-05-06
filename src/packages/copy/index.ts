/*
 * @Author: Fone`峰
 * @Date: 2021-05-06 13:31:03
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-06 13:46:50
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
/*
 * @Author: Fone`峰
 * @Date: 2021-01-12 13:46:46
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-01-26 11:45:56
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import toast from '../toast';

export default {
  mounted(el: any, binding: any) {
    if (typeof binding.value === 'string') {
      el.$value = binding.value;
      el.$callback = null;
    } else {
      el.$value = binding.value.text;
      el.$callback = binding.value.callback;
    }
    el.handler = () => {
      if (!el.$value) {
        console.log('无复制内容');
        return;
      }
      const textarea: any = document.createElement('textarea');
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = 'readonly';
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      textarea.value = el.$value;
      document.body.appendChild(textarea);
      textarea.select();
      const result = document.execCommand('Copy');
      if (result) {
        if (el.$callback && typeof el.$callback === 'function') {
          el.$callback();
          return;
        }
        // toast();
        toast.info('复制成功');
      }
      document.body.removeChild(textarea);
    };
    el.addEventListener('click', el.handler);
  },
  updated(el: any, binding: any) {
    if (typeof binding.value === 'string') {
      el.$value = binding.value;
      el.$callback = null;
    } else {
      el.$value = binding.value.text;
      el.$callback = binding.value.callback;
    }
  },
  unmounted(el: any) {
    el.removeEventListener('click', el.handler);
  }
};
