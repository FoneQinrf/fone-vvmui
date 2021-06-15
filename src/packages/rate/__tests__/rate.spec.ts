/*
 * @Author: Fone`峰
 * @Date: 2021-06-09 11:47:19
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-09 13:24:29
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount } from '@vue/test-utils';
import Rate from '../index.vue';
import { nextTick } from 'vue';

describe('Rate', () => {
  it('should count render corretly', async () => {
    const wrapper = mount(Rate);
    wrapper.setProps({ count: 7 });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findAll('.vvm-rate__icon').length === 7).toBe(true);
  });

  it('should disabled click corretly', async () => {
    const wrapper = mount(Rate, { props: { disabled: true } });
    await nextTick();
    wrapper.vm.change(1);
    await nextTick();
    expect(wrapper.vm.currentValue !== 1).toBe(true);
  });

  it('should click and emit corretly', async () => {
    const wrapper = mount(Rate);
    wrapper.vm.change(1);
    await nextTick();
    expect(wrapper.emitted()).toHaveProperty('change');
  });
});
