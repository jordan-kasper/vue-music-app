/* eslint-disable no-console */
/* eslint-disable func-names */
import { shallowMount } from '@vue/test-utils';
import Results from '../../src/components/results.vue';

let wrapper;

describe('Results.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(Results, {
      data() {
        return {
          songs: [
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
            {
              id: 1109731,
              readable: true,
              title: 'Lose Yourself',
              title_short: 'Lose Yourself',
              title_version: '',
              link: 'https://www.deezer.com/track/1109731',
              duration: 326,
              rank: 985755,
              explicit_lyrics: true,
              explicit_content_lyrics: 1,
              explicit_content_cover: 0,
              preview:
                'https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-10.mp3',
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
                cover: 'https://api.deezer.com/album/119606/image',
                cover_big:
                  'https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg',
                cover_medium:
                  'https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
                cover_small:
                  'https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg',
                cover_xl:
                  'https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg',
                id: 119606,
                title: 'Curtain Call: The Hits',
                tracklist: 'https://api.deezer.com/album/119606/tracks',
                type: 'album',
              },
            },
          ],
        };
      },
    });
  });

  it('Testing data', () => {
    expect(wrapper.vm.songs).toHaveLength(2);
  });
});
