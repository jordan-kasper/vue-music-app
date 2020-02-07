/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Search from '../../src/components/search.vue';

const wrapper = shallowMount(Search);

describe('Search', () => {
  it('contains input field and button', () => {
    expect(wrapper.find('#inlineFormInputName').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('Button click fires off function call', () => {
    wrapper.setData({ searchValue: 'eminem' });
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.emitted().searchResult[0]).toEqual(['eminem']);
  });
});
