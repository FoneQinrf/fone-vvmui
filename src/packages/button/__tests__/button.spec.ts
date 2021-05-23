/*
 * @Author: Fone`峰
 * @Date: 2021-05-16 10:51:45
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-16 12:02:07
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount } from '@vue/test-utils';
import Button from '../index.vue';
import { nextTick } from 'vue';

describe('Button', () => {
  const wrapper = mount(Button, {
    slots: {
      default: 'button'
    }
  });

  it('should render type correctly', async () => {
    wrapper.setProps({ type: 'default' });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.setProps({ type: 'success' });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.setProps({ type: 'warning' });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.setProps({ type: 'error' });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render size correctly', async () => {
    wrapper.setProps({ type: 'default', size: 'large' });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render loading and click correctly', async () => {
    wrapper.setProps({ size: '', loading: true });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('.vvm-loading-wrp').exists()).toBe(false);
    wrapper.trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click');
  });

  it('should render disabled and click correctly', async () => {
    wrapper.setProps({ disabled: true });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.trigger('click');
    expect(wrapper.emitted()).not.toHaveProperty('click');
  });

  it('should click button correctly', async () => {
    wrapper.setProps({ loading: false, disabled: false });
    await nextTick();
    wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });
});
