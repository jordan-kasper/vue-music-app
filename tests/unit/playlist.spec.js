/* eslint-disable no-console */
/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';

import playlist from '../../src/components/playlist.vue';

describe('playlist.vue', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(playlist);

  // it's also easy to check for the existence of elements
  it('playlist loaded', () => {
    expect(wrapper.name()).toBe('playlist');
  });
});
