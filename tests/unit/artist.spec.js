/* eslint-disable no-console */
/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import Artist from '../../src/components/artist.vue';

let wrapper;

describe('artist.vue', () => {
  // Now mount the component and you have the wrapper
  beforeEach(() => {
    wrapper = shallowMount(Artist, {
      data() {
        return {
          artistInfo: [
            {
              id: 13,
              link: 'https://www.deezer.com/artist/13',
              name: 'Eminem',
              nb_album: 33,
              nb_fan: 12555265,
              picture: 'https://api.deezer.com/artist/13/image',
              picture_big:
                'https://e-cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/500x500-000000-80-0-0.jpg',
              picture_medium:
                'https://e-cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/250x250-000000-80-0-0.jpg',
              picture_small:
                'https://e-cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/56x56-000000-80-0-0.jpg',
              picture_xl:
                'https://e-cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/1000x1000-000000-80-0-0.jpg',
              radio: true,
              share:
                'https://www.deezer.com/artist/13?utm_source=deezer&utm_content=artist-13&utm_term=0_1582151616&utm_medium=web',
              tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
              type: 'artist',
            },
          ],
        };
      },
    });
  });
  // it's also easy to check for the existence of elements
  it('ArtistView loaded', () => {
    expect(wrapper.name()).toBe('artist');
  });
});
