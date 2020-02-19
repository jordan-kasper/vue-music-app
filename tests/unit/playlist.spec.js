/* eslint-disable no-console */
/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';

import playlist from '../../src/components/playlist.vue';

let wrapper;

describe('playlist.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(playlist, {
      propsData: {
        playList: [
          {
            id: 854914332,
            readable: true,
            title: 'Darkness',
            title_short: 'Darkness',
            title_version: '',
            link: 'https://www.deezer.com/track/854914332',
            duration: 337,
            rank: 919337,
            explicit_lyrics: true,
            explicit_content_lyrics: 1,
            explicit_content_cover: 1,
            preview:
              'https://cdns-preview-2.dzcdn.net/stream/c-243c0a920bc2c41b18bcd8a20ca5ee41-4.mp3',
            artist: {
              id: 13,
              link: 'https://www.deezer.com/artist/13',
              name: 'Eminem',
              picture: 'https://api.deezer.com/artist/13/image',
              picture_big:
                'https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/500x500-000000-80-0-0.jpg',
              picture_medium:
                'https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/250x250-000000-80-0-0.jpg',
              picture_small:
                'https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/56x56-000000-80-0-0.jpg',
              picture_xl:
                'https://cdns-images.dzcdn.net/images/artist/0707267475580b1b82f4da20a1b295c6/1000x1000-000000-80-0-0.jpg',
              tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
              type: 'artist',
            },
            album: {
              cover: 'https://api.deezer.com/album/127270232/image',
              cover_big:
                'https://cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/500x500-000000-80-0-0.jpg',
              cover_medium:
                'https://cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/250x250-000000-80-0-0.jpg',
              cover_small:
                'https://cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/56x56-000000-80-0-0.jpg',
              cover_xl:
                'https://cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/1000x1000-000000-80-0-0.jpg',
              id: 127270232,
              title: 'Music To Be Murdered By',
              tracklist: 'https://api.deezer.com/album/127270232/tracks',
              type: 'album',
            },
          },
        ],
      },
    });
  });
  // it's also easy to check for the existence of elements
  it('playlist loaded', () => {
    expect(wrapper.name()).toBe('playlist');
  });

  it('Testing play/stop button exist', () => {
    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
  });
  it('Testing Delete song', () => {
    const pl = wrapper.props();
    wrapper.vm.deleteSong(1);
    expect(pl).toMatchObject({ playList: [] });
  });
});
