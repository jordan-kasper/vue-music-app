/* eslint-disable no-console */
/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import Artist from '../../src/components/artist.vue';


describe('artist.vue', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(Artist);

  // it's also easy to check for the existence of elements
  it('ArtistView loaded', () => {
    expect(wrapper.name()).toBe('artist');
  });
});
