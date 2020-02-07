/* eslint-disable no-console */
/* eslint-disable no-undef */

import { shallowMount } from '@vue/test-utils';
import Header from '../../src/components/header.vue';

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(Header);

  // it's also easy to check for the existence of elements
  it('Header loaded', () => {
    expect(wrapper.name()).toBe('Header');
  });
});
