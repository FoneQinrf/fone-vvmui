/*
 * @Author: Fone`峰
 * @Date: 2021-05-16 16:14:26
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-17 10:44:26
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount } from '@vue/test-utils';
import Checkbox from '../index.vue';
import CheckboxGroup from '../../checkbox-group/index.vue';
import { nextTick, createVNode } from 'vue';

const array = [
  { label: 'checkbox-1' },
  { label: 'checkbox-2' },
  { label: 'checkbox-3' }
];

describe('Checkbox', () => {
  const components = (props: any = []) => {
    return props.map((item: any) => createVNode(Checkbox, item));
  };
  const checkbox = mount(Checkbox);

  it('should render type corretly', async () => {
    checkbox.setProps({ modelValue: true });
    await nextTick();
    expect(checkbox.html()).toMatchSnapshot();
    expect(checkbox.classes()).toContain('--default');

    checkbox.setProps({ type: 'success' });
    await nextTick();
    expect(checkbox.html()).toMatchSnapshot();
    expect(checkbox.classes()).toContain('--success');

    checkbox.setProps({ type: 'warning' });
    await nextTick();
    expect(checkbox.html()).toMatchSnapshot();
    expect(checkbox.classes()).toContain('--warning');

    checkbox.setProps({ type: 'error' });
    await nextTick();
    expect(checkbox.html()).toMatchSnapshot();
    expect(checkbox.classes()).toContain('--error');
  });

  it('should click checkbox corretly', async () => {
    checkbox.trigger('click');
    await nextTick();
    expect(checkbox.emitted()).toHaveProperty('update:modelValue');
    expect(checkbox.emitted()).toHaveProperty('change');
  });

  it('should render textTheme and label corretly', async () => {
    checkbox.setProps({ modelValue: true, label: 'checkbox', textTheme: true });
    await nextTick();
    expect(checkbox.html()).toMatchSnapshot();
    expect(checkbox.find('.vvm-checkbox--label').text()).toBe('checkbox');
    expect(checkbox.classes()).toContain('--text-theme');
  });

  it('should render disabled and click corretly', async () => {
    const check = mount(Checkbox, { props: { disabled: true } });
    await nextTick();
    check.trigger('click');
    expect(check.emitted()).not.toHaveProperty('update:modelValue');
    expect(check.emitted()).not.toHaveProperty('change');
  });

  it('should render type and textTheme corretly', async () => {
    const wrapper = mount(CheckboxGroup, {
      props: {
        type: 'success',
        textTheme: true
      },
      slots: {
        default: components(array)
      }
    });
    await nextTick();
    wrapper.findAll('.vvm-checkbox')[0].trigger('click');
    await nextTick();
    expect(wrapper.html()).toMatchSnapshot();
    const arr = wrapper.findAllComponents({ name: 'Checkbox' });
    expect(arr[0].classes()).toContain('--success');
    expect(arr[0].classes()).toContain('--text-theme');
    expect(arr[0].vm.active).toBe(true);
    expect(arr[1].vm.active).toBe(false);
    expect(arr[2].vm.active).toBe(false);
  });

  it('should checkbox click corretly', async () => {
    const wrapper = mount(CheckboxGroup, {
      slots: {
        default: components(array)
      }
    });
    await nextTick();
    const arr = wrapper.findAllComponents({ name: 'Checkbox' });
    arr[0].trigger('click');
    await nextTick();
    expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    expect(wrapper.emitted()).toHaveProperty('change');
    expect(wrapper.vm.currentValue).toContain('checkbox-1');
    arr[1].trigger('click');
    await nextTick();
    expect(wrapper.vm.currentValue).toContain('checkbox-1');
    expect(wrapper.vm.currentValue).toContain('checkbox-2');
    arr[0].trigger('click');
    await nextTick();
    expect(wrapper.vm.currentValue).not.toContain('checkbox-1');
    expect(wrapper.vm.currentValue).toContain('checkbox-2');
  });

  it('should render disabled corretly', async () => {
    const wrapper = mount(CheckboxGroup, {
      slots: {
        default: components(array)
      },
      props: {
        disabled: true
      }
    });
    await nextTick();
    const arr = wrapper.findAllComponents({ name: 'Checkbox' });
    arr[1].trigger('click');
    await nextTick();
    expect(wrapper.emitted()).not.toHaveProperty('update:modelValue');
    expect(wrapper.emitted()).not.toHaveProperty('change');
    expect(wrapper.vm.currentValue.length === 0).toBe(true);
  });
});
