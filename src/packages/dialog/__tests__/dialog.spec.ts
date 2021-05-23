/*
 * @Author: Fone`峰
 * @Date: 2021-05-14 10:53:16
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-15 21:46:20
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount } from '@vue/test-utils';
import Dialog from '../Dialog.vue';
import { nextTick, createVNode } from 'vue';

describe('Dialog', () => {
  const wrapper = mount(Dialog);
  it('should component correctly', async () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render dialog correctly', async () => {
    wrapper.setProps({ show: true });
    await nextTick();
    expect(wrapper.find('.vvm-dialog--body').html()).toMatchSnapshot();
    wrapper.setProps({ show: false });
  });

  it('should render title text correctly', async () => {
    wrapper.setProps({ show: true, title: 'custom title' });
    await nextTick();
    expect(wrapper.find('.vvm-dialog--title').html()).toMatchSnapshot();
    expect(wrapper.find('.vvm-dialog--title').text()).toBe('custom title');
  });

  it('should render msg text correctly', async () => {
    wrapper.setProps({ show: true, msg: 'custom msg' });
    await nextTick();
    expect(wrapper.find('.vvm-dialog--content').html()).toMatchSnapshot();
    expect(wrapper.find('.vvm-dialog--content').text()).toBe('custom msg');
  });

  it('should render title slot correctly', async () => {
    const dialog = mount(Dialog, {
      props: {
        show: true
      },
      slots: {
        title: () => createVNode('span', {}, 'custom title')
      }
    });
    await nextTick();
    expect(dialog.find('.vvm-dialog--title').html()).toMatchSnapshot();
    expect(dialog.find('.vvm-dialog--title').find('span').html()).toBe(
      '<span>custom title</span>'
    );
  });

  it('should render msg slot correctly', async () => {
    const dialog = mount(Dialog, {
      props: {
        show: true
      },
      slots: {
        default: () => createVNode('span', {}, 'custom msg')
      }
    });
    await nextTick();
    expect(dialog.find('.vvm-dialog--content').html()).toMatchSnapshot();
    expect(dialog.find('.vvm-dialog--content').find('span').html()).toBe(
      '<span>custom msg</span>'
    );
  });

  it('should render cancel button and text correctly', async () => {
    const dialog = mount(Dialog, {
      props: { show: true, showCancel: true, cancelText: 'custom cancel' }
    });
    await nextTick();
    expect(dialog.find('.--dialog-cancel').html()).toMatchSnapshot();
    expect(dialog.find('.--dialog-cancel').find('.text').text()).toBe(
      'custom cancel'
    );
    dialog.setProps({ showCancel: false });
    await nextTick();
    expect(dialog.find('.--dialog-cancel').exists()).toBe(false);
  });

  it('should render confirm button and text correctly', async () => {
    expect(wrapper.find('.--dialog-confirm').html()).toMatchSnapshot();
    wrapper.setProps({ confirmText: 'custom confirm' });
    await nextTick();
    expect(wrapper.find('.--dialog-confirm').find('.text').text()).toBe(
      'custom confirm'
    );
    wrapper.setProps({ showConfirm: false });
    await nextTick();
    expect(wrapper.find('.--dialog-confirm').exists()).toBe(false);
  });

  it('should render title hidden correctly', async () => {
    wrapper.setProps({ showTitle: false });
    await nextTick();
    expect(wrapper.find('.vvm-dialog--title').exists()).toBe(false);
  });

  it('should render button hidden correctly', async () => {
    wrapper.setProps({ showConfirm: false, showCancel: false });
    await nextTick();
    expect(wrapper.find('.vvm-dialog--button').exists()).toBe(false);
  });

  it('should cancel click correctly', async () => {
    const dialog = mount(Dialog, {
      props: { show: true, showCancel: true, onCancelClose: false }
    });
    await nextTick();
    dialog.find('.--dialog-cancel').trigger('click');
    await nextTick();
    expect(dialog.vm.show).toBe(true);
    expect(dialog.find('.vvm-dialog--body').exists()).toBe(true);

    dialog.setProps({ onCancelClose: true });
    await nextTick();
    dialog.find('.--dialog-cancel').trigger('click');
    await nextTick();
    expect(dialog.vm.show).toBe(false);
    expect(dialog.find('.vvm-dialog--body').exists()).toBe(false);
  });

  it('should confirm click correctly', async () => {
    const dialog = mount(Dialog, {
      props: { show: true }
    });
    await nextTick();
    dialog.find('.--dialog-confirm').trigger('click');
    await nextTick();
    expect(dialog.vm.show).toBe(true);
    expect(dialog.find('.vvm-dialog--body').exists()).toBe(true);

    dialog.setProps({ onConfirmClose: true });
    await nextTick();
    dialog.find('.--dialog-confirm').trigger('click');
    await nextTick();
    expect(dialog.vm.show).toBe(false);
    expect(dialog.find('.vvm-dialog--body').exists()).toBe(false);
  });
});
