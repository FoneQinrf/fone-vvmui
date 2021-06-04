/*
 * @Author: Fone`峰
 * @Date: 2021-06-01 12:55:23
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-03 11:41:35
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount } from '@vue/test-utils';
import PickerGroup from '../';
import { nextTick } from 'vue';

const columns = [
  {
    value: 'jiangsu',
    label: '浙江',
    children: [
      {
        value: 'nanjing',
        label: '杭州',
        children: [
          {
            value: 'fuzimiao',
            label: '西湖'
          }
        ]
      },
      {
        value: 'suzhou',
        label: '宁波',
        children: [
          {
            value: 'zhuozhengyuan',
            label: '老庙'
          },
          {
            value: 'shizilin',
            label: '老街'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          {
            value: 'fuzimiao',
            label: '夫子庙'
          }
        ]
      },
      {
        value: 'suzhou',
        label: '苏州',
        children: [
          {
            value: 'zhuozhengyuan',
            label: '拙政园'
          },
          {
            value: 'shizilin',
            label: '狮子林'
          }
        ]
      }
    ]
  }
];

describe('PickerGroup', () => {
  it('should columns render corretly', async () => {
    const wrapper = mount(PickerGroup, {
      props: { columns: columns, teleport: '' }
    });
    wrapper.trigger('click');
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findAll('.vvm-picker').length === 3).toBe(true);
    expect(wrapper.vm.count).toEqual([0, 0, 0]);
  });

  it('should v-model and chooseText render corretly', async () => {
    const wrapper = mount(PickerGroup, {
      props: { columns: columns, teleport: '', modelValue: [1, 1, 1] }
    });
    wrapper.trigger('click');
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.vm.count).toEqual([1, 1, 1]);
    expect(wrapper.vm.chooseText === '江苏 / 苏州 / 狮子林').toBe(true);
  });

  it('should confirm and cancel click corretly', async () => {
    const wrapper = mount(PickerGroup, {
      props: { columns: columns, teleport: '', modelValue: [1, 1, 1] }
    });
    wrapper.trigger('click');
    await nextTick();
    wrapper.find('.vvm-picker-group__btu.__cancel').trigger('click');
    wrapper.find('.vvm-picker-group__btu.__confirm').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('confirm');
    expect(wrapper.emitted()).toHaveProperty('cancel');
  });

  it('should close render corretly', async () => {
    const wrapper = mount(PickerGroup, {
      props: { columns: columns, teleport: '', modelValue: [1, 1, 1] }
    });
    wrapper.trigger('click');
    await nextTick();
    wrapper.find('.vvm-picker-group__btu.__confirm').trigger('click');
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('.vvm-picker-group__body').exists()).toBe(false);
  });

  it('should async columns and modelValue render corretly', async () => {
    const wrapper = mount(PickerGroup, {
      props: { teleport: '' }
    });
    wrapper.trigger('click');
    await nextTick();
    wrapper.setProps({ columns });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findAll('.vvm-picker').length === 3).toBe(true);
    expect(wrapper.vm.count).toEqual([0, 0, 0]);
    wrapper.setProps({ modelValue: [1, 1, 1] });
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.vm.count).toEqual([1, 1, 1]);
    expect(wrapper.vm.chooseText === '江苏 / 苏州 / 狮子林').toBe(true);
  });
});
