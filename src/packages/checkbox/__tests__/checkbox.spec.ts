/*
 * @Author: Fone`峰
 * @Date: 2021-04-22 11:27:20
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-06 10:46:14
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount, shallowMount } from '@vue/test-utils';
import Checkbox from '../index.vue';
import CheckboxGroup from '../../checkbox-group/index.vue';
import { nextTick } from 'vue';

describe('Checkbox', () => {
  it('选中逻辑正常', async () => {
    const wrapper = shallowMount(CheckboxGroup, {
      slots: {
        default: [Checkbox, Checkbox]
      }
    });
    // await nextTick();
    // const find = wrapper.findComponent({ name: 'Checkbox' });
    // console.log(find);
  });
});
