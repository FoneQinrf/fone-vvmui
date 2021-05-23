/*
 * @Author: Fone`峰
 * @Date: 2021-05-17 17:37:01
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-20 16:08:45
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount } from '@vue/test-utils';
import Switch from '../index.vue';
import { nextTick } from 'vue';

describe('Switch', () => {
  const wrapper = mount(Switch);
  it('should render type corretly', async () => {
    wrapper.setProps({ type: 'default' });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('--default');

    wrapper.setProps({ type: 'error' });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('--error');

    wrapper.setProps({ type: 'success' });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('--success');

    wrapper.setProps({ type: 'warning' });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('--warning');
  });

  it('should render active and click corretly', async () => {
    expect(wrapper.find('.vvm-switch--radius.--close').exists()).toBe(true);
    wrapper.trigger('click');
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.classes()).toContain('--active');
    expect(wrapper.emitted()).toHaveProperty('change');
    expect(wrapper.find('.vvm-switch--radius.--active').exists()).toBe(true);
  });

  it('should render disabled coreetly', async () => {
    expect(wrapper.find('.vvm-switch--disabled').exists()).toBe(false);
    wrapper.setProps({ disabled: true });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('.vvm-switch--disabled').exists()).toBe(true);
    wrapper.trigger('click');
    await nextTick();
    expect(wrapper.vm.currentValue).toBe(true);
  });
});
