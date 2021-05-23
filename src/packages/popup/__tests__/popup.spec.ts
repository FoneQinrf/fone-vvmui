/*
 * @Author: Fone`峰
 * @Date: 2021-05-16 12:10:17
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-16 12:36:17
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount } from '@vue/test-utils';
import Popup from '../index.vue';
import { nextTick, createVNode } from 'vue';

describe('Popup', () => {
  const wrapper = mount(Popup, { props: { isTeleport: true } });

  it('should render position corretly', async () => {
    wrapper.setProps({
      show: true
    });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();

    wrapper.setProps({ position: 'top' });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();

    wrapper.setProps({ position: 'bottom' });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();

    wrapper.setProps({ position: 'right' });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();

    wrapper.setProps({ position: 'left' });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should click overlay corretly', async () => {
    wrapper.find('.vvm-popup--overlay').trigger('click');
    await nextTick();
    expect(wrapper.emitted()).toHaveProperty('update:show');
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render overlay corretly', async () => {
    wrapper.setProps({ overlay: false });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('.vvm-popup--overlay').exists()).toBe(false);
  });

  it('should render slot corretly', async () => {
    const popup = mount(Popup, {
      slots: {
        default: () => createVNode('span', {}, 'render slot')
      },
      props: {
        show: true,
        isTeleport: true
      }
    });
    await nextTick();
    expect(popup.html()).toMatchSnapshot();
    expect(popup.find('.vvm-popup').find('span').exists()).toBe(true);
  });
});
