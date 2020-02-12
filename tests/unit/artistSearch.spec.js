/* eslint-disable no-console */
/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import ArtistSearch from '../../src/components/artistSearch.vue';


describe('artistSearch.vue', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(ArtistSearch);

  // it's also easy to check for the existence of elements
  it('ArtistView loaded', () => {
    expect(wrapper.name()).toBe('artistView');
  });
});
