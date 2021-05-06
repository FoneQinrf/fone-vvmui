/*
 * @Author: Fone`峰
 * @Date: 2021-04-22 11:27:20
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-22 16:43:35
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount } from '@vue/test-utils';
import ActionSheet from '../index';
import { nextTick } from 'vue';

const data: any = [
  {
    label: '选择一',
    value: 0
  },
  {
    label: '选择二',
    value: 1
  },
  {
    label: '选择三',
    value: 2
  }
];

describe('ActionSheet', () => {
  const wrapper = mount(ActionSheet);
  it('组件存在', async () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('未传入data没法弹出选项逻辑正常', async () => {
    await wrapper.find('.vvm-actionsheet').trigger('click');
    await nextTick();
    expect(wrapper.vm.showStatus).toBe(false);
  });

  it('同步数据逻辑正常', async () => {
    wrapper.setProps({ data });
    await nextTick();
    wrapper.find('.vvm-actionsheet').trigger('click');
    await nextTick();
    expect(wrapper.vm.showStatus).toBe(true);
  });

  it('禁用逻辑正常', async () => {
    wrapper.vm.showStatus = false;
    wrapper.setProps({ disabled: true, data });
    await nextTick();
    wrapper.find('.vvm-actionsheet').trigger('click');
    await nextTick();
    expect(wrapper.vm.showStatus).toBe(false);
  });

  it('选择逻辑正常', async () => {
    wrapper.setProps({ data, disabled: false });
    await nextTick();
    wrapper.trigger('click');
    await nextTick();
    expect(wrapper.vm.showStatus).toBe(true);
    wrapper.vm.choose(data[1]);
    await nextTick();
    expect(wrapper.vm.currentValue === data[1].value).toBe(true);
    expect(wrapper.vm.label === data[1].label).toBe(true);
  });

  it('异步数据逻辑', async () => {
    wrapper.vm.currentValue = null;
    wrapper.setProps({ data: [], disabled: false });
    await nextTick();
    expect(!wrapper.vm.label).toBe(true);
    wrapper.setProps({ data });
    await nextTick();
    expect(!wrapper.vm.label).toBe(true);
    wrapper.vm.currentValue = data[1].value;
    await nextTick();
    expect(wrapper.vm.label === data[1].label).toBe(true);
  });
});
